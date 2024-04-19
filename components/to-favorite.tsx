"use client";

import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";

import {
  addToFavorites,
  isFavoriteRoute,
  removeFromFavorites,
} from "@/data/routes";
import { useToast } from "./ui/use-toast";
import { useEffect, useState } from "react";

interface Props {
  routeId: string;
}

export const ToFavorite = ({ routeId }: Props) => {
  const session = useSession();
  const { toast } = useToast();

  const [isFavorite, setIsFavorite] = useState<boolean | null>(null);

  useEffect(() => {
    const checkFavorite = async () => {
      const result = await isFavoriteRoute(session.data?.user.id!, routeId);
      setIsFavorite(result);
    };

    checkFavorite();
  }, [session.data?.user.id, routeId]);

  const handleAddToFavorites = () => {
    if (isFavorite) return removeFromFavorites(session.data?.user.id!, routeId);
    return addToFavorites(
      session.data?.user?.id!,
      session.data?.user?.email!,
      routeId
    );
  };
  return (
    <Button
      size="icon"
      variant="ghost"
      className="group"
      onClick={handleAddToFavorites}
    >
      <Star
        className={`h-5 w-5 text-primary ${isFavorite ? "fill-primary" : ""} group-hover:fill-primary transition-all cursor-pointer`}
      />
    </Button>
  );
};
