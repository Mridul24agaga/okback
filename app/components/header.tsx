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
          <div className="flex items-center gap-6">
            <Link 
              href="/blog" 
              className="text-gray-600 hover:text-gray-900"
            >
              Blog
            </Link>
            <Link
              href="/submit-directory"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Submit Your Directory
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

