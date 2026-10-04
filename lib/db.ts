import { NextResponse } from "next/server";
import { readDb } from "@/lib/db";

export async function GET() {
  const db = await readDb();

  const stats = {
    totalUsers: db.users.length,
    totalItems: db.items.length,
    activeRentals: db.requests.filter((request: any) => request.status === "Accepted").length,
    completedTransactions: db.requests.filter((request: any) => request.status === "Returned").length,
  };

  return NextResponse.json({ stats, users: db.users });
}
