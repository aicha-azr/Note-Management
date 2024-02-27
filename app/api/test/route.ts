// api/test/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function GET(){
  return NextResponse.json({
    hello: "world"
  })
}
export async function POST() {
  return NextResponse.json({
    message: "good job"
  })
  
}