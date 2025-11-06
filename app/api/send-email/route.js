import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    console.log("Received email request:", email);
    // if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    //   console.error("credentials not set");
    //   return new Response(JSON.stringify({ success: false, error: "Email credentials not set" }), { status: 500 });
    // }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "geraldrolland123@gmail.com", //process.env.EMAIL_USER, // e.g. your Gmail
        pass: "rohk ayuq kmue kxba" //process.env.EMAIL_PASS, // App password (not your real Gmail password!)
      },
    });

    await transporter.sendMail({
      from: email,
      to: "geraldrolland123@gmail.com", //process.env.RECEIVER_EMAIL, // where you receive messages
      subject: `New message from ${name}`,
      text: message,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p>${message}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ success: false, error }), { status: 500 });
  }
}