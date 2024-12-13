import type { Metadata } from 'next'
import SubmitDirectoryForm from './SubmitDirectoryForm'

export const metadata: Metadata = {
  title: 'Submit Your Tool | GetMoreBacklinks.org',
  description: 'Submit your directory submission tool to be featured on GetMoreBacklinks.org. Help others discover your valuable SEO resource.',
  openGraph: {
    title: 'Submit Your Tool | GetMoreBacklinks.org',
    description: 'Submit your directory submission tool and join our curated list of SEO resources.',
    url: 'https://www.getmorebacklinks.org/submit',
    siteName: 'GetMoreBacklinks.org',
    images: [
      {
        url: 'https://www.getmorebacklinks.org/127.png',
        width: 1200,
        height: 630,
        alt: 'Submit Your Tool to GetMoreBacklinks.org',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Submit Your Tool | GetMoreBacklinks.org',
    description: 'Submit your directory submission tool and join our curated list of SEO resources.',
    images: ['https://www.getmorebacklinks.org/127.png'],
  },
  alternates: {
    canonical: 'https://www.getmorebacklinks.org/submit',
  },
}

export default function SubmitDirectoryPage() {
  return <SubmitDirectoryForm />
}

