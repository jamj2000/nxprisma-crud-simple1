import { PrismaClient } from "@prisma/client";

export default const prisma = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prismaº

