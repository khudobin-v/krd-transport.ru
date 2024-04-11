"use client";

import { AuthFormWrapper } from "@/components/auth/auth-form-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { useState, useTransition } from "react";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { login } from "@/actions/login";
import { Loader } from "@/components/loader";

export const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition();

  const loginSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <AuthFormWrapper
      headerLabel="Вход в аккаунт"
      backButtonLabel="Ещё нет аккаунта? Создайте!"
      backButtonHref="/auth/register"
      showSocialButtons
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(loginSubmit)}>
          <FormError message={error} />
          <FormSuccess message={success} />
          <div className="space-y-2">
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="select-none" draggable={false}>
                    Пароль
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="********" type="password" />
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
                  <LogIn className="h-4 w-4 mr-2" />
                  Войти
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </AuthFormWrapper>
  );
};
