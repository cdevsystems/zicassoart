import { emailShell, sendZicassoEmail, textBlock } from "@/lib/resend-email";

const maxAttachmentBytes = 8 * 1024 * 1024;
const maxTotalBytes = 20 * 1024 * 1024;

async function fileToAttachment(file: File) {
  const bytes = Buffer.from(await file.arrayBuffer());

  return {
    filename: file.name,
    content: bytes.toString("base64"),
    content_type: file.type || "application/octet-stream",
  };
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = formData.get("email");
  const files = formData
    .getAll("references")
    .filter((entry): entry is File => entry instanceof File && entry.size > 0);

  const totalBytes = files.reduce((sum, file) => sum + file.size, 0);
  const hasOversizedFile = files.some((file) => file.size > maxAttachmentBytes);

  if (hasOversizedFile || totalBytes > maxTotalBytes) {
    return Response.redirect(new URL("/custom-orders?error=files", request.url), 303);
  }

  try {
    const attachments = await Promise.all(files.map(fileToAttachment));

    await sendZicassoEmail({
      subject: `New Custom Order Request - ${formData.get("name") || "Zicasso Art"}`,
      replyTo: typeof email === "string" ? email : undefined,
      attachments,
      html: emailShell(
        "New Custom Order Request",
        [
          textBlock("Name", formData.get("name")),
          textBlock("Email", email),
          textBlock("Artwork Type", formData.get("artwork-type")),
          textBlock("Placement", formData.get("placement")),
          textBlock("Vision", formData.get("description")),
          textBlock(
            "Attachments",
            files.length
              ? files.map((file) => `${file.name} (${Math.round(file.size / 1024)} KB)`).join("\n")
              : "No reference files uploaded",
          ),
        ].join(""),
      ),
    });

    return Response.redirect(new URL("/custom-orders?sent=1", request.url), 303);
  } catch (error) {
    console.error(error);
    return Response.redirect(new URL("/custom-orders?error=1", request.url), 303);
  }
}
