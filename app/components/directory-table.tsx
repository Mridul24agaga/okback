'use client'

import { useState } from 'react'
import { ArrowUpDown } from 'lucide-react'

interface Website {
  id: number
  name: string
  url: string
  category: string
  dr: number
}

const websites: Website[] = [
  { id: 1, name: "Tech | Time", url: "https://time.com/section/tech/", category: "Media", dr: 94 },
  { id: 2, name: "Huffingtonpost", url: "http://www.huffingtonpost.com/", category: "Media", dr: 94 },
  { id: 3, name: "Forbes Technology", url: "http://www.forbes.com/technology/", category: "Media", dr: 94 },
  { id: 4, name: "Guardian Technology", url: "http://www.theguardian.com/uk/technology", category: "Media", dr: 94 },
  { id: 5, name: "HuffPost", url: "https://www.huffpost.com/", category: "Media", dr: 94 },
  { id: 6, name: "SourceForge", url: "https://sourceforge.net/software/vendors/new", category: "Directory", dr: 93 },
  { id: 7, name: "The Verge", url: "https://www.theverge.com/", category: "Media", dr: 93 },
  { id: 8, name: "The Wall Street Journal", url: "https://www.wsj.com/", category: "Media", dr: 93 },
  { id: 9, name: "Mashable", url: "http://mashable.com/", category: "Media", dr: 93 },
  { id: 10, name: "Mashable India", url: "https://in.mashable.com/", category: "Media", dr: 93 },
  { id: 11, name: "CNET", url: "https://www.cnet.com/news/", category: "Media", dr: 93 },
  { id: 12, name: "Engadget", url: "http://www.engadget.com/", category: "Media", dr: 93 },
  { id: 13, name: "Gizmodo", url: "http://www.gizmodo.com/", category: "Media", dr: 93 },
  { id: 14, name: "Psychology Today", url: "https://www.psychologytoday.com/us", category: "Media", dr: 93 },
  { id: 15, name: "TechCrunch", url: "https://techcrunch.com/", category: "Media", dr: 93 },
  { id: 16, name: "Wired", url: "http://www.wired.com/", category: "Media", dr: 93 },
  { id: 17, name: "Quora", url: "www.quora.com", category: "Q&A platform", dr: 93 },
  { id: 18, name: "Behance", url: "http://behance.net/", category: "Creative", dr: 92 },
  { id: 19, name: "Dribbble", url: "https://dribbble.com/", category: "Design", dr: 92 },
  { id: 20, name: "Slide Share", url: "https://www.slideshare.net/", category: "Directories", dr: 92 },
  { id: 21, name: "Source Forge", url: "https://sourceforge.net/", category: "Directories", dr: 92 },
  { id: 22, name: "Softonic", url: "https://en.softonic.com/android", category: "Directory", dr: 92 },
  { id: 23, name: "BostInno", url: "bizjournals.com", category: "Media", dr: 92 },
  { id: 24, name: "Digg", url: "digg.com", category: "Media", dr: 92 },
  { id: 25, name: "Entrepreneur", url: "Entrepreneur.com", category: "Media", dr: 92 },
  { id: 26, name: "Fast Company", url: "https://www.fastcompany.com/", category: "Media", dr: 92 },
  { id: 27, name: "Fastcompany", url: "http://www.fastcompany.com/", category: "Media", dr: 92 },
  { id: 28, name: "PCMag", url: "https://www.pcmag.com/", category: "Media", dr: 92 },
  { id: 29, name: "Slate", url: "https://slate.com/pitch", category: "Media", dr: 92 },
  { id: 30, name: "About Me", url: "https://about.me/", category: "Your personal homepage", dr: 92 },
  { id: 31, name: "ProductHunt", url: "producthunt.com", category: "Community", dr: 91 },
  { id: 32, name: "Crunchbase", url: "crunchbase.com", category: "Directory", dr: 91 },
  { id: 33, name: "GetApp", url: "https://www.gartner.com/en/digital-markets/basic-listing", category: "Directory", dr: 91 },
  { id: 34, name: "MIT Technology Review", url: "https://www.technologyreview.com/", category: "Media", dr: 91 },
  { id: 35, name: "Android Authority", url: "androidauthority.com", category: "Media", dr: 91 },
  { id: 36, name: "Android Central", url: "https://www.androidcentral.com/", category: "Media", dr: 91 },
  { id: 37, name: "Healthline", url: "healthline.com", category: "Media", dr: 91 },
  { id: 38, name: "Inc. Magazine", url: "https://www.inc.com/", category: "Media", dr: 91 },
  { id: 39, name: "PC World", url: "https://www.pcworld.com/", category: "Media", dr: 91 },
  { id: 40, name: "Venture Beat", url: "https://venturebeat.com/", category: "Media", dr: 91 },
  { id: 41, name: "Stripe", url: "https://stripe.com/en-in/partner-proqram", category: "Partner Program", dr: 91 },
  { id: 42, name: "About.me", url: "http://about.me/signup/start", category: "Directory", dr: 90 },
  { id: 43, name: "Business Insider India", url: "https://www.businessinsider.in/", category: "Media", dr: 90 },
  { id: 44, name: "Make Use of", url: "https://www.makeuseof.com/contributor/", category: "Media", dr: 90 },
  { id: 45, name: "MakeUseOf", url: "http://www.makeuseof.com/", category: "Media", dr: 90 },
  { id: 46, name: "ArtStation", url: "https://www.artstation.com/", category: "ArtStation Platform", dr: 89 },
  { id: 47, name: "Atlassian", url: "https://www.atlassian.com/blog/trello/trello-collection-atlassian-community", category: "Community", dr: 89 },
  { id: 48, name: "HackerNews", url: "https://news.ycombinator.com/showhn.html", category: "Forum", dr: 89 },
  { id: 49, name: "Hacker News", url: "https://news.ycombinator.com/", category: "Hacker News", dr: 89 },
  { id: 50, name: "Smashing Magazine", url: "https://www.smashingmagazine.com/", category: "Media", dr: 89 },
  { id: 51, name: "The Register UK", url: "http://www.theregister.co.uk/", category: "Media", dr: 89 },
  { id: 52, name: "Geekwire", url: "Geekwire.com", category: "Directory", dr: 88 },
  { id: 53, name: "Tech in Asia", url: "https://www.techinasia.com/companies/create", category: "Directory", dr: 88 },
  { id: 54, name: "FreeCodeCamp", url: "https://forum.freecodecamp.org/", category: "Forum", dr: 88 },
  { id: 55, name: "TechRepublic", url: "https://www.techrepublic.com/", category: "Forums", dr: 88 },
  { id: 56, name: "HackerNoon", url: "https://hackernoon.com/", category: "Media", dr: 88 },
  { id: 57, name: "AlternativeTo", url: "http://alternativeto.net/", category: "Directory", dr: 87 },
  { id: 58, name: "SitePoint Forums", url: "https://www.sitepoint.com/community/", category: "Community", dr: 86 },
  { id: 59, name: "YourStory", url: "https://yourstory.com/", category: "Media", dr: 86 },
  { id: 60, name: "InfoWorld", url: "https://www.infoworld.com/", category: "Media", dr: 86 },
  { id: 61, name: "InstaPaper", url: "https://www.instapaper.com", category: "Directories", dr: 85 },
  { id: 62, name: "GoodFirms", url: "https://www.goodfirms.co/", category: "Directory", dr: 85 },
  { id: 63, name: "Addictive Tips", url: "https://www.addictivetips.com/tip-us/", category: "Media", dr: 85 },
  { id: 64, name: "Android Headlines", url: "https://www.androidheadlines.com/", category: "Media", dr: 85 },
  { id: 65, name: "SiliconANGLE", url: "https://siliconangle.com/", category: "Media", dr: 85 },
  { id: 66, name: "Towards Data Science", url: "https://towardsdatascience.com/", category: "Publication", dr: 85 },
  { id: 67, name: "DEV Community", url: "http://dev.to/", category: "Community", dr: 84 },
  { id: 68, name: "Devpost", url: "https://devpost.com/software", category: "Community", dr: 84 },
  { id: 69, name: "Get App", url: "https://www.getapp.com/", category: "Directories", dr: 84 },
  { id: 70, name: "CodeProject", url: "https://www.codeproject.com/", category: "Platform", dr: 84 },
  { id: 71, name: "Mac Stories", url: "http://www.macstories.net/", category: "Media", dr: 82 },
  { id: 72, name: "Tech.co", url: "https://tech.co/", category: "Media", dr: 82 },
  { id: 73, name: "Media Index Kochava", url: "https://media-index.kochava.com/", category: "Directories", dr: 80 },
  { id: 74, name: "G2", url: "http://g2.com/products/new", category: "Directory", dr: 80 },
  { id: 75, name: "Read.cv", url: "http://read.cv", category: "Directory", dr: 80 },
  { id: 76, name: "Biggerpockets.com", url: "Biggerpockets.com", category: "Community", dr: 79 },
  { id: 77, name: "Solo.to", url: "https://solo.to/", category: "Platform", dr: 78 },
  { id: 78, name: "ActiveSearch", url: "https://www.activesearchresults.com/", category: "Directories", dr: 78 },
  { id: 79, name: "WebWiki", url: "https://www.webwiki.com/info/add-website.html", category: "Directory", dr: 78 },
  { id: 80, name: "Inc42", url: "https://inc42.com/startup-submission/", category: "Media", dr: 78 },
  { id: 81, name: "G2crowd.com", url: "g2.com", category: "Directories", dr: 77 },
  { id: 82, name: "e27", url: "https://e27.co/", category: "Media", dr: 77 },
  { id: 83, name: "Aapsense", url: "https://www.apsense.com/", category: "Directories", dr: 76 },
  { id: 84, name: "DealRoom", url: "https://app.dealroom.co/companies/fintern", category: "Directory", dr: 76 },
  { id: 85, name: "Startup Digest", url: "https://www.techstars.com/communities/startup-digest", category: "Events", dr: 76 },
  { id: 86, name: "Getting Smart", url: "https://www.gettingsmart.com/", category: "Media", dr: 75 },
  { id: 87, name: "Software World", url: "https://www.softwareworld.co/", category: "Directories", dr: 74 },
  { id: 88, name: "Sitejabber", url: "https://www.sitejabber.com/", category: "Directory", dr: 74 },
  { id: 89, name: "Alternative Me", url: "https://alternative.me/", category: "Directories", dr: 73 },
  { id: 90, name: "Alternative To", url: "https://alternativeto.net/", category: "Directories", dr: 73 },
  { id: 91, name: "Vccircle", url: "https://www.vccircle.com/company/directory", category: "Directory", dr: 73 },
  { id: 92, name: "Babel Slack", url: "https://slack.babeljs.io/", category: "Slack community", dr: 73 },
  { id: 93, name: "Alternative.me", url: "http://alternative.me/how-to/submit-software", category: "AI directory", dr: 72 },
  { id: 94, name: "F6S", url: "https://www.f6s.com/", category: "Community", dr: 72 },
  { id: 95, name: "All top startups", url: "http://alltopstartups.com/submit-startup/", category: "Directory", dr: 72 },
  { id: 96, name: "AllTopStartups", url: "https://alltopstartups.com/", category: "Media", dr: 72 },
  { id: 97, name: "FinancesOnline.com", url: "FinancesOnline.com", category: "Media", dr: 72 },
  { id: 98, name: "Vator", url: "https://vator.tv", category: "Media", dr: 72 },
  { id: 99, name: "Crowd Reviews", url: "http://crowdreviews.com/", category: "Directories", dr: 71 },
  { id: 100, name: "Software Review", url: "https://provider.softwarereviews.com/", category: "Directories", dr: 71 },
  { id: 101, name: "EU Tech", url: "https://tech.eu/", category: "Media", dr: 71 },
  { id: 102, name: "Libhunt", url: "https://www.libhunt.com/", category: "Directories", dr: 70 },
  { id: 103, name: "Built in Chicago", url: "https://www.builtinchicago.org/contact/send_us_tip", category: "Media", dr: 70 },
  { id: 104, name: "Cloud Native Computing Foundation", url: "https://slack.cncf.io/", category: "Slack community", dr: 70 },
  { id: 105, name: "Startups UK", url: "startups.co.uk", category: "Directories", dr: 69 },
  { id: 106, name: "All Top", url: "https://alltop.com/", category: "Directory", dr: 69 },
  { id: 107, name: "Tekpon", url: "http://tekpon.com/get-listed", category: "Directory", dr: 69 },
  { id: 108, name: "Site Jabber", url: "sitejabber.com", category: "Directories", dr: 68 },
  { id: 109, name: "Cool mom picks", url: "coolmompicks.com", category: "Directories", dr: 67 },
  { id: 110, name: "Dang", url: "http://dang.ai/submit", category: "Directory", dr: 67 },
  { id: 111, name: "EU-Startups Database", url: "https://www.eu-startups.com/directory/", category: "Directory", dr: 67 },
  { id: 112, name: "Growth hackers", url: "https://community.growthhackers.com/", category: "Forum", dr: 67 },
  { id: 113, name: "Growth Hackers", url: "growthhackers.com", category: "Community", dr: 66 },
  { id: 114, name: "StartupRanking", url: "https://www.startupranking.com/", category: "Directory", dr: 66 },
  { id: 115, name: "Software Advice", url: "https://www.softwareadvice.com/vendors/", category: "MarketPlace", dr: 66 },
  { id: 116, name: "Alltopstartups.com", url: "alltopstartups.com", category: "Directories", dr: 65 },
  { id: 117, name: "Springwise", url: "springwise.com", category: "Directories", dr: 65 },
  { id: 118, name: "Startup Grind", url: "https://www.startupgrind.com/", category: "Slack Community", dr: 65 },
  { id: 119, name: "Bunity", url: "https://www.bunity.com/", category: "Community", dr: 64 },
  { id: 120, name: "Foundr", url: "Foundr.com", category: "Media", dr: 64 },
  { id: 121, name: "SaaStr", url: "https://www.saastr.com/", category: "B2B SaaS Training", dr: 63 },
  { id: 122, name: "Tricky Enough", url: "https://www.trickyenough.com/", category: "Directories", dr: 61 },
  { id: 123, name: "AppSumo", url: "https://sell.appsumo.com/", category: "Launch Platform", dr: 61 },
  { id: 124, name: "Cloud Foundry", url: "https://slack.cloudfoundry.org/", category: "Slack community", dr: 61 },
  { id: 125, name: "TechnologyAdvice", url: "https://technologyadvice.com/", category: "B2B Media Services", dr: 60 },
  { id: 126, name: "Killerstartups", url: "killerstartups.com", category: "Directories", dr: 60 },
  { id: 127, name: "Betalist", url: "http://betalist.com/", category: "Directory", dr: 60 },
  { id: 128, name: "All my faves", url: "https://allmyfaves.com/", category: "Tools", dr: 60 },
  { id: 129, name: "Famous AI Tools", url: "https://famousaitools.ai/", category: "AI Marketing", dr: 59 },
  { id: 130, name: "Startupxplore", url: "https://startupxplore.com/en/startups", category: "Directory", dr: 59 },
  { id: 131, name: "Slant", url: "http://slant.co", category: "Community", dr: 58 },
  { id: 132, name: "Uplabs", url: "https://www.uplabs.com/submit", category: "Directories", dr: 58 },
  { id: 133, name: "Makerlog", url: "https://getmakerlog.com/", category: "Directory", dr: 58 },
  { id: 134, name: "Webrazzi", url: "http://webrazzi.com/en/startup-form/", category: "Media", dr: 58 },
  { id: 135, name: "People Ops & HR Community", url: "https://lattice.com/community/rfh", category: "Slack Community", dr: 58 },
  { id: 136, name: "SaaS Tools", url: "https://saasaitools.com/", category: "Community", dr: 57 },
  { id: 137, name: "EU startups", url: "eu-startups.com", category: "Directories", dr: 57 },
  { id: 138, name: "hotfrog", url: "https://www.hotfrog.com/", category: "Get found online", dr: 57 },
  { id: 139, name: "Slant.co", url: "https://www.slant.co/", category: "Product Rankings", dr: 57 },
  { id: 140, name: "StackShare", url: "https://stackshare.io/", category: "Tech Stack Intelligence", dr: 57 },
  { id: 141, name: "Devhunt", url: "https://devhunt.org/", category: "AI directory", dr: 56 },
  { id: 142, name: "Mind the product", url: "http://slack.mindtheproduct.com/", category: "Community", dr: 56 },
  { id: 143, name: "Data Quest", url: "https://www.dataquest.io/chat", category: "Community", dr: 56 },
  { id: 144, name: "All Software Categories - GoodFirms", url: "https://www.goodfirms.co/directories/software", category: "Directory", dr: 55 },
  { id: 145, name: "Alternative.me", url: "http://alternative.me/", category: "Directory", dr: 55 },
  { id: 146, name: "WIP", url: "http://wip.co/projects/new", category: "Directory", dr: 55 },
  { id: 147, name: "Tech directory", url: "http://techdirectory.io/get-listed", category: "Directory", dr: 55 },
  { id: 148, name: "NextBigWhat", url: "https://nextbigwhat.com/", category: "Media", dr: 55 },
  { id: 149, name: "WP Newsify", url: "https://wpnewsify.com/", category: "Media", dr: 55 },
  { id: 150, name: "TechDirectory", url: "https://www.techdirectory.io/", category: "Technology Business Directory", dr: 55 },
  { id: 151, name: "FiveTaco", url: "http://fivetaco.com/submit", category: "Directory", dr: 54 },
  { id: 152, name: "Indiehackers", url: "https://www.indiehackers.com/", category: "Forum", dr: 54 },
  { id: 153, name: "Changelog", url: "https://changelog.com/news/submit", category: "Media", dr: 54 },
  { id: 154, name: "Venture Village", url: "http://venturevillage.eu/", category: "Media", dr: 54 },
  { id: 155, name: "Product School", url: "https://www.productschool.com/slack-community/", category: "Slack Community", dr: 54 },
  { id: 156, name: "AI TOOL GURU", url: "https://aitoolguru.com/", category: "AI tools directory", dr: 53 },
  { id: 157, name: "Tracxn", url: "https://tracxn.com/", category: "Startup platform", dr: 53 },
  { id: 158, name: "NoCodeDevs", url: "https://www.nocodedevs.com/", category: "Directories", dr: 52 }
]

export default function DirectoryTable() {
  const [sortColumn, setSortColumn] = useState<keyof Website>('dr')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const handleSort = (column: keyof Website) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('desc')
    }
  }

  const categories = Array.from(new Set(websites.map(w => w.category))).sort()

  const filteredAndSortedWebsites = websites
    .filter(website => {
      const matchesSearch = website.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        website.category.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || website.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      const multiplier = sortDirection === 'asc' ? 1 : -1
      if (typeof a[sortColumn] === 'string') {
        return multiplier * (a[sortColumn] as string).localeCompare(b[sortColumn] as string)
      }
      return multiplier * ((a[sortColumn] as number) - (b[sortColumn] as number))
    })

  return (
    <div className="bg-white min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-2xl mb-8 font-semibold">
          Top Directory Submission Sites 👈 filtered by Domain Rating (DR)
        </h1>

        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="p-4 border-b bg-gray-50 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search websites or categories..."
                  className="w-full px-4 py-2 border rounded-lg"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-2 border rounded-lg bg-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-sm text-gray-500">
              Showing {filteredAndSortedWebsites.length} results
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="max-h-[600px] overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-gray-50 z-10">
                  <tr className="border-b">
                    <th className="px-6 py-3 text-left font-medium text-gray-500">#</th>
                    <th 
                      className="px-6 py-3 text-left font-medium text-gray-500 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort('name')}
                    >
                      <div className="flex items-center gap-2">
                        Website
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th 
                      className="px-6 py-3 text-left font-medium text-gray-500 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort('dr')}
                    >
                      <div className="flex items-center gap-2">
                        DR
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th 
                      className="px-6 py-3 text-left font-medium text-gray-500 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort('category')}
                    >
                      <div className="flex items-center gap-2">
                        Category
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAndSortedWebsites.map((website, index) => (
                    <tr 
                      key={website.id}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-gray-600">{index + 1}</td>
                      <td className="px-6 py-4">
                        <a 
                          href={website.url.startsWith('http') ? website.url : `https://${website.url}`}
                          className="text-blue-600 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {website.name}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{website.dr}</td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                          {website.category}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500">
          Scroll to see more directories • Total: {websites.length} directories
        </div>
      </div>
    </div>
  )
}

