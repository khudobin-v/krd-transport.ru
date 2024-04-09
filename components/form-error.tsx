import { CircleAlert } from "lucide-react";
import { Card } from "./ui/card";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <Card className="bg-destructive/40 p-2 border-destructive mb-2 max-w-full">
      <span className="flex items-center gap-2  text-red-600 font-medium text-sm">
        <CircleAlert className="h-5 w-5" />
        <p>{message}</p>
      </span>
    </Card>
  );
};
