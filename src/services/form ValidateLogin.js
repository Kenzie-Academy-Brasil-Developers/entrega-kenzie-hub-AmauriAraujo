import { z } from "zod";

export const validateFormLogin = z.object({
  email: z.string().nonempty("O e-mail é obrigatório"),

  password: z.string().nonempty("Senha Obrigatória"),
});
