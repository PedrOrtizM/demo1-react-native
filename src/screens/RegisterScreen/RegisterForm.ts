import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Regex } from "src/utils/Regex";

const userRegister = z.object({
  firstName: z.string().min(3).max(12).regex(Regex.onlyLetters),
  lastName: z.string().min(3).max(16).regex(Regex.onlyLetters),
  email: z.string().email().min(10).max(30),
  password: z.string().min(8).max(16),
  country: z.string().min(3).max(20).regex(Regex.onlyLetters),
});

export const userRegisterConfig = {
  defaultValues: {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    country: '',
  },
  resolver: zodResolver(userRegister),
}
