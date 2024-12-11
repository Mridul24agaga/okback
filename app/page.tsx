import Image from "next/image";
import Hero from "@/app/components/Hero"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <div>
      <Hero/>
      <Analytics/>
    </div>
  );
}
