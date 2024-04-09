import { CircleAlert, CircleCheck } from "lucide-react";
import { Card } from "./ui/card";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <Card className="bg-emerald-500/40 p-2 border-emerald-500 mb-2 max-w-full">
      <span className="flex items-center gap-2  text-emerald-500 font-medium text-sm">
        <CircleCheck className="h-5 w-5" />
        <p>{message}</p>
      </span>
    </Card>
  );
};
