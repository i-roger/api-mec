import fastify from "fastify";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import cors from '@fastify/cors'
import { criarPedido } from "./routes/criar-pedido";
import { listarPedidos } from "./routes/listar-pedidos";

const app = fastify()

app.register(cors, {
    origin: '*', //Apenas a unica URL que pode ter acesso a essa API
})

app.setValidatorCompiler(validatorCompiler); // Necessário importar quando tiver com o plugin zod type provider instalado
app.setSerializerCompiler(serializerCompiler); // Necessário importar quando tiver com o plugin zod type provider instalado

app.register(listarPedidos) //@GET
app.register(criarPedido) //@POST

app.listen({ port: 3333 }).then(() => {
    console.log('Server Running on Port 3333...')
})