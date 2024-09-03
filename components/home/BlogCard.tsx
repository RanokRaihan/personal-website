import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
  return (
    <div className="bg-white dark:bg-slate-800  shadow-lg rounded-lg overflow-hidden w-full ">
      <div className="m-2 rounded-md overflow-hidden">
        <Image
          src="/assets/images/og-image.png"
          width={500}
          height={300}
          alt="project"
          className="w-full h-56 object-cover object-center"
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">Project Title</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          scelerisque felis nec purus ultricies, in lacinia eros consectetur.
        </p>
        <div className="flex justify-center mt-4">
          <Link
            href="#"
            className="text-md text-emerald-500 hover:text-emerald-600  dark:hover:text-emerald-500/90 flex items-center gap-1 duration-100 group"
          >
            Read More
            <ArrowRightIcon className="size-4 transform transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
