"use client";

import { ProfileSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleUser, Save, Star } from "lucide-react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { useState } from "react";
import { FavoriteRoutes } from "../transport/favotite-routes";

export const Profile = () => {
  const [favoriteRoutes, setFavoriteRoutes] = useState(null);
  const session = useSession();
  const form = useForm({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: session.data?.user.name!,
      email: session.data?.user.email!,
    },
  });

  const profileSubmit = () => {
    return null;
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <CircleUser className="text-primary h-8 w-8" />
          <div className="flex gap-1 items-center">
            <h3 className="text-3xl text-primary font-semibold">Ваш профиль</h3>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <Avatar className="h-24 w-24 col-span-2">
            <AvatarFallback>
              <CircleUser className="h-16 w-16" />
            </AvatarFallback>
            <AvatarImage src={session.data?.user.image!} />
          </Avatar>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(profileSubmit)}
              className="w-full xl:w-1/4"
            >
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="select-none" draggable={false}>
                        Имя
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Василий" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="select-none" draggable={false}>
                        Адрес электронной почты
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="example@krd-transport.ru"
                          type="email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="w-full" type="submit">
                  <Save className="h-4 w-4 mr-2" />
                  Сохранить
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <div className="flex items-center gap-2 mt-4" id="favorites">
          <Star className="text-primary h-8 w-8" />
          <h3 className="text-3xl text-primary font-semibold">
            Избранные маршруты
          </h3>
        </div>
      </div>
    </>
  );
};
