"use client";

import { useProfile } from "@/hooks/useProfile";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CircleUser, LogIn } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";

export const MiniProfile = () => {
  const { status, userName, userEmail, userImage } = useProfile();

  return (
    <>
      {status === "unauthenticated" && (
        <Link href="/auth/login">
          <Button>
            <LogIn className="h-5 w-5 mr-2" />
            Войти
          </Button>
        </Link>
      )}
      {status === "authenticated" && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src={userImage!} />
              <AvatarFallback>
                <CircleUser className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>Привет, {userName}!</DropdownMenuLabel>
                      
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Профиль</DropdownMenuItem>

              <DropdownMenuItem>Настройки</DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>Выйти</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
          )}
          { status === "loading" &&  <Skeleton className="w-9 h-9 rounded-full" />}

    </>
  );
};
