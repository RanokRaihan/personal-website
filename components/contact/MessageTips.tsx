import { Briefcase, Lightbulb } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

// Friendly, low-friction guidance for the person staring at a blank message
// field. Not a form requirement — it just helps them write a good message.
const MessageTips = () => {
  return (
    <div className="mx-auto max-w-2xl">
      <p className="text-center text-sm text-slate-600 dark:text-slate-400">
        Not sure what to write? Here&apos;s what helps me reply faster.
      </p>

      <Accordion
        type="single"
        collapsible
        className="mt-6 rounded-2xl border border-slate-200 bg-white/60 px-5 dark:border-white/10 dark:bg-slate-900/40"
      >
        <AccordionItem value="recruiter" className="border-white/10">
          <AccordionTrigger className="text-slate-900 hover:no-underline dark:text-slate-100">
            <span className="flex items-center gap-3">
              <Briefcase className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              If you&apos;re a recruiter
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="ml-11 list-disc space-y-1.5 text-slate-600 dark:text-slate-300">
              <li>Role title and company name</li>
              <li>Remote, hybrid, or on-site</li>
              <li>The stack you&apos;re hiring for</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="project" className="border-b-0">
          <AccordionTrigger className="text-slate-900 hover:no-underline dark:text-slate-100">
            <span className="flex items-center gap-3">
              <Lightbulb className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              If you have a project in mind
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="ml-11 list-disc space-y-1.5 text-slate-600 dark:text-slate-300">
              <li>What you&apos;re building</li>
              <li>What kind of help you need</li>
              <li>Rough timeline or budget, if relevant</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default MessageTips;
