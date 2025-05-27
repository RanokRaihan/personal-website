import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProjectByIdAction } from "@/lib/actions/projectAction";
import { IProject } from "@/types";
import { ArrowLeftIcon, ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default async function ProjectDetails({
  params,
}: {
  params: { id: string };
}) {
  const result = await getProjectByIdAction(params.id);
  const project: IProject = result.data || {};
  console.log("Project Details:", project);

  return (
    <main className="container mx-auto py-16 px-4 md:px-6">
      {/* Back Navigation */}
      <div className="my-8">
        <Button variant="outline" size="sm" asChild>
          <Link href="/projects" className="flex items-center gap-2">
            <ArrowLeftIcon size={16} />
            All Projects
          </Link>
        </Button>
      </div>

      {/* Project Header */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">
            {project.title}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {project.summary}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <Badge variant="outline" className="border-emerald-500">
            Status:{" "}
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </Badge>
          {project.isFeatured && (
            <Badge className="bg-amber-500 text-black">Featured Project</Badge>
          )}
        </div>
      </div>

      {/* Project Image */}
      <Card className="mb-12 overflow-hidden border-0 shadow-lg">
        <CardContent className="p-0">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover rounded-md"
              priority
            />
          </AspectRatio>
        </CardContent>
      </Card>

      {/* Project Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Project Overview
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
            </div>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Key Features
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {project.keyFeatures.map((feature: string, index: number) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {/* Challenges and Solutions */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Challenges Faced
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {project.challenges.map((challenge: string, index: number) => (
                <AccordionItem key={index} value={`challenge-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    Challenge {index + 1}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    {challenge}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>

        {/* Project Details Sidebar */}
        <div className="space-y-6">
          {/* Technologies */}
          <Card className="overflow-hidden">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4">
              <h3 className="font-bold text-lg">Technologies Used</h3>
            </div>
            <CardContent className="pt-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, index: number) => (
                  <Badge key={index} variant="secondary" className="capitalize">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project Links */}
          <Card>
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4">
              <h3 className="font-bold text-lg">Project Links</h3>
            </div>
            <CardContent className="pt-4 space-y-4">
              {project.frontendLive && (
                <a
                  href={project.frontendLive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  <ExternalLinkIcon size={18} />
                  <span>Live Demo</span>
                </a>
              )}

              {project.frontendRepo && (
                <a
                  href={project.frontendRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  <FaGithub size={18} />
                  <span>Frontend Repository</span>
                </a>
              )}

              {project.backendRepo && (
                <a
                  href={project.backendRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  <FaGithub size={18} />
                  <span>Backend Repository</span>
                </a>
              )}
              {project.backendLive && (
                <a
                  href={project.backendLive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  <ExternalLinkIcon size={18} />
                  <span>Backend Live API</span>
                </a>
              )}
            </CardContent>
          </Card>

          {/* Project Metadata */}
          <Card>
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4">
              <h3 className="font-bold text-lg">Project Info</h3>
            </div>
            <CardContent className="pt-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Created
                  </span>
                  <span>
                    {project.createdAt
                      ? new Date(project.createdAt).toLocaleDateString()
                      : "N/A"}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Last Updated
                  </span>
                  <span>
                    {project.updatedAt
                      ? new Date(project.updatedAt).toLocaleDateString()
                      : "N/A"}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Status
                  </span>
                  <span className="capitalize">{project.status}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
