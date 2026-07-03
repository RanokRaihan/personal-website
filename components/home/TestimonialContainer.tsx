import { getFeaturedTestimonials } from "@/actions/testimonialAction";
import TestimonialCard from "./TestimonialCard";

const TestimonialContainer = async () => {
  const result = await getFeaturedTestimonials();

  if (!Array.isArray(result)) {
    return (
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Testimonials could not be loaded. Please try again later.
      </p>
    );
  }

  if (result.length === 0) {
    return (
      <p className="text-sm text-slate-500 dark:text-slate-400">
        No testimonials yet — be the first to leave one.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {result.map((testimonial) => (
        <TestimonialCard key={testimonial._id} testimonial={testimonial} />
      ))}
    </div>
  );
};

export default TestimonialContainer;
