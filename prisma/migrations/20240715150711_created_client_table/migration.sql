-- CreateTable
CREATE TABLE "dataClient" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "data_pedido" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dataClient_pkey" PRIMARY KEY ("id")
);
