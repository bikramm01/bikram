import { NextResponse } from "next/server";

const BOS_API_URL = "https://www.betazu.com/api/v1/bos/leads";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone_number,
      company,
      what_are_you_looking_for,
      message,
    } = body;

    // Basic validation
    if (!name || !email || !what_are_you_looking_for || !message) {
      return NextResponse.json(
        {
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.BETAZU_BOS_API_KEY;

    if (!apiKey) {
      console.error("BETAZU_BOS_API_KEY is not configured");

      return NextResponse.json(
        {
          message: "Contact service is not configured.",
        },
        { status: 500 }
      );
    }

    const bosResponse = await fetch(BOS_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone_number || undefined,
        company: company || undefined,
        message,

        source: "Bikram Personal Website",

        custom_fields: {
          enquiry_type: what_are_you_looking_for,
        },
      }),
    });

    const bosData = await bosResponse.json().catch(() => null);

    if (!bosResponse.ok) {
      console.error("BOS API error:", {
        status: bosResponse.status,
        data: bosData,
      });

      return NextResponse.json(
        {
          message: "Unable to send your message right now.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully.",
        lead: bosData,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}