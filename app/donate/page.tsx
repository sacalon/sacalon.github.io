import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {  ArrowRight, Download, Code, Cpu, Globe, BookOpen,ArrowLeft, Heart, Github, Star, Users, Zap, Shield, Target } from "lucide-react"

export default function DonatePage() {
  const donationTiers = [
    {
      name: "Supporter",
      amount: "$5",
      period: "month",
      description: "Help cover basic infrastructure costs",
      benefits: ["Supporter badge on GitHub", "Access to supporter-only updates", "Our eternal gratitude"],
      popular: false,
    },
    {
      name: "Contributor",
      amount: "$25",
      period: "month",
      description: "Support active development",
      benefits: [
        "All Supporter benefits",
        "Early access to beta releases",
        "Monthly development updates",
        "Name in contributors list",
      ],
      popular: true,
    },
    {
      name: "Champion",
      amount: "$100",
      period: "month",
      description: "Champion Sacalon's growth",
      benefits: [
        "All Contributor benefits",
        "Direct line to core team",
        "Influence on roadmap priorities",
        "Logo/name on website",
      ],
      popular: false,
    },
  ]

  const oneTimeDonations = [
    { amount: "$10", description: "Buy us coffee" },
    { amount: "$50", description: "Support a feature" },
    { amount: "$100", description: "Fund a release" },
    { amount: "$500", description: "Major contribution" },
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
        <div className="max-w-6xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Heart className="w-10 h-10 text-red-500 mr-3" />
              Support Sacalon
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Help us build the future of programming languages. Your support enables us to dedicate more time to
              development, infrastructure, and community building.
            </p>
          </div>

          {/* Impact Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-2" />
                <CardTitle>Faster Development</CardTitle>
                <CardDescription>
                  Your donations help us work full-time on Sacalon, delivering features and fixes faster
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <CardTitle>Better Infrastructure</CardTitle>
                <CardDescription>
                  Fund better CI/CD, testing infrastructure, and hosting for documentation and tools
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <CardTitle>Growing Community</CardTitle>
                <CardDescription>
                  Support community events, documentation, tutorials, and outreach programs
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Monthly Donations */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Monthly Support</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {donationTiers.map((tier, index) => (
                <Card key={index} className={`relative ${tier.popular ? "border-2 border-blue-600 shadow-lg" : ""}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-600">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <div className="text-4xl font-bold text-blue-600 my-4">
                      {tier.amount}
                      <span className="text-lg text-gray-600">/{tier.period}</span>
                    </div>
                    <CardDescription className="text-base">{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${tier.popular ? "" : "variant-outline"}`}
                      variant={tier.popular ? "default" : "outline"}
                    >
                      Choose {tier.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* One-time Donations */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">One-time Donation</h2>
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Make a One-time Contribution</CardTitle>
                <CardDescription>
                  Prefer to make a single donation? Choose an amount that works for you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {oneTimeDonations.map((donation, index) => (
                    <Button key={index} variant="outline" className="h-20 flex-col bg-transparent">
                      <span className="text-2xl font-bold text-blue-600">{donation.amount}</span>
                      <span className="text-sm text-gray-600">{donation.description}</span>
                    </Button>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-gray-600 mb-4">Or enter a custom amount:</p>
                  <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
                    <div className="flex items-center border rounded-lg px-3 py-2 flex-1">
                      <span className="text-gray-500 mr-2">$</span>
                      <input type="number" placeholder="0.00" className="flex-1 outline-none" min="1" />
                    </div>
                    <Button>Donate</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Corporate Sponsorship */}
          <Card className="mb-12">
            <CardHeader>
              <Target className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle className="text-2xl">Corporate Sponsorship</CardTitle>
              <CardDescription>
                Is your company using Sacalon? Consider becoming a corporate sponsor to support the project and gain
                additional benefits.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Sponsorship Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      Logo placement on website and documentation
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      Priority support and feature requests
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      Direct communication with core team
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      Influence on project roadmap
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      Recognition in release notes
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Sponsorship Tiers</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <span className="font-medium">Bronze Sponsor</span>
                        <p className="text-sm text-gray-600">Small logo, basic benefits</p>
                      </div>
                      <span className="font-bold">$500/mo</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <span className="font-medium">Silver Sponsor</span>
                        <p className="text-sm text-gray-600">Medium logo, priority support</p>
                      </div>
                      <span className="font-bold">$1,500/mo</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <span className="font-medium">Gold Sponsor</span>
                        <p className="text-sm text-gray-600">Large logo, roadmap influence</p>
                      </div>
                      <span className="font-bold">$5,000/mo</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button size="lg">Contact Us for Corporate Sponsorship</Button>
              </div>
            </CardContent>
          </Card>

          {/* Other Ways to Help */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Other Ways to Help</CardTitle>
              <CardDescription>Can't donate right now? There are many other ways to support Sacalon!</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Github className="w-12 h-12 text-gray-800 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Contribute Code</h3>
                  <p className="text-sm text-gray-600 mb-3">Submit PRs, fix bugs, add features</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://github.com/sacalon/sacalon" target="_blank">
                      View Issues
                    </Link>
                  </Button>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Star on GitHub</h3>
                  <p className="text-sm text-gray-600 mb-3">Help us gain visibility</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://github.com/sacalon/sacalon" target="_blank">
                      Star Repository
                    </Link>
                  </Button>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Spread the Word</h3>
                  <p className="text-sm text-gray-600 mb-3">Share Sacalon with others</p>
                  <Button variant="outline" size="sm">
                    Share Project
                  </Button>
                </div>
                <div className="text-center">
                  <Heart className="w-12 h-12 text-red-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Use Sacalon</h3>
                  <p className="text-sm text-gray-600 mb-3">Build projects and provide feedback</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/download">Get Started</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Thank You */}
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="pt-6 text-center">
              <Heart className="w-16 h-16 mx-auto mb-4 text-red-300" />
              <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
              <p className="text-lg opacity-90 mb-6">
                Every contribution, big or small, helps make Sacalon better for everyone. We're grateful for your
                support and excited to build the future of programming together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" asChild>
                  <Link href="/contributors">View Our Contributors</Link>
                </Button>
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
                  asChild
                >
                  <Link href="/foundation">Learn About Our Foundation</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
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
