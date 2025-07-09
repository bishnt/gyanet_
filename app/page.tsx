import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Users,
  Zap,
  MessageCircle,
  Coins,
  Brain,
  ArrowRight,
  Smartphone,
  Monitor,
  Star,
  Clock,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GyanetLanding() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
<div className="flex items-center space-x-3 h-10">
  <div className="h-full">
    <Image
      src="/logo.png"
      alt="GYANET Logo"
      width={1200}
      height={400}
      className="h-full w-auto object-contain"
    />
  </div>
</div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-300 hover:text-green-400 transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-gray-300 hover:text-green-400 transition-colors">
                How It Works
              </Link>
              <Link href="#modes" className="text-gray-300 hover:text-green-400 transition-colors">
                Modes
              </Link>
              <Link href="#download" className="text-gray-300 hover:text-green-400 transition-colors">
                Download
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="hidden sm:inline-flex text-gray-300 hover:text-white hover:bg-gray-800"
              >
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-green-600/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-green-500/10 text-green-400 border-green-500/20">
              By Students, For Students
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Learn Together,{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Earn Together
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              The revolutionary peer-to-peer learning platform where students help students. Get your doubts solved
              instantly while earning pocket money as a mentor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                Start Learning
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
              >
                Become a Mentor
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">Available on Web & Mobile • Free to Join • Instant Payouts</p>
          </div>

          <div className="mt-16 max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 blur-3xl"></div>
              <Image
                src="/demo.png?height=600&width=1000"
                alt="GYANET Platform Preview"
                width={1000}
                height={600}
                className="rounded-xl shadow-2xl border border-gray-700 relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dual Mode Section */}
      <section id="modes" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Two Modes, Endless Possibilities</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Switch seamlessly between learning and mentoring modes to maximize your educational experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gray-800 border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl">Learner Mode</CardTitle>
                </div>
                <CardDescription className="text-gray-300 text-lg">
                  Get instant help with your academic doubts and questions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Post questions with AI-suggested pricing based on complexity</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Get matched with qualified mentors instantly</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Real-time chat portal for detailed explanations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Pay only when satisfied with the solution</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl">Mentor Mode</CardTitle>
                </div>
                <CardDescription className="text-gray-300 text-lg">
                  Share your knowledge and earn money helping fellow students
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Receive notifications for questions in your expertise area</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Smart matching based on your grade level and ratings</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Earn points for every successful session</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Convert points to real money instantly</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Powerful Features for Modern Learning</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced technology meets educational excellence in our comprehensive platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:border-green-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-green-500/30 group-hover:to-green-600/30 transition-all">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Alogorithm-Powered Pricing</CardTitle>
                <CardDescription className="text-gray-300">
                  Smart algorithms analyze question complexity, length, subject, and images to suggest optimal pricing.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-green-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-green-500/30 group-hover:to-green-600/30 transition-all">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Real-Time Chat Portal</CardTitle>
                <CardDescription className="text-gray-300">
                  Seamless messaging experience similar to WhatsApp for effective doubt resolution.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-green-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-green-500/30 group-hover:to-green-600/30 transition-all">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Smart Mentor Matching</CardTitle>
                <CardDescription className="text-gray-300">
                  Advanced algorithm matches students with the best mentors based on ratings, availability, and
                  expertise.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-green-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-green-500/30 group-hover:to-green-600/30 transition-all">
                  <Coins className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Seamless Payments</CardTitle>
                <CardDescription className="text-gray-300">
                  Integrated eSewa API for smooth transactions. 1 NPR = 1 in-app point for easy conversion.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-green-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-green-500/30 group-hover:to-green-600/30 transition-all">
                  <Clock className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Auto Session Management</CardTitle>
                <CardDescription className="text-gray-300">
                  Automatic session completion and payment processing to ensure smooth user experience.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-green-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-green-500/30 group-hover:to-green-600/30 transition-all">
                  <Star className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Rating System</CardTitle>
                <CardDescription className="text-gray-300">
                  Comprehensive rating and feedback system to maintain quality and trust in the community.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How GYANET Works</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Simple steps to start your learning or earning journey
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-white">Choose Your Mode</h3>
                  </div>
                  <p className="text-gray-300 text-lg">
                    Sign up and select whether you want to learn (ask questions) or mentor (solve doubts). You can
                    switch modes anytime within the app.
                  </p>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <div className="flex space-x-4">
                      <Button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600">Learner Mode</Button>
                      <Button className="flex-1 bg-gradient-to-r from-green-500 to-green-600">Mentor Mode</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <h3 className="text-2xl font-bold text-white">Smart Matching</h3>
                  </div>
                  <p className="text-gray-300 text-lg">
                    Our system matches learners with the most suitable mentors based on subject expertise, grade
                    level, ratings, and availability.
                  </p>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                        <span className="text-white">Abhisekh-mentor</span>
                        <Badge className="bg-green-500/20 text-green-400">Online</Badge>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                        <span className="text-white">Sahil-metor</span>
                        <Badge className="bg-yellow-500/20 text-yellow-400">Busy</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <h3 className="text-2xl font-bold text-white">Learn & Earn</h3>
                  </div>
                  <p className="text-gray-300 text-lg">
                    Engage in real-time chat sessions to solve doubts. Learners pay points for solutions, mentors earn
                    points that convert to real money.
                  </p>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white">Session Complete</span>
                      <Badge className="bg-green-500/20 text-green-400">+50 Points</Badge>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-green-500 to-green-600">Convert to Cash</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Availability */}
      <section id="download" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Available Everywhere</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Access GYANET on your preferred platform - web or mobile
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-800 border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <CardHeader className="text-center">
                <Monitor className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <CardTitle className="text-white text-2xl">Web Platform</CardTitle>
                <CardDescription className="text-gray-300">
                  Full-featured web application accessible from any browser
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                  Launch Web App
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <CardHeader className="text-center">
                <Smartphone className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <CardTitle className="text-white text-2xl">Mobile App</CardTitle>
                <CardDescription className="text-gray-300">
                  Native mobile experience with push notifications and offline support
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                  Download App
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 via-green-600/5 to-green-500/10 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Transform Your Learning?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the revolution of peer-to-peer learning. Help others while earning money, or get instant help with your
            studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
            >
              Start Learning Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 text-gray-300 border-gray-600 hover:bg-gray-800 hover:text-white bg-transparent"
            >
              Become a Mentor
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-4">Free to join • Instant payouts • 24/7 support</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image src="/logo.png" alt="GYANET Logo" width={120} height={40} className="h-10 w-auto mb-4" />
              <p className="text-gray-400 mb-4">
                Empowering students through peer-to-peer learning. By students, for students.
              </p>
             
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    Status
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    Guidelines
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} GYANET. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">Made with ❤️ for students, by students</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
