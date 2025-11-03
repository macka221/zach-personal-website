import { Resend } from "resend";
import { emailServerKey } from "./config";

export class SendEmailService {
  private readonly resendApi: Resend;

  constructor() {
    if (emailServerKey === undefined || emailServerKey.length === 0) {
      throw new Error("EMAIL_API_KEY is not set");
    }

    this.resendApi = new Resend(emailServerKey);
  }

  public async sendEmail(emailContent: { email: string; subject: string; body: string; phone: string; name: string; }): Promise<void> {
    const { data, error } = await this.resendApi.emails.send({
      to: 'zachloft.consults@gmail.com',
      from: 'zach-lofton@notifications.zach-lofton.com',
      subject: emailContent.subject,
      text: `${emailContent.name} said "${emailContent.body}" \n Here is their contact number: ${emailContent.phone} and here is their email: ${emailContent.email}`,
    });

    if (error) {
      console.error("Error sending email:", Response.json({ error }, { status: 400 }));
      return;
    }

    console.log("Email sent successfully:", Response.json({ data }));

  }
}

