import Image from "next/image"
import Link from "next/link"

export default function CuratorsSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            {/* Images Section */}
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[480px] aspect-square mb-8 lg:mb-0">
              {/* First Image */}
              <div className="absolute top-0 left-0 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px]">
                <div className="relative w-full h-full">
                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-orange-500 opacity-75 blur-md rounded-full" />
                  <div className="absolute inset-0 bg-orange-500 opacity-20 rounded-full" />
                  {/* Image Container */}
                  <div className="relative rounded-full overflow-hidden border-2 border-orange-500/50 w-full h-full">
                    <Image
                      src="/krissman.jpg"
                      alt="Curator 1"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                      style={{ objectPosition: 'center 20%' }}
                    />
                  </div>
                </div>
              </div>
              {/* Second Image */}
              <div className="absolute bottom-0 right-0 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px]">
                <div className="relative w-full h-full">
                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-orange-500 opacity-75 blur-md rounded-full" />
                  <div className="absolute inset-0 bg-orange-500 opacity-20 rounded-full" />
                  {/* Image Container */}
                  <div className="relative rounded-full overflow-hidden border-2 border-orange-500/50 w-full h-full">
                    <Image
                      src="/mridul.jpg"
                      alt="Curator 2"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block px-4 py-2 rounded-full bg-gray-100 border border-gray-300 mb-4 sm:mb-6">
                <span className="text-gray-700 text-xs sm:text-sm font-medium">Who we are?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">
                Hi, we are the curators
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Our years of experience in building, selling startups and helping others theirs,
                combined with learnings of successful entrepreneurs. We've distilled our million-dollar
                brain juice into a replicable system
              </p>
              <div className="mb-6 sm:mb-8">
                <span className="text-gray-600">LinkedIn: </span>
                <Link href="https://www.linkedin.com/in/krissmann/" className="text-orange-500 hover:text-orange-600 transition-colors mr-2">
                  Krissman
                </Link>
                <span className="text-gray-600">|</span>
                <Link href="https://www.linkedin.com/in/mridulthareja/" className="text-orange-500 hover:text-orange-600 transition-colors ml-2">
                  Mridul
                </Link>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
                <div>
                  <div className="text-orange-500 text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">10+</div>
                  <div className="text-gray-600 text-sm sm:text-base">Products built</div>
                </div>
                <div>
                  <div className="text-orange-500 text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">3</div>
                  <div className="text-gray-600 text-sm sm:text-base">Successful Acquisition</div>
                </div>
                <div>
                  <div className="text-orange-500 text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">25+</div>
                  <div className="text-gray-600 text-sm sm:text-base">Clients served</div>
                </div>
                <div>
                  <div className="text-orange-500 text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">20M+</div>
                  <div className="text-gray-600 text-sm sm:text-base">Revenue added to our clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

