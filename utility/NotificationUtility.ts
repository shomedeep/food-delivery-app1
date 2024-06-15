require("dotenv").config();

// Email

// notifications

// OTP
export const GenerateOTP = () => {
  const otp = Math.floor(100000 + Math.random() * 900000);
  let expiry = new Date();
  expiry.setTime(new Date().getTime() + 30 * 60 * 1000);

  return { otp, expiry };
};

export const onRequestOTP = async (otp: number, toPhoneNumber: string) => {
  try {
    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;

    const client = require("twilio")(accountSid, authToken);
    console.log(client, "client");

    const response = await client.messages.create({
      body: `Your OTP is ${otp}`,
      from: process.env.PHONE_NUMBER,
      to: `+91${toPhoneNumber}`,
    });

    return response;
  } catch (err) {
    console.log(err);
    return false;
  }
};

// Payment notifications or emails
