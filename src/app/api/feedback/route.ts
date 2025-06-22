import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const data = Object.fromEntries(formData);

  const {
    NEXT_PUBLIC_GOOGLE_FORM_ACTION_URL,
    NEXT_PUBLIC_GOOGLE_FORM_FIRST_NAME_ID,
    NEXT_PUBLIC_GOOGLE_FORM_LAST_NAME_ID,
    NEXT_PUBLIC_GOOGLE_FORM_EMAIL_ID,
    NEXT_PUBLIC_GOOGLE_FORM_PHONE_ID,
    NEXT_PUBLIC_GOOGLE_FORM_COUNTRY_ID,
    NEXT_PUBLIC_GOOGLE_FORM_FEEDBACK_ID,
  } = process.env;

  if (
    !NEXT_PUBLIC_GOOGLE_FORM_ACTION_URL ||
    !NEXT_PUBLIC_GOOGLE_FORM_FIRST_NAME_ID ||
    !NEXT_PUBLIC_GOOGLE_FORM_LAST_NAME_ID ||
    !NEXT_PUBLIC_GOOGLE_FORM_EMAIL_ID ||
    !NEXT_PUBLIC_GOOGLE_FORM_PHONE_ID ||
    !NEXT_PUBLIC_GOOGLE_FORM_COUNTRY_ID ||
    !NEXT_PUBLIC_GOOGLE_FORM_FEEDBACK_ID
  ) {
    return NextResponse.json(
      { message: "Server configuration error." },
      { status: 500 }
    );
  }

  const googleFormData = new FormData();
  googleFormData.append(NEXT_PUBLIC_GOOGLE_FORM_FIRST_NAME_ID, data.firstName as string);
  googleFormData.append(NEXT_PUBLIC_GOOGLE_FORM_LAST_NAME_ID, data.lastName as string);
  googleFormData.append(NEXT_PUBLIC_GOOGLE_FORM_EMAIL_ID, data.email as string);
  googleFormData.append(NEXT_PUBLIC_GOOGLE_FORM_PHONE_ID, data.phone as string);
  googleFormData.append(NEXT_PUBLIC_GOOGLE_FORM_COUNTRY_ID, data.country as string);
  googleFormData.append(NEXT_PUBLIC_GOOGLE_FORM_FEEDBACK_ID, data.feedback as string);

  try {
    await fetch(NEXT_PUBLIC_GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      body: googleFormData,
      mode: "no-cors",
    });
    return NextResponse.json(
      { message: "Feedback submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Feedback submission error:", error);
    return NextResponse.json(
      { message: "An error occurred while submitting feedback." },
      { status: 500 }
    );
  }
}
