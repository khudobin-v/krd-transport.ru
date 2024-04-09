import { LoaderCircle } from "lucide-react";

export const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <LoaderCircle className="w-4 h-4 animate-spin" />
    </div>
  );
};
