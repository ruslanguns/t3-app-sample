import { createTRPCRouter, publicProcedure } from "../trpc";

export const helloRouter = createTRPCRouter({
  sayHi: publicProcedure.query(() => {
    return "Saludos de RusGunx!!";
  }),
});
