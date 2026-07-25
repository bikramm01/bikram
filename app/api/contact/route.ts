// src/app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";

const FORM_ID =
  "b0b2727847c66a07a0e8fca0804ee2a23f78b5ea873ef98f02f77c15a1b24565";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch(
      `https://www.betazu.com/api/sites/form/${FORM_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        cache: "no-store",
      }
    );

    const text = await response.text();

console.log("Status:", response.status);
console.log("Response:", text);

const data = text ? JSON.parse(text) : {};

    if (!response.ok) {
      return NextResponse.json(data, {
        status: response.status,
      });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}