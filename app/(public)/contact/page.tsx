/* eslint-disable react/no-unescaped-entities */
import ContactForm from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Calendar,
  Clock,
  Globe,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="home-heading">Get In Touch</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new projects, opportunities or
            partnerships. Feel free to reach out using any method below.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h2>
              <ContactForm />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* About Contact Card */}
            <Card className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center">
                  <div className="h-8 w-8 rounded-full bg-emerald-100 dark:bg-emerald-700 flex items-center justify-center mr-3">
                    <Mail className="h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                  </div>
                  Let's Connect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  I'm currently available for freelance work, full-time
                  positions, or just to discuss interesting ideas.
                </p>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                  <span className="text-emerald-700 dark:text-emerald-300 font-medium">
                    Response time: Within 24 hours
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details Card */}
            <Card className="bg-white dark:bg-gray-800 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Location
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Havertown, PA
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      United States - 19083
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Email
                    </h3>
                    <a
                      href="mailto:ranokraihan@gmail.com"
                      className="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      ranokraihan@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Availability
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Weekdays: 9AM - 6PM (EST)
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Weekends: Limited availability
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                    <Calendar className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Hiring Status
                    </h3>
                    <p className="text-green-600 dark:text-green-400 font-medium">
                      Available for new opportunities
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Connect Card */}
            <Card className="bg-white dark:bg-gray-800 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  Connect Online
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/ranokraihan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-5 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <FaGithub className="mr-2" /> Github
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ranok-raihan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-blue-100 dark:bg-blue-900/30 rounded-full px-5 py-2 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors"
                  >
                    <Linkedin className="mr-2" /> LinkedIn
                  </a>
                  <a
                    href="/assets/resume.pdf"
                    target="_blank"
                    className="flex items-center bg-emerald-100 dark:bg-emerald-900/30 rounded-full px-5 py-2 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-800/30 transition-colors"
                  >
                    <Globe className="mr-2" /> Portfolio
                  </a>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-700">
                  <Link
                    href="/projects"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    View my work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* World Map/Location Visualization */}
        {/* <div className="mb-16 relative rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md">
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Location
            </h2>
          </div>
          <div className="relative h-[400px] overflow-hidden">
            <Image
              src="/assets/images/map.png"
              alt="World Map"
              fill
              className="object-cover opacity-30 dark:opacity-20"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg">
                  <p className="text-gray-800 dark:text-gray-200 font-medium">
                    Currently based in
                  </p>
                  <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    United States
                  </p>
                </div>
                <div className="h-6 w-6 bg-red-500 rounded-full animate-ping"></div>
                <div className="h-6 w-6 bg-red-500 rounded-full absolute top-0"></div>
              </div>
            </div>
          </div>
        </div> */}

        {/* FAQ / Common Questions */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Quick Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
            <Card className="bg-white dark:bg-gray-800 border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">
                  Interested in working together?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  I'm currently available for freelance projects and full-time
                  positions.
                </p>
                <Button variant="green" size="sm">
                  Start a Project
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">
                  Have a quick question?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  For quick inquiries, email is the fastest way to reach me.
                </p>
                <Button variant="outline" asChild size="sm">
                  <a href="mailto:ranokraihan@gmail.com">Email Me</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Whether you need a modern web application, a responsive website, or
            technical consultation, I'm here to help bring your vision to life.
          </p>
          <Button size="lg" variant="green" className="rounded-full">
            Start the Conversation
          </Button>
        </div>
      </div>
    </main>
  );
}
