import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const myemail = process.env.MY_EMAIL;
const password = process.env.MY_PASSWORD;

export const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: myemail,
      pass: password,
    },
  });

export const mailOptions: Mail.Options = {
    from: myemail,
    to: myemail,
  };