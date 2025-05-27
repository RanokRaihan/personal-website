/* eslint-disable react/no-unescaped-entities */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Brain,
  Calendar,
  Clock,
  Code,
  FileText,
  Linkedin,
  Mail,
  MapPin,
  Trophy,
} from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function AboutPage() {
  const coreSkills = [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
  ];

  const additionalSkills = [
    "Redux",
    "REST API",
    "GraphQL",
    "Git",
    "Docker",
    "AWS",
    "Firebase",
    "Jest",
    "Material UI",
    "Figma",
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="home-heading">About Me</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Welcome to my digital space. I'm Ranok Raihan, a full stack
            developer passionate about building modern, responsive, and robust
            web applications.
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Image & Quick Info */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="p-6 text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-emerald-500 dark:border-emerald-400">
                  <Image
                    src="/assets/images/profile-photo.jpg"
                    alt="Ranok Raihan"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Ranok Raihan
                </h2>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-4">
                  Full Stack Developer
                </p>

                <div className="flex items-center justify-center space-x-4 mb-6">
                  <a
                    href="https://github.com/ranokraihan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ranok-raihan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:ranokraihan@gmail.com"
                    className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>

                <div className="space-y-3 text-left">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin size={16} className="mr-2" />
                    <span>United States (Previously Bangladesh)</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Clock size={16} className="mr-2" />
                    <span>4+ Years of Experience</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    <span>Available for new opportunities</span>
                  </div>
                </div>

                <div className="mt-6 space-x-4">
                  <Button variant="green" className="rounded-full">
                    <FileText className="mr-2 h-4 w-4" /> Resume
                  </Button>
                  <Button variant="outline" className="rounded-full">
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Details */}
          <div className="lg:col-span-2">
            <Card className="bg-white dark:bg-gray-800 h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  Professional Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Who I Am
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    I'm a dedicated Full Stack Developer with 4+ years of
                    experience in building modern web applications. My passion
                    lies in creating responsive, accessible, and robust digital
                    experiences that solve real-world problems. Originally from
                    Bangladesh, I'm now based in the United States, bringing a
                    global perspective to my work.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    My Approach
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    I believe in writing clean, maintainable code that stands
                    the test of time. My background in Physics has given me
                    strong analytical thinking and problem-solving skills that I
                    apply to complex development challenges. I'm passionate
                    about continuous learning and staying updated with the
                    latest technologies and best practices in the ever-evolving
                    web development landscape.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Academic Background
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    I hold a Bachelor's degree in Physics from National
                    University, Bangladesh. The rigorous analytical training I
                    received has proven invaluable in my development career. My
                    transition from physics to programming was driven by a
                    fascination with building digital solutions and the creative
                    opportunities that web development offers.
                  </p>
                </div>

                <div className="pt-4">
                  <Button
                    asChild
                    variant="link"
                    className="text-emerald-600 dark:text-emerald-400 p-0"
                  >
                    <a href="/projects">Explore my projects →</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            <span className="border-b-2 pb-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400">
              Technical Expertise
            </span>
          </h2>

          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="grid w-full md:w-[400px] mx-auto grid-cols-3 mb-6">
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="stack">Tech Stack</TabsTrigger>
              <TabsTrigger value="specialty">Specialty</TabsTrigger>
            </TabsList>

            <TabsContent value="skills">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Code className="mr-2 text-emerald-600 dark:text-emerald-400" />{" "}
                      Core Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {coreSkills.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 text-indigo-700 dark:text-indigo-400"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="mr-2 text-purple-600 dark:text-purple-400" />{" "}
                      Additional Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {additionalSkills.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 text-purple-700 dark:text-purple-400"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="stack">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-emerald-600 dark:text-emerald-400">
                      Frontend
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                        <span>React with Hooks, Context API & Redux</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                        <span>Next.js for SSR, SSG & ISR</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                        <span>TypeScript for type-safe code</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                        <span>Tailwind CSS & Shadcn UI</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                        <span>Responsive & accessible design</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600 dark:text-blue-400">
                      Backend
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span>Node.js & Express.js</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span>MongoDB with Mongoose ODM</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span>PostgreSQL with Prisma ORM</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span>RESTful API & GraphQL</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span>Authentication & authorization</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="specialty">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center flex flex-col items-center">
                      <Trophy className="h-8 w-8 mb-2 text-amber-500" />
                      <span>MERN Stack</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 dark:text-gray-400">
                      Specializing in MongoDB, Express.js, React, and Node.js
                      for full-stack JavaScript applications.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-center flex flex-col items-center">
                      <Trophy className="h-8 w-8 mb-2 text-emerald-500" />
                      <span>Modern React</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 dark:text-gray-400">
                      React & Next.js applications with server-side rendering,
                      static generation, and incremental static regeneration.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-center flex flex-col items-center">
                      <Trophy className="h-8 w-8 mb-2 text-blue-500" />
                      <span>Database Design</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 dark:text-gray-400">
                      Designing efficient schemas and data models for both NoSQL
                      (MongoDB) and SQL (PostgreSQL) databases.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Career Journey */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            <span className="border-b-2 pb-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400">
              My Journey
            </span>
          </h2>

          <div className="relative border-l border-gray-300 dark:border-gray-700 ml-6 pl-8 space-y-12">
            {/* Physics to Programming */}
            <div className="relative">
              <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 border-4 border-white dark:border-gray-800">
                <Calendar className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                From Physics to Programming
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                2019
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                After completing my degree in Physics, I discovered my passion
                for programming. The analytical thinking and problem-solving
                skills from my physics background provided a strong foundation
                for my transition into web development.
              </p>
            </div>

            {/* Early Career */}
            <div className="relative">
              <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 border-4 border-white dark:border-gray-800">
                <Code className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                Early Development Career
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                2020-2021
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Started my professional journey building web applications with
                JavaScript and React. I focused on mastering frontend
                development while beginning to explore backend technologies.
              </p>
            </div>

            {/* Full Stack Expertise */}
            <div className="relative">
              <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 border-4 border-white dark:border-gray-800">
                <Brain className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                Full Stack Expertise
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                2021-2023
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Expanded my skills to become a full stack developer with
                expertise in the MERN stack. Developed end-to-end applications
                and improved my database design skills with both MongoDB and
                PostgreSQL.
              </p>
            </div>

            {/* Relocation & New Horizons */}
            <div className="relative">
              <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900 border-4 border-white dark:border-gray-800">
                <MapPin className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                Relocation & New Horizons
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                2023-Present
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Relocated from Bangladesh to the United States, bringing my
                skills and experience to new opportunities. Currently focused on
                modern frameworks like Next.js and expanding my expertise in
                scalable application architecture.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, and
            partnerships. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="green" className="rounded-full">
              View My Projects
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
