import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Github, Terminal, Book, ExternalLink, Clock } from "lucide-react"

export default function DownloadPage() {
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

          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Download Sacalon</h1>
            <p className="text-xl text-gray-600">Get started with Sacalon on your preferred platform</p>
          </div>

          <div className="grid gap-8">
            {/* Latest Release */}
            <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center">
                      <Download className="w-6 h-6 mr-2 text-blue-600" />
                      Latest Release
                    </CardTitle>
                    <CardDescription className="text-lg">Sacalon v1.4.1 - Latest stable version</CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    Latest
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <Button size="lg" asChild>
                    <Link href="https://github.com/sacalon/sacalon/releases/latest" target="_blank">
                      <Download className="w-4 h-4 mr-2" />
                      Windows x64
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="https://github.com/sacalon/sacalon/releases/latest" target="_blank">
                      <Download className="w-4 h-4 mr-2" />
                      macOS
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="https://github.com/sacalon/sacalon/releases/latest" target="_blank">
                      <Download className="w-4 h-4 mr-2" />
                      Linux x64
                    </Link>
                  </Button>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="mb-2">
                    <strong>Release Date:</strong> February 20, 2023
                  </p>
                  <p>
                    <strong>What's New:</strong> Bug fixes, performance improvements, and enhanced C++ interoperability
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Previous Releases */}
            <Card>
              <CardHeader>
                <Clock className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle>Previous Releases</CardTitle>
                <CardDescription>Access older versions and release history</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Need an older version of Sacalon? Browse our complete release history on GitHub to find the version
                  that works best for your project.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Release Archive</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Complete list of all Sacalon releases with changelogs and download links
                    </p>
                    <Button variant="outline" asChild>
                      <Link href="https://github.com/sacalon/sacalon/releases" target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View All Releases
                      </Link>
                    </Button>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Release Notes</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Detailed changelog and migration guides for each version
                    </p>
                    <Button variant="outline" asChild>
                      <Link href="https://github.com/sacalon/sacalon/releases" target="_blank">
                        <Book className="w-4 h-4 mr-2" />
                        Read Changelogs
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Recent Versions</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-800">v1.4.1</span>
                      <span className="text-blue-600">February 20, 2023</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-800">v1.4.0</span>
                      <span className="text-blue-600">January 20, 2023</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-800">v1.3.2</span>
                      <span className="text-blue-600">December 15, 2022</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Installation Methods */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Terminal className="w-8 h-8 text-green-600 mb-2" />
                  <CardTitle>Package Managers</CardTitle>
                  <CardDescription>Install using your favorite package manager</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Homebrew (macOS/Linux)</h4>
                    <div className="bg-gray-900 text-gray-100 p-3 rounded-lg font-mono text-sm">
                      brew install sacalon
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Chocolatey (Windows)</h4>
                    <div className="bg-gray-900 text-gray-100 p-3 rounded-lg font-mono text-sm">
                      choco install sacalon
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Snap (Linux)</h4>
                    <div className="bg-gray-900 text-gray-100 p-3 rounded-lg font-mono text-sm">
                      sudo snap install sacalon
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Github className="w-8 h-8 text-gray-800 mb-2" />
                  <CardTitle>Build from Source</CardTitle>
                  <CardDescription>Compile Sacalon from the latest source code</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-900 text-gray-100 p-3 rounded-lg font-mono text-sm space-y-1">
                    <div>git clone https://github.com/sacalon/sacalon.git</div>
                    <div>cd sacalon</div>
                    <div>make install</div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="mb-2">
                      <strong>Requirements:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>C++ compiler (GCC 9+ or Clang 10+)</li>
                      <li>CMake 3.16+</li>
                      <li>Python 3.8+ (for build scripts)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Getting Started */}
            <Card>
              <CardHeader>
                <Book className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>Your first steps with Sacalon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">1. Verify Installation</h3>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded-lg font-mono text-sm mb-2">
                    sacalon --version
                  </div>
                  <p className="text-sm text-gray-600">This should output the installed version of Sacalon.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">2. Create Your First Program</h3>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm mb-2">
                    <div className="text-gray-400">// hello.sa</div>
                    <div>{`function main(): int {`}</div>
                    <div>{`	print("Hello World!")`}</div>
                    <div>{`	return 0`}</div>
                    <div>{"}"}</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">3. Compile and Run</h3>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded-lg font-mono text-sm space-y-1">
                    <div>sacalon compile hello.sacalon</div>
                    <div>./hello</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild>
                    <Link href="/docs" target="_blank">
                      <Book className="w-4 h-4 mr-2" />
                      Read Documentation
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/sacalon/sacalon/tree/main/examples" target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Examples
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* System Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>System Requirements</CardTitle>
                <CardDescription>Minimum requirements to run Sacalon</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Windows</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Windows 10 or later</li>
                      <li>x64 architecture</li>
                      <li>4GB RAM minimum</li>
                      <li>Visual Studio Build Tools</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">macOS</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>macOS 10.15 or later</li>
                      <li>Intel or Apple Silicon</li>
                      <li>4GB RAM minimum</li>
                      <li>Xcode Command Line Tools</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Linux</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Ubuntu 18.04+ / CentOS 8+</li>
                      <li>x64 architecture</li>
                      <li>4GB RAM minimum</li>
                      <li>GCC or Clang compiler</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
                <p className="mb-6 opacity-90">
                  Having trouble with installation or getting started? We're here to help!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary" asChild>
                    <Link href="https://github.com/sacalon/sacalon/issues" target="_blank">
                      Report an Issue
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
                    asChild
                  >
                    <Link href="https://github.com/sacalon/sacalon/discussions" target="_blank">
                      Join Discussions
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
