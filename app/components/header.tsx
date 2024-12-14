import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/getmorepacklinks.png"
              alt="GetMoreBacklinks"
              width={180}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}

