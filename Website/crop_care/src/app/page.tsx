"use client"
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/Vision";
import Teams from "@/components/teams";

export default function Home() {
  return (
    <>
      <main className="h-screen relative w-screen mx-auto bg-gradient-to-br from-transparent via-[#6cc28a] to-[#2dd769]">
        <Navbar />
        <Hero />
      </main>
      <About />
      <Teams />
    </>
  );
}
