"use client"
import Loading from "@/components/Loading";
import React, { useState, useEffect, Suspense } from "react";
import { useSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/Vision";
import Teams from "@/components/teams";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="h-screen relative w-screen mx-auto bg-gradient-to-br from-transparent via-[#6cc28a] to-[#2dd769]">
        <Navbar />
        <Hero />
      </main>
      <About />
      <Teams />
    </Suspense>
  );
}
