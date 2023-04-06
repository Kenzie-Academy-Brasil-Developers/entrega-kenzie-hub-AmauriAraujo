import { z } from "zod";

export const validateFormLogin = z.object({
  email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("Forneça um e-mail válido"),

  password: z.string().min(1, "Senha Obrigatória"),
});
