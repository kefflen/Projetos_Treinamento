-- CreateTable
CREATE TABLE "Pessoa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "enderecoId" INTEGER NOT NULL,
    CONSTRAINT "Pessoa_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Fotografo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    CONSTRAINT "Fotografo_id_fkey" FOREIGN KEY ("id") REFERENCES "Pessoa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FotografoServico" (
    "fotografoId" INTEGER NOT NULL,
    "eventoId" INTEGER NOT NULL,
    "pagamento" REAL NOT NULL,

    PRIMARY KEY ("fotografoId", "eventoId"),
    CONSTRAINT "FotografoServico_fotografoId_fkey" FOREIGN KEY ("fotografoId") REFERENCES "Fotografo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "FotografoServico_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "Evento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ficha" INTEGER NOT NULL,
    "formaturaId" INTEGER NOT NULL,
    "escolaId" INTEGER NOT NULL,
    CONSTRAINT "Cliente_id_fkey" FOREIGN KEY ("id") REFERENCES "Pessoa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Cliente_escolaId_fkey" FOREIGN KEY ("escolaId") REFERENCES "Escola" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Cliente_formaturaId_fkey" FOREIGN KEY ("formaturaId") REFERENCES "Formatura" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Escola" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Formatura" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ano" INTEGER NOT NULL,
    "onSecondSemester" BOOLEAN NOT NULL DEFAULT true,
    "escolaId" INTEGER NOT NULL,
    CONSTRAINT "Formatura_escolaId_fkey" FOREIGN KEY ("escolaId") REFERENCES "Escola" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Contrato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valor" REAL NOT NULL,
    "data" DATETIME NOT NULL,
    "formaturaId" INTEGER NOT NULL,
    "clienteId" INTEGER NOT NULL,
    CONSTRAINT "Contrato_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Contrato_formaturaId_fkey" FOREIGN KEY ("formaturaId") REFERENCES "Formatura" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Evento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "preco" REAL NOT NULL,
    "data" DATETIME NOT NULL,
    "formaturaId" INTEGER NOT NULL,
    CONSTRAINT "Evento_formaturaId_fkey" FOREIGN KEY ("formaturaId") REFERENCES "Formatura" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Album" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valorPorFoto" REAL NOT NULL,
    "formaturaId" INTEGER NOT NULL,
    "clienteId" INTEGER NOT NULL,
    CONSTRAINT "Album_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Album_formaturaId_fkey" FOREIGN KEY ("formaturaId") REFERENCES "Formatura" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Endereco" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cidade" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "estado" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FormaturaToFotografo" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Formatura" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Fotografo" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Cliente_ficha_formaturaId_idx" ON "Cliente"("ficha", "formaturaId");

-- CreateIndex
CREATE UNIQUE INDEX "_FormaturaToFotografo_AB_unique" ON "_FormaturaToFotografo"("A", "B");

-- CreateIndex
CREATE INDEX "_FormaturaToFotografo_B_index" ON "_FormaturaToFotografo"("B");
