# api-mec (VERCEL + PRISMA + NEON.TECH)
API Utilizando conceitos do NLW Rocketseat (Node + Typescript + Prisma)
API => Github > Vercel
BD => API > PRISMA > NEON.TECH

Primeiramente apliquei a configuração para banco de dados local usando SQLITE na configuração do prisma.
Depois foi modificado para POSTGRESQL, para fazer o "npx prisma migrate dev" do BD na NEON TECH, para depois ser utilizado pelo endereço da API na VERCEL.


# NLW Journey Rocketseat (Trilha Node.JS)

# Estrutura do Projeto
/src/server.ts ---> Aqui executamos o caminho das rotas, apontando seus arquivos. 
/prisma
/src/lib/prisma.ts
/src/routes/ ---> Aqui são guardados os arquivos com suas respectivas rotas.
# Estrutura do Projeto
# Dependencias:
npm init -y

npm i typescript @types/node -D

npx tsc --init (cria arquivo tsconfig.json)

npm i tsx -D (forma de converter ts para js, apenas com 1 comando)

npm i fastify

npm i prisma -D

npm i zod (Para fazer validação de dados)
npm i fastify-type-provider-zod (Plugin para ZOD)

npm i dayjs (para fazer condição com datas em create-trip.ts)

npm i nodemailer (ATENÇÃO! : Não usei essa Lib porque não quis que o app tivesse sistema de email)

npm i @fastify/cors (As apis que criamos em node, não sao acessiveis a partir do front end, temos que configurar quem pode consumir nossa API. famoso CORS)
# Fim Dependencias!!!

# 1 - Configurar tsconfig :
Procurar pela tsconfig base com a versão correspondente 
ao seu Node. aqui no caso estou usando Node20

https://github.com/tsconfig/bases

Copia a configuração e substitui em "tsconfig.json"

# 2 - Criar o script para rodar o servidor :
Usando a opção tsx "watch", toda modificação que for feita, será atualizado automáticamente.

"dev": "npx tsx watch src/server.ts"

# 3 - Inicializar prisma :
O comando abaixo cria um Banco de dados relacional, salvo em um arquivo fisico.
Ou seja, banco de dados local. Apenas para o estudo na aplicação.

npx prisma init --datasource-provider SQLite

# 3.1 - Configurar Model em schema.prisma : 

!!!IMPORTANTE!!!
Sempre gerar uma tabela utilizando 
@default(uuid()) --> Para cada elemento ter seu unico ID no modelo seguinte
// 32138A5ED-F20S-41284-84810428-FAB9F0G8F0

Exemplo :

model Trip {
    id String @id @default(uuid())
}
!!!IMPORTANTE!!!

# 3.2 Criar tabela no banco de dados :

npx prisma migrate dev

# Visualizar o Banco de dados
npx prisma studio
