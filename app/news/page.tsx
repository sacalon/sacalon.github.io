import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, ArrowRight, Github } from "lucide-react"

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      slug: "sacalon-v1-4-1-released-performance-improvements",
      title: "Sacalon v1.4.1 Released with Performance Improvements",
      excerpt:
        "The latest version of Sacalon brings significant performance improvements and bug fixes, making your code run faster than ever.",
      date: "February 20, 2023",
      author: "Sacalon Team",
      category: "Release",
      featured: true,
    },
    {
      id: 2,
      slug: "new-http-library-documentation-available",
      title: "New HTTP Library Documentation Available",
      excerpt:
        "Comprehensive documentation for Sacalon's built-in HTTP library is now available, including examples and best practices.",
      date: "February 15, 2023",
      author: "Documentation Team",
      category: "Documentation",
    },
    {
      id: 3,
      slug: "community-spotlight-building-web-apis-with-sacalon",
      title: "Community Spotlight: Building Web APIs with Sacalon",
      excerpt:
        "Learn how developers are using Sacalon to build high-performance web APIs and microservices in production environments.",
      date: "February 10, 2023",
      author: "Community Team",
      category: "Community",
    },
    {
      id: 4,
      slug: "sacalon-foundation-announces-new-contributor-program",
      title: "Sacalon Foundation Announces New Contributor Program",
      excerpt:
        "We're launching a new program to support and recognize contributors to the Sacalon ecosystem with mentorship and resources.",
      date: "February 5, 2023",
      author: "Foundation Team",
      category: "Community",
    },
    {
      id: 5,
      slug: "memory-management-best-practices-guide",
      title: "Memory Management Best Practices Guide",
      excerpt:
        "A comprehensive guide to manual memory management in Sacalon, covering patterns, pitfalls, and performance optimization techniques.",
      date: "January 28, 2023",
      author: "Core Team",
      category: "Tutorial",
    },
    {
      id: 6,
      slug: "sacalon-v1-4-0-introduces-enhanced-ffi-system",
      title: "Sacalon v1.4.0 Introduces Enhanced FFI System",
      excerpt:
        "The new Foreign Function Interface system makes it easier than ever to integrate with existing C and C++ libraries.",
      date: "January 20, 2023",
      author: "Sacalon Team",
      category: "Release",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Release":
        return "bg-green-100 text-green-800"
      case "Documentation":
        return "bg-blue-100 text-blue-800"
      case "Community":
        return "bg-purple-100 text-purple-800"
      case "Tutorial":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/sacalon-logo.jpeg" alt="Sacalon Logo" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold text-gray-900">Sacalon</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/foundation" className="text-gray-700 hover:text-blue-600 transition-colors">
                Foundation
              </Link>
              <Link href="/download" className="text-gray-700 hover:text-blue-600 transition-colors">
                Download
              </Link>
              <Link href="/news" className="text-blue-600 font-medium">
                News
              </Link>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://github.com/sacalon/sacalon" target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sacalon News</h1>
            <p className="text-xl text-gray-600">
              Stay updated with the latest developments, releases, and community highlights
            </p>
          </div>

          {/* Featured Article */}
          {newsItems
            .filter((item) => item.featured)
            .map((item) => (
              <Card key={item.id} className="mb-8 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getCategoryColor(item.category)}>{item.category}</Badge>
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                  <CardTitle className="text-2xl">
                    <Link href={`/news/${item.slug}`} className="hover:text-blue-600 transition-colors">
                      {item.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-lg">{item.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.date}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {item.author}
                      </div>
                    </div>
                    <Button variant="outline" asChild>
                      <Link href={`/news/${item.slug}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

          {/* News Grid */}
          <div className="grid gap-6">
            {newsItems
              .filter((item) => !item.featured)
              .map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(item.category)}>{item.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl">
                      <Link
                        href={`/news/${item.slug}`}
                        className="hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        {item.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>{item.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <User className="w-4 h-4 mr-1" />
                        {item.author}
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/news/${item.slug}`}>
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Newsletter Signup */}
          <Card className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
                <p className="mb-6 opacity-90">
                  Subscribe to our newsletter to get the latest Sacalon news, updates, and tutorials delivered to your
                  inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                  />
                  <Button variant="secondary">Subscribe</Button>
                </div>
                <p className="text-sm opacity-75 mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>
              </div>
            </CardContent>
          </Card>

          {/* Archive */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              View Archive
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/sacalon-logo.jpeg" alt="Sacalon Logo" className="w-8 h-8 rounded-lg" />
                <span className="text-xl font-bold">Sacalon</span>
              </div>
              <p className="text-gray-400">
                Building the future of software development with optimal, maintainable, and efficient code.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Language</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/foundation" className="hover:text-white transition-colors">
                    Foundation
                  </Link>
                </li>
                <li>
                  <Link href="/download" className="hover:text-white transition-colors">
                    Download
                  </Link>
                </li>
                <li>
                  <Link href="/donate" className="hover:text-white transition-colors">
                    Donate
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                {/* <li>
                  <Link href="/contributors" className="hover:text-white transition-colors">
                    Contributors
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-white transition-colors">
                    News
                  </Link>
                </li> */}
                <li>
                  <Link href="https://github.com/sacalon/sacalon" className="hover:text-white transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/sacalon/sacalon/discussions"
                    className="hover:text-white transition-colors"
                  >
                    Discussions
                  </Link>
                </li>
                <li>
                  <Link href="https://discord.gg/sacalon" className="hover:text-white transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/sacalon_lang" className="hover:text-white transition-colors">
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Examples
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2019-2025 Sacalon Programming Language. Open source under BSD-3-Clause license.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
