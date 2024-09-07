"use client"
import React from "react"; // Add this line
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { gsap } from "gsap";

export default function Home() {
  return (
    <>
    <main className="h-screen relative w-screen mx-auto bg-gradient-to-br from-transparent via-[#6cc28a] to-[#2dd769]">
      <Navbar />
    </main>
    <main className="h-screen relative w-screen mx-auto bg-gradient-to-br from-transparent via-[#6cc28a] to-[#2dd769]">
    </main>
    </>
  );
}
