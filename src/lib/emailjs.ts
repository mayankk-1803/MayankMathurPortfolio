import emailjs from "@emailjs/browser";

export interface SendEmailPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
  phone?: string;
}

export interface SendEmailResult {
  success: boolean;
  message: string;
}

export async function sendContactEmail(payload: SendEmailPayload): Promise<SendEmailResult> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.warn("EmailJS configuration missing in environment variables.");
    return {
      success: false,
      message: "Email service configuration is not set up. Please verify your environment variables.",
    };
  }

  const templateParams = {
    title: "Portfolio Contact",
    name: payload.name.trim(),
    email: payload.email.trim(),
    phone: payload.phone?.trim() ?? "",
    subject: payload.subject?.trim() || "Portfolio Project Inquiry",
    message: payload.message.trim(),
  };

  try {
    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    if (response.status === 200 || response.text === "OK") {
      return {
        success: true,
        message: "Your message has been sent successfully. I will get back to you shortly!",
      };
    }
    return {
      success: false,
      message: `Failed to send message: ${response.text || "Unknown status"}`,
    };
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : "Failed to connect to email service.";
    console.error("EmailJS dispatch error:", error);
    return {
      success: false,
      message: errorMsg || "Something went wrong while dispatching your message. Please try again.",
    };
  }
}

