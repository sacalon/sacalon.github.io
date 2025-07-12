import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { ArrowLeft, Target, Users, Code, Lightbulb, Star } from "lucide-react"
import { ArrowRight,ArrowLeft,Target,Lightbulb, Download, Github, Star, Zap, Shield, Code, Cpu, Globe, BookOpen, Users, Heart } from "lucide-react"

export default function FoundationPage() {
  const foundationTeams = [
    {
      name: "Core Development Team",
      description: "Responsible for language design, compiler development, and core features",
      members: [
        { name: "Hasan Kashi", role: "Lead Developer", github: "bistcuite" },
        { name: "Ashkan Laei", role: "Compiler Engineer", github: "ashkan-o" },
        { name: "Mehan Alvandmajd", role: "Language Designer", github: "mehanalavimajd" },
      ],
    },
    {
      name: "Documentation Team",
      description: "Creates and maintains documentation, tutorials, and learning resources",
      members: [
        { name: "Hasan Kashi", role: "Documentation Lead", github: "lisaz" },
        { name: "Shayan Falaki", role: "Website Designer", github: "shayanfpg9" },
      ],
    },
    {
      name: "Infrastructure Team",
      description: "Maintains CI/CD, hosting, and development infrastructure",
      members: [
        { name: "Komeil Parseh", role: "DevOps Engineer", github: "mmdbalkhi" }
      ],
    },
  ]

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
                Documentation
              </Link>
              <Link href="/foundation" className="text-gray-700 hover:text-blue-600 transition-colors">
                Foundation
              </Link>
              <Link href="/download" className="text-gray-700 hover:text-blue-600 transition-colors">
                Download
              </Link>
              <Link href="/donate" className="text-gray-700 hover:text-blue-600 transition-colors">
                Donate
              </Link>
              <Link href="https://github.com/sacalon/sacalon/tree/main/examples" target="_blank" className="text-gray-700 hover:text-blue-600 transition-colors">
                Examples
              </Link>
              {/* <Button variant="ghost" size="sm" asChild>
                <Link href="https://github.com/sacalon/sacalon" target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button> */}
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com/sacalon/sacalon" target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/download">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Link>
              </Button>
            </div>
            <div className="flex items-center space-x-3">
              
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sacalon Foundation</h1>
            <p className="text-xl text-gray-600">
              The principles, mission, and vision behind the Sacalon programming language
            </p>
          </div>

          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <Target className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Sacalon was created with a clear mission: to provide developers with a programming language that
                  combines the best aspects of modern language design while maintaining simplicity and performance. We
                  believe that software development should be both productive and enjoyable, without sacrificing the
                  quality and reliability of the final product.
                </p>
                <p>
                  Our goal is to bridge the gap between high-level productivity and low-level control, giving developers
                  the tools they need to build everything from system software to web applications with confidence.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lightbulb className="w-8 h-8 text-yellow-600 mb-2" />
                <CardTitle>Design Philosophy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h3>Simplicity First</h3>
                <p>
                  Sacalon prioritizes clear, readable syntax that expresses intent without unnecessary complexity. We
                  believe that code should be written for humans first, computers second.
                </p>

                <h3>Safety by Default</h3>
                <p>
                  With built-in null safety and memory management features, Sacalon helps prevent common programming
                  errors at compile time rather than runtime, leading to more reliable software.
                </p>

                <h3>Performance Matters</h3>
                <p>
                  By compiling to optimized C++, Sacalon ensures that your applications run efficiently while
                  maintaining the developer experience of a modern high-level language.
                </p>

                <h3>Interoperability</h3>
                <p>
                  Sacalon is designed to work seamlessly with existing C/C++ codebases, allowing gradual adoption and
                  integration with legacy systems.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Code className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>Technical Foundation</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h3>Inspired by the Best</h3>
                <p>
                  Sacalon draws inspiration from Swift's modern syntax and safety features, combined with Pascal's
                  clarity and structured approach to programming. This combination creates a language that feels
                  familiar yet innovative.
                </p>

                <h3>Compile-Time Guarantees</h3>
                <p>
                  Our compiler performs extensive analysis to catch errors early, including null pointer dereferences,
                  memory leaks, and type mismatches. This results in more reliable software with fewer runtime
                  surprises.
                </p>

                <h3>Built-in Modern Features</h3>
                <ul>
                  <li>Compile-time Foreign Function Interface (FFI) system</li>
                  <li>Built-in HTTP library for web development</li>
                  <li>Optional types for null safety</li>
                  <li>Pattern matching and algebraic data types</li>
                  <li>Automatic memory management with manual override capabilities</li>
                </ul>
              </CardContent>
            </Card>

            {/* Foundation Teams */}
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle>Foundation Teams</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="mb-6">
                  The Sacalon Foundation is organized into specialized teams, each responsible for different aspects of
                  the language's development and community.
                </p>

                <div className="grid gap-6">
                  {foundationTeams.map((team, index) => (
                    <div key={index} className="border rounded-lg p-6 bg-gray-50">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{team.name}</h3>
                      <p className="text-gray-600 mb-4">{team.description}</p>
                      <div className="grid md:grid-cols-3 gap-4">
                        {team.members.map((member, memberIndex) => (
                          <div key={memberIndex} className="text-center p-3 bg-white rounded-lg border">
                            <h4 className="font-semibold text-gray-900">{member.name}</h4>
                            <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`https://github.com/${member.github}`} target="_blank">
                                <Github className="w-3 h-3 mr-1" />@{member.github}
                              </Link>
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle>Community & Open Source</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Sacalon is developed as an open-source project under the BSD-3-Clause license, ensuring that it
                  remains free and accessible to all developers. We believe in the power of community-driven development
                  and welcome contributions from developers around the world.
                </p>

                <h3>Core Values</h3>
                <ul>
                  <li>
                    <strong>Transparency:</strong> All development happens in the open on GitHub
                  </li>
                  <li>
                    <strong>Inclusivity:</strong> We welcome contributors of all skill levels and backgrounds
                  </li>
                  <li>
                    <strong>Quality:</strong> Every change is carefully reviewed and tested
                  </li>
                  <li>
                    <strong>Documentation:</strong> We prioritize clear documentation and examples
                  </li>
                </ul>

                <p>
                  Whether you're reporting bugs, suggesting features, contributing code, or helping with documentation,
                  your participation helps make Sacalon better for everyone.
                </p>
              </CardContent>
            </Card>

            {/* Community Links */}
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-indigo-600 mb-2" />
                <CardTitle>Connect With Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Join our community across different platforms and stay connected with the latest developments.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/sacalon/sacalon" target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/sacalon/sacalon/discussions" target="_blank">
                      <Users className="w-4 h-4 mr-2" />
                      Discussions
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://discord.gg/sacalon" target="_blank">
                      <div className="w-4 h-4 bg-indigo-600 rounded mr-2 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">D</span>
                      </div>
                      Discord
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Sponsors Section */}
            <Card>
              <CardHeader>
                <Star className="w-8 h-8 text-yellow-600 mb-2" />
                <CardTitle>Our Sponsors</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="mb-6">
                  We're grateful to our sponsors who support Sacalon's development and help us build a better
                  programming language for everyone.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 border-2 border-dashed border-gray-300 rounded-lg">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-gray-500 font-bold"><img src="https://github.com/agomlabs.png"/></span>
                    </div>
                    <h4 className="font-semibold text-gray-900">AgomLabs Inc.</h4>
                    <p className="text-sm text-gray-600">Gold Sponsor</p>
                  </div>
                  <div className="text-center p-6 border-2 border-dashed border-gray-300 rounded-lg">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-gray-500 font-bold"><img src="https://github.com/kaspielectronics.png"/></span>
                    </div>
                    <h4 className="font-semibold text-gray-900">KaspiElectronics</h4>
                    <p className="text-sm text-gray-600">Gold Sponsor</p>
                  </div>
                  <div className="text-center p-6 border-2 border-dashed border-gray-300 rounded-lg">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-gray-500 font-bold">LOGO</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Your Company Name</h4>
                    <p className="text-sm text-gray-600">Gold Sponsor</p>
                  </div>
                </div>

                <div className="text-center">
                  <Button asChild>
                    <Link href="/donate">Become a Sponsor</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
                <p className="mb-6 opacity-90">
                  Help us build the future of programming languages. Whether you're a seasoned developer or just getting
                  started, there's a place for you in the Sacalon community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary" asChild>
                    <Link href="/contributors">View Contributors</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
                    asChild
                  >
                    <Link href="https://github.com/sacalon/sacalon" target="_blank">
                      Contribute on GitHub
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
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
