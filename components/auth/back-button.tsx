import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BackButtonProps {
  label: string;
  href: string;
}

export const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Link href={href} className="w-full text-center">
      <Button variant="link">{label}</Button>
    </Link>
  );
};
