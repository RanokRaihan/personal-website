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
      variant="primary"
      disabled={isLoading}
      className={className ?? " text-lg w-full"}
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
