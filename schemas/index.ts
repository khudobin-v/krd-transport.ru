import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .email({ message: "Введен некорректный адрес электронной почты..." }),
  password: z.string().min(1, { message: "Поле не должны быть пустым" }),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, { message: "Имя не может быть пустым" }),
  email: z
    .string()
    .email({ message: "С адресом электронной почты что-то не так..." }),
  password: z
    .string()
    .min(8, { message: "Длина пароля должна быть не менее 8 символов" }),
  confirmPassword: z
    .string()
    .min(8, { message: "Длина пароля должна быть не менее 8 символов" }),
});

export const ProfileSchema = z.object({
  name: z.string(),
  email: z.string(),
});