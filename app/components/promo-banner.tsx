import Link from "next/link"

export default function PromoBanner() {
  return (
    <div className="w-full bg-[#FF6B00] py-4 px-4">
      <div className="container mx-auto flex flex-col items-center justify-center gap-3 text-center text-sm sm:text-base">
        <div className="flex flex-col items-center justify-center gap-2 text-black sm:flex-row sm:flex-wrap">
          <span>🎉 New Year Special Offer!</span>
          <span>📱 Get your 2 startups listed to 200+ directories at just $87.5 each!</span>
          <span>📅 Plan valid for 1 year.</span>
        </div>
        <Link
          href="/special-offer"
          className="rounded-md bg-black px-6 py-2 font-medium text-white transition-colors hover:bg-black/80"
        >
          Click Here
        </Link>
      </div>
    </div>
  )
}

