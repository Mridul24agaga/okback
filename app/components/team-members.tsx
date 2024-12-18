import { Twitter, Linkedin, Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const teamMembers = [
  {
    name: "Krissmann Gupta",
    role: "Founder | Growth Expert",
    username: "@KrissmannGupta",
    image: "/krissmann.jpg",
    description: "Building SaaS products for startups. Expert in growth hacking and Marketing.",
    achievements: [
      "Indie Hacker and Marketer",
      "Ex-Growth Hacker at Kraya",
      "Ex-Product Manager at CattleGuru",
      "Founder MarkupX | Streamers",
      "Multiple startup exits"
    ],
    twitter: "https://x.com/KrissmannGupta",
    linkedin: "https://www.linkedin.com/in/krissmann/"
  },
  {
    name: "Mridul",
    role: "Web Developer | AI Expert",
    username: "@Innvisionagency",
    image: "/mridul.jpg",
    description: "Technology & automation expert with deep expertise in AI.",
    achievements: [
      "Freelancer at innvision agency",
      "Web developer at multiple startups",
      "AI/ML Expert",
      "Indie Hacker"
    ],
    twitter: "https://x.com/Innvisionagency",
    linkedin: "https://www.linkedin.com/in/mridulthareja/"
  }
]

export default function TeamMembers() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 border-2 border-orange-200 hover:border-orange-300 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-gray-600">{member.role}</p>
                      <p className="text-orange-500 font-medium">{member.username}</p>
                    </div>
                    <div className="flex gap-2">
                      <Link href={member.twitter} className="text-gray-400 hover:text-orange-500 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </Link>
                      <Link href={member.linkedin} className="text-gray-400 hover:text-orange-500 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="mt-6 text-gray-600 leading-relaxed">
                {member.description}
              </p>

              <ul className="mt-6 space-y-3">
                {member.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

