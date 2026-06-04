const resendApiUrl = "https://api.resend.com/emails";

const siteEmailTo = process.env.ZICASSO_FORM_TO ?? "zicassofineart@gmail.com";
const siteEmailFrom = process.env.ZICASSO_FORM_FROM ?? "onboarding@resend.dev";

type EmailAttachment = {
  filename: string;
  content: string;
  content_type?: string;
};

type SendEmailInput = {
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: EmailAttachment[];
};

export async function sendZicassoEmail({
  subject,
  html,
  replyTo,
  attachments,
}: SendEmailInput) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const response = await fetch(resendApiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: siteEmailFrom,
      to: siteEmailTo,
      subject,
      html,
      reply_to: replyTo,
      attachments,
    }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Resend email failed: ${message}`);
  }

  return response.json();
}

export function escapeHtml(value: FormDataEntryValue | null | undefined) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function textBlock(label: string, value: FormDataEntryValue | null | undefined) {
  return `
    <tr>
      <td style="padding: 14px 0; color: #9a7148; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; vertical-align: top; width: 190px;">${label}</td>
      <td style="padding: 14px 0; color: #2d2925; font-size: 15px; line-height: 1.8;">${escapeHtml(value).replaceAll("\n", "<br />")}</td>
    </tr>
  `;
}

export function emailShell(title: string, rows: string) {
  return `
    <div style="margin: 0; padding: 32px; background: #f8f0e7; font-family: Georgia, 'Times New Roman', serif;">
      <div style="max-width: 720px; margin: 0 auto; background: #fffaf4; border: 1px solid #dfd0c1; box-shadow: 0 20px 50px rgba(74,54,39,0.10);">
        <div style="padding: 34px 38px 22px; border-bottom: 1px solid #e6d9ca;">
          <div style="color: #2d2925; font-size: 28px; letter-spacing: 0.16em;">ZICASSO</div>
          <div style="margin-top: 10px; color: #b49467; font-size: 12px; letter-spacing: 0.24em; text-transform: uppercase;">${title}</div>
        </div>
        <table style="width: 100%; border-collapse: collapse; padding: 20px 38px; display: block;">
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>
  `;
}
