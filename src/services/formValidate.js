import { z } from "zod";

export const validateForm = z
  .object({
    name: z.string().min(3, "O nome é obrigatório"),
    email: z
      .string()
      .min(1, "O e-mail é obrigatório")
      .email("Forneça um e-mail válido"),

    password: z
      .string()
      .min(8, "A senha precisa de pelo menos 8 caracteres.")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra")
      .regex(/(?=.*[0-9])/, "É necessário pelo menos um número")
      .regex(/(?=.*[$*&@#])/, "É necessário pelo menos um caracter especial"),

    confirm: z.string().min(1, "Confirme sua senha"),

    bio: z.string().min(1, "Campo obrigatório"),
    contact: z.string().min(1, "Campo obrigatório"),
    course_module: z.string().min(1, "Campo obrigatório"),
  })
  .refine(({ password, confirm }) => confirm === password, {
    message: "As senhas não correspondem",
    path: ["confirm"],
  });
