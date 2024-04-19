"use client";

import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { removeFromFavorites } from "@/data/routes";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";

interface Props {
  userId: string;
  routeId: string;
}

export const RemoveFromFavorite = ({ userId, routeId }: Props) => {
  const session = useSession({
    required: true,
  });
  const { toast } = useToast();

  const handleRemoveFromFavorite = () => {
    console.log(session.data?.user.id);
    toast({
      title: "Маршрут удален из избранных",
    });
    return removeFromFavorites(userId, routeId);
  };
  return (
    <Button
      size="icon"
      variant="ghost"
      className="group"
      onClick={handleRemoveFromFavorite}
    >
      <Trash className="h-5 w-5 text-destructive group-hover:fill-destructive group-hover:text-foreground/60 transition-all cursor-pointer" />
    </Button>
  );
};
