import { NextResponse } from "next/server";
import { sendMail } from "./mailservice";


export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await sendMail(subject, email, message);
    console.log(data);
    res.status(200).send("Success");
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
