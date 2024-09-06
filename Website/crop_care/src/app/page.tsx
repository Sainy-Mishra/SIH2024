import Image from "next/image";
import { gsap } from "gsap";

export default function Home() {
  return (
    <main>
      <div className="h-screen pt-5 bg-gradient-to-br from-transparent via-[#6cc28a] to-[#2dd769]">
        <div className="flex flex-row justify-between mx-10">
          <div className="ml-7 align-middle text-xl">Logo</div>
          <div className="mr-7">
            <button className="bg-blue-500 text-white p-[0.5rem] rounded-lg">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
}
