import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const userSchema = z.object({
  email: z.string().email().min(10).max(30),
  password: z.string().min(8).max(16),
});

export const userConfig = {
  defaultValues: {
    email: '',
    password: '',
  },
  resolver: zodResolver(userSchema),
}
