"use client";

import { useForm } from "react-hook-form";
import { AuthFormWrapper } from "@/components/auth/auth-form-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState, useTransition } from "react";
import { RegisterSchema } from "@/schemas";
import { FormSuccess } from "@/components/form-success";
import { FormError } from "@/components/form-error";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserRoundPlus } from "lucide-react";
import { register } from "@/actions/register";
import * as z from "zod";
import { Loader } from "@/components/loader";
import { log } from "console";

export const RegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition();

  const registerSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };
  return (
    <AuthFormWrapper
      headerLabel="Регистрация аккаунта"
      backButtonLabel="Уже есть аккаунт? Войдите!"
      backButtonHref="/auth/login"
      showSocialButtons
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(registerSubmit)}>
          <FormError message={error} />
          <FormSuccess message={success} />
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
                    <Input placeholder="Василий" {...field} />
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
                      placeholder="example@krd-transport.ru"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="select-none" draggable={false}>
                    Пароль
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="********" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="select-none" draggable={false}>
                    Подтвердите пароль
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="********" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              {isPending ? (
                <Loader />
              ) : (
                <>
                  <UserRoundPlus className="h-4 w-4 mr-2" />
                  Зарегистрироваться
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </AuthFormWrapper>
  );
};
