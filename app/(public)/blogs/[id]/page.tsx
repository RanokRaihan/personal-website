import { Badge } from "@/components/ui/badge";
import { getBlogByIdAction } from "@/lib/actions/blogAction";
import { CalendarIcon, Clock, User } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const blog = await getBlogByIdAction(params.id);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blog.title} | Ranok Raihan`,
    description: blog.summary,
    openGraph: {
      title: blog.title,
      description: blog.summary,
      images: [{ url: blog.thumbnail }],
    },
  };
}

export default async function BlogPage({ params }: { params: { id: string } }) {
  const result = await getBlogByIdAction(params.id);
  const blog = result.data;
  if (!blog) {
    notFound();
  }

  // Format dates
  const formattedCreatedDate = new Date(blog.createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const formattedUpdatedDate = new Date(blog.updatedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  // For updated date only show if different from created date
  const showUpdatedDate = blog.createdAt !== blog.updatedAt;

  return (
    <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl mt-8">
      {/* Blog Header */}
      <div className="space-y-4 mb-8">
        {/* Category and status */}
        <div className="flex flex-wrap gap-2 items-center justify-between">
          <div className="flex gap-2 items-center">
            <Badge className="capitalize text-sm bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400">
              {blog.category}
            </Badge>

            {blog.isFeatured && (
              <Badge className="bg-amber-500 dark:bg-amber-200 text-amber-950 dark:text-amber-900 flex items-center gap-1">
                ✦ Featured
              </Badge>
            )}
          </div>

          {blog.status && (
            <Badge
              variant="outline"
              className={`border ${
                blog.status === "published"
                  ? "border-emerald-500 dark:border-emerald-600 bg-emerald-100 text-emerald-700 dark:bg-emerald-100 dark:text-emerald-700"
                  : "border-purple-500 dark:border-purple-600 bg-purple-100 text-purple-700 dark:bg-purple-100 dark:text-purple-700"
              } capitalize`}
            >
              {blog.status}
            </Badge>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-50">
          {blog.title}
        </h1>

        {/* Metadata row */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 pb-6">
          {/* Author */}
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{blog.author}</span>
          </div>

          {/* Created date */}
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            <span>Published: {formattedCreatedDate}</span>
          </div>

          {/* Updated date (if different) */}
          {showUpdatedDate && (
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              <span>Updated: {formattedUpdatedDate}</span>
            </div>
          )}

          {/* Read time */}
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{blog.readTime} min read</span>
          </div>
        </div>

        {/* Summary */}
        <p className="text-lg italic text-gray-600 dark:text-gray-300 border-l-4 border-gray-200 dark:border-gray-700 pl-4 py-1">
          {blog.summary}
        </p>
      </div>

      {/* Main image */}
      <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          width={1200}
          height={630}
          className="w-full object-cover h-auto max-h-[500px]"
        />
      </div>

      {/* Blog content */}
      <article className="prose dark:prose-invert lg:prose-lg max-w-none mb-8">
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </article>

      {/* Additional images gallery (if present) */}
      {blog.images.length > 0 && (
        <div className="my-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blog.images.map((image: string, index: number) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <Image
                  src={image}
                  alt={`Image ${index + 1} for ${blog.title}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag: string, index: number) => (
            <Badge
              key={index}
              variant="outline"
              className="text-sm capitalize px-3 py-1 text-gray-600 dark:text-gray-300"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </main>
  );
}
