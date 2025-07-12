import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Github, Star, Zap, Shield, Code, Cpu, Globe, BookOpen, Users, Heart } from "lucide-react"

export default function HomePage() {
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-3 h-3 mr-1" />
              Open Source Programming Language
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build Optimal Software with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sacalon
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A general purpose and open source programming language designed to build optimal, maintainable, reliable
              and efficient software. Easy to learn, powerful to use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild>
                <Link href="/download">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://github.com/sacalon/sacalon" target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">See Sacalon in Action</h2>
              <p className="text-gray-600">Simple, elegant syntax inspired by Swift and Pascal</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Code className="w-5 h-5 mr-2" />
                      Encryption Example
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>{`use crypto.sha256

function main(argv : [string]) :int {
    if len(argv) == 2 {
        var data : string = argv[0]
        var hash : string = generate_sha256(data)
        print(hash)
    } else {
        print("Usage: sha256 \\"<string>\\"")
        return 1
    }
    return 0
}`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Fibonacci Example
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>{`function fibonacci(n:float) : float {
    if n <= 1 {
        return n
    } else {
        return fibonacci(n-1) + fibonacci(n-2)
    }
    return 0
}

function main() : int {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for n in numbers {
        print(fibonacci(n))
    }
    return 0
}`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build it in Sacalon Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Build it in Sacalon</h2>
            <p className="text-xl text-gray-600">See what developers are creating with Sacalon</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Globe className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle>Web APIs</CardTitle>
                <CardDescription>
                  High-performance REST APIs and GraphQL services with built-in HTTP library
                </CardDescription>
              </CardHeader>
            
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Cpu className="w-10 h-10 text-green-600 mb-2" />
                <CardTitle>System Tools</CardTitle>
                <CardDescription>
                  Command-line utilities and system software with manual memory management
                </CardDescription>
              </CardHeader>
              
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Code className="w-10 h-10 text-purple-600 mb-2" />
                <CardTitle>Embedded System</CardTitle>
                <CardDescription>Ideal for writing low-level, efficient code for embedded systems and microcontrollers.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Sacalon?</h2>
            <p className="text-xl text-gray-600">Built with modern software development in mind</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <BookOpen className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle>Easy to Learn</CardTitle>
                <CardDescription>
                  Simple, intuitive syntax that's easy to pick up for beginners and familiar to experienced developers
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Globe className="w-10 h-10 text-green-600 mb-2" />
                <CardTitle>Multi-Paradigm</CardTitle>
                <CardDescription>
                  Supports multiple programming paradigms including procedural, object-oriented, and functional
                  programming
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Shield className="w-10 h-10 text-purple-600 mb-2" />
                <CardTitle>Null Safety</CardTitle>
                <CardDescription>
                  Built-in null safety by default prevents common runtime errors and makes your code more reliable
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Zap className="w-10 h-10 text-yellow-600 mb-2" />
                <CardTitle>Fast & Powerful</CardTitle>
                <CardDescription>
                  Compiles to optimized C++ code for maximum performance while maintaining developer productivity
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Cpu className="w-10 h-10 text-red-600 mb-2" />
                <CardTitle>Manual Memory Management</CardTitle>
                <CardDescription>
                  Fine-grained control over memory allocation for system-level programming and optimal performance
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Code className="w-10 h-10 text-indigo-600 mb-2" />
                <CardTitle>C/C++ Compatible</CardTitle>
                <CardDescription>
                  Seamless interoperability with existing C, C++, and Objective-C codebases and libraries
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Involved</h2>
            <p className="text-xl text-gray-600">Join our growing community and help shape the future of Sacalon</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Github className="w-12 h-12 text-gray-800 mx-auto mb-2" />
                <CardTitle>Contribute Code</CardTitle>
                <CardDescription>Submit pull requests, fix bugs, and add new features to the language</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/sacalon/sacalon" target="_blank">
                    View Repository
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <CardTitle>Write Docs</CardTitle>
                <CardDescription>Help improve documentation, write tutorials, and create examples</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/sacalon/sacalon/tree/main/docs" target="_blank">
                    Contribute Docs
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <CardTitle>Join Community</CardTitle>
                <CardDescription>Participate in discussions, help others, and share your projects</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/sacalon/sacalon/discussions" target="_blank">
                    Join Discussions
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-2" />
                <CardTitle>Support Us</CardTitle>
                <CardDescription>Help fund development through donations and sponsorships</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link href="/donate">Donate</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Links Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-xl text-gray-600">Connect with fellow Sacalon developers around the world</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Github className="w-12 h-12 text-gray-800 mx-auto mb-2" />
                <CardTitle>GitHub</CardTitle>
                <CardDescription>Source code, issues, and pull requests</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/sacalon/sacalon" target="_blank">
                    Visit Repository
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <CardTitle>Discussions</CardTitle>
                <CardDescription>Ask questions and share ideas</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/sacalon/sacalon/discussions" target="_blank">
                    Join Discussions
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold">D</span>
                </div>
                <CardTitle>Discord</CardTitle>
                <CardDescription>Real-time chat with the community</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link href="https://discord.gg/sacalon" target="_blank">
                    Join Server
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Join the growing community of developers building with Sacalon</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/download">
                <Download className="w-4 h-4 mr-2" />
                Download Sacalon
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/foundation">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

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
