import { Loader } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}

const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
  return (
    <Button
      type="submit"
      variant="green"
      size="lg"
      disabled={isLoading}
      className={
        className ??
        "w-full rounded-full text-base font-semibold disabled:cursor-not-allowed"
      }
    >
      {isLoading ? (
        <div className="flex items-center gap-4 cursor-not-allowed">
          <Loader className="animate-spin" size={22} />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
