import { z } from "zod";

export const formValidateTech = z.object({
  title: z.string().nonempty("O nome da técnologia é obrigatório"),

  status: z.string().nonempty("O Status é obrigatório"),
});
