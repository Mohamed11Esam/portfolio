import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, projectType, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields (name, email, message)." },
        { status: 400 }
      );
    }

    // Log the lead capture to the server console
    console.log("=== NEW CLIENT INQUIRY RECEIVED ===");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Domain:", projectType);
    console.log("Budget:", budget);
    console.log("Message:", message);
    console.log("====================================");

    return NextResponse.json(
      { success: true, message: "Inquiry received successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error. Please email directly." },
      { status: 500 }
    );
  }
}
