"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";

/**
 * Функция регистрации пользователя
 *
 * @param {z.infer<typeof RegisterSchema>} values - объект с данными
 * формы регистрации
 * @returns {Promise<{ error?: string, success?: string }>}
 * объект с сообщением об успешной или неуспешной регистрации
 */

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Ошибка валидации!" };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser)
    return {
      error: "Пользователь с таким адресом электронной почты уже существует",
    };

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: "Регистрация прошла успешно!" };
};
