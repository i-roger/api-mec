import { FastifyInstance } from "fastify";
import { z } from "zod"
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { prisma } from "../lib/prisma";

/* Adicionar ao "app.post()" a linha abaixo: 
    app.withTypeProvider<ZodTypeProvider>().post('FINALURL',{SCHEMA VALIDACAO}, { async () => {RESPOSTA PRO FRONT}}) */
// Isto é usado para validar o os dados de entrada do front end! da REQUISIÇÃO

export async function listarPedidos(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().get('/listar', async () => {
        const response = prisma.dataClient.findMany()
            return response
        })
}