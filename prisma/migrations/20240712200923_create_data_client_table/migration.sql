-- CreateTable
CREATE TABLE "dataClient" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "data_pedido" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
