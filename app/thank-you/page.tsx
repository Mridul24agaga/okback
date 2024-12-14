import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You for your selections!</h1>
        <p className="text-gray-600 mb-6">
        Your website will be listed in 7 days and you can see results coming in 30 days
        </p>
        <Link href="/" className="inline-block bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300">
          Return to Home
        </Link>
      </div>
    </div>
  )
}

