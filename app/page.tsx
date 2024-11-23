import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Rocket,
  ArrowRight,
  CheckCircle,
  Clock,
  Zap,
  MessageSquare,
  Mail
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 gradient-bg overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 rounded-full">
            Professional Web Development
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 gradient-text">
            Transform Your Business with a Stunning Website
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We create beautiful, responsive websites that help your business grow. 
            Fast delivery, competitive pricing, and exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full" asChild>
              <Link href="#contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-full" asChild>
              <Link href="#portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Our Services</h2>
            <p className="text-muted-foreground">Comprehensive web solutions for your business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 card-hover bg-card/50 backdrop-blur-sm">
              <Globe className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Business Websites</h3>
              <p className="text-muted-foreground">Professional websites that represent your brand and attract customers</p>
            </Card>
            <Card className="p-6 card-hover bg-card/50 backdrop-blur-sm">
              <Smartphone className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p className="text-muted-foreground">Mobile-friendly websites that look great on all devices</p>
            </Card>
            <Card className="p-6 card-hover bg-card/50 backdrop-blur-sm">
              <Code2 className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
              <p className="text-muted-foreground">Tailored solutions with modern technologies and best practices</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Our Recent Work</h2>
            <p className="text-muted-foreground">Check out some of our latest projects</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden card-hover bg-card/50 backdrop-blur-sm">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Business Website"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-Commerce Platform</h3>
                <p className="text-muted-foreground mb-4">Modern online store with seamless checkout</p>
                <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full">React</Badge>
                <Badge className="ml-2 bg-primary/10 text-primary border-primary/20 rounded-full">Next.js</Badge>
                <Badge className="ml-2 bg-primary/10 text-primary border-primary/20 rounded-full">Tailwind CSS</Badge>
              </div>
            </Card>
            <Card className="overflow-hidden card-hover bg-card/50 backdrop-blur-sm">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                  alt="Corporate Website"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Corporate Website</h3>
                <p className="text-muted-foreground mb-4">Professional business presence with modern design</p>
                <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full">TypeScript</Badge>
                <Badge className="ml-2 bg-primary/10 text-primary border-primary/20 rounded-full">Next.js</Badge>
                <Badge className="ml-2 bg-primary/10 text-primary border-primary/20 rounded-full">Tailwind CSS</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Our Process</h2>
            <p className="text-muted-foreground">Simple and efficient development process</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">1. Consultation</h3>
              <p className="text-muted-foreground">Understand your needs and goals</p>
            </div>
            <div className="text-center">
              <Rocket className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">2. Planning</h3>
              <p className="text-muted-foreground">Design and development strategy</p>
            </div>
            <div className="text-center">
              <Code2 className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">3. Development</h3>
              <p className="text-muted-foreground">Building your custom solution</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">4. Launch</h3>
              <p className="text-muted-foreground">Deploy and maintain your site</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Why Choose Us</h2>
            <p className="text-muted-foreground">Benefits of working with our team</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 card-hover bg-card/50 backdrop-blur-sm">
              <Clock className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">Get your website up and running quickly with our efficient process</p>
            </Card>
            <Card className="p-6 card-hover bg-card/50 backdrop-blur-sm">
              <Zap className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Modern Technology</h3>
              <p className="text-muted-foreground">Built with the latest web technologies for optimal performance</p>
            </Card>
            <Card className="p-6 card-hover bg-card/50 backdrop-blur-sm">
              <MessageSquare className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
              <p className="text-muted-foreground">Ongoing support and maintenance for your website</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Get Started Today</h2>
            <p className="text-muted-foreground">Ready to transform your business?</p>
          </div>
          <div className="max-w-xl mx-auto text-center">
            <Card className="p-8 card-hover bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss your project and create something amazing together.
              </p>
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 rounded-full" asChild>
                <Link href="mailto:contact@webcraftstudio.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          <p>© 2024 WebCraft Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}