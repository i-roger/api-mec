import { FastifyInstance } from "fastify";
import { z } from "zod"
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { prisma } from "../lib/prisma";

/* Adicionar ao "app.post()" a linha abaixo: 
    app.withTypeProvider<ZodTypeProvider>().post('FINALURL',{SCHEMA VALIDACAO}, { async () => {RESPOSTA PRO FRONT}}) */
// Isto é usado para validar o os dados de entrada do front end! da REQUISIÇÃO

export async function criarPedido(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().post('/criarpedido', {
            schema: {
                body: z.object({
                    nome: z.string(),
                    celular: z.string(),
                    endereco: z.string(),
                })
            }
        }, async (request) => {
            const { nome, endereco, celular } = request.body

            const pedido = await prisma.dataClient.create({
                data: {
                    nome,
                    endereco,
                    celular
                }
            })
            return {pedidoId: pedido.id}
        })
}