import {PrismaClient} from "@prisma/client";

/* Banco de Dados: SQLite */
// Prima -> Abstrai as chamadas no banco de dados (converte JS para SQL)

export const prisma = new PrismaClient({
    log: ['query']
})