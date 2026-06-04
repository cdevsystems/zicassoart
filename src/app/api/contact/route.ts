import { emailShell, sendZicassoEmail, textBlock } from "@/lib/resend-email";

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = formData.get("email");

  try {
    await sendZicassoEmail({
      subject: `New Contact Message - ${formData.get("subject") || "Zicasso Art"}`,
      replyTo: typeof email === "string" ? email : undefined,
      html: emailShell(
        "New Contact Message",
        [
          textBlock("Name", formData.get("name")),
          textBlock("Email", email),
          textBlock("Subject", formData.get("subject")),
          textBlock("Message", formData.get("message")),
        ].join(""),
      ),
    });

    return Response.redirect(new URL("/contact?sent=1", request.url), 303);
  } catch (error) {
    console.error(error);
    return Response.redirect(new URL("/contact?error=1", request.url), 303);
  }
}
