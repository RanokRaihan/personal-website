"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PenLineIcon } from "lucide-react";
import { useState } from "react";
import TestimonialForm from "../forms/TestimonialForm";

const WriteTestimonialDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="green"
          className="rounded-full px-6 font-semibold"
        >
          <PenLineIcon className="mr-2 h-4 w-4" />
          Write a testimonial
        </Button>
      </DialogTrigger>
      <DialogContent className="slim-scrollbar max-h-[90vh] overflow-y-auto sm:max-w-[560px]">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl tracking-tight">
            Share your experience
          </DialogTitle>
          <DialogDescription>
            Worked with me? I&apos;d love to hear about it. Submissions are
            reviewed before they appear on the site.
          </DialogDescription>
        </DialogHeader>
        <TestimonialForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default WriteTestimonialDialog;
