import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface CertificationProps {
  id: string;
  title: string;
  institute: string;
  year: string;
  duration: string;
  description: string;
  image: string;
  verificationLink: string;
}

const certifications: CertificationProps[] = [
  {
    id: "cert-1",
    title: "Complete Web Development Course ",
    institute: "Programming Hero",
    year: "2021",
    duration: "6 months",
    description:
      "Comprehensive training in MERN stack development, covering React, Node.js, Express, and MongoDB along with modern web development practices.",
    image: "/assets/images/certificates/web-development.png",
    verificationLink: "https://verification.example.com/cert-12345",
  },
  {
    id: "cert-2",
    title: "Think in a Redux way",
    institute: "Learn with Sumit",
    year: "2022",
    duration: "3 months",
    description:
      "In-depth course on state management using Redux, focusing on building scalable applications with predictable state management patterns.",
    image: "/assets/images/certificates/LWS-redux-Certificate.jpg",
    verificationLink:
      "https://learnwithsumit.com/certificates/verify/LWSCTXN-IW68ZOA2",
  },
  {
    id: "cert-3",
    title: "Reactive Accelerator",
    institute: "Learn with Sumit",
    year: "2024",
    duration: "6 months",
    description:
      "Advanced course on React and Next.js, covering server-side rendering, static site generation, and building high-performance web applications.",
    image: "/assets/images/certificates/LWS-react-Certificate.jpg",
    verificationLink:
      "https://learnwithsumit.com/certificates/verify/LWSCTXN-7WSJUM64",
  },
  {
    id: "cert-4",
    title: "Next Level Web Development",
    institute: "Programming Hero",
    year: "2025",
    duration: "6 months",
    description:
      "Comprehensive training on Next.js, SQL, PostgreSQL, Prisma, MongoDB, and Mongoose. Covered advanced web development concepts, full-stack integration, and best practices for scalable applications.",
    image: "/assets/images/certificates/next-level.png",
    verificationLink: "https://verification.example.com/cert-67890",
  },
];

const CertificationCard = ({
  certification,
}: {
  certification: CertificationProps;
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden w-full mb-8">
      <div className="flex flex-col md:flex-row">
        {/* Certificate Image (Left) */}
        <div className="md:w-1/3 p-4 flex items-center justify-center bg-slate-100 dark:bg-slate-700/50">
          <div className="relative w-full h-48 md:h-64">
            <Image
              src={certification.image}
              alt={certification.title}
              fill
              className="object-contain p-2"
            />
          </div>
        </div>

        {/* Certificate Details (Right) */}
        <div className="md:w-2/3 p-6">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            {certification.title}
          </h3>

          <div className="space-y-2 mb-4">
            <div className="flex items-start">
              <span className="font-semibold w-24 text-gray-700 dark:text-gray-300">
                Institute:
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                {certification.institute}
              </span>
            </div>

            <div className="flex items-start">
              <span className="font-semibold w-24 text-gray-700 dark:text-gray-300">
                Year:
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                {certification.year}
              </span>
            </div>

            <div className="flex items-start">
              <span className="font-semibold w-24 text-gray-700 dark:text-gray-300">
                Duration:
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                {certification.duration}
              </span>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {certification.description}
          </p>

          <Button asChild variant="outline" className="flex items-center gap-2">
            <Link
              href={certification.verificationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Verify Certificate <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

const CertificationSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-12">
          <span className="home-heading">Certifications</span>
        </h2>

        <div className="space-y-8">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
