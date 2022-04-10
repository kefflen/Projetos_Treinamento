/*
  Warnings:

  - You are about to drop the column `albumId` on the `ClienteFormatura` table. All the data in the column will be lost.
  - You are about to drop the column `formaturaId` on the `Album` table. All the data in the column will be lost.
  - Added the required column `clienteFormaturaClienteId` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clienteFormaturaFormaturaId` to the `Album` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ClienteFormatura" (
    "formaturaId" INTEGER NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "ficha" INTEGER NOT NULL,
    "escolaId" INTEGER NOT NULL,
    "contratoId" INTEGER NOT NULL,

    PRIMARY KEY ("formaturaId", "clienteId"),
    CONSTRAINT "ClienteFormatura_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ClienteFormatura_formaturaId_fkey" FOREIGN KEY ("formaturaId") REFERENCES "Formatura" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ClienteFormatura_contratoId_fkey" FOREIGN KEY ("contratoId") REFERENCES "Contrato" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ClienteFormatura" ("clienteId", "contratoId", "escolaId", "ficha", "formaturaId") SELECT "clienteId", "contratoId", "escolaId", "ficha", "formaturaId" FROM "ClienteFormatura";
DROP TABLE "ClienteFormatura";
ALTER TABLE "new_ClienteFormatura" RENAME TO "ClienteFormatura";
CREATE UNIQUE INDEX "ClienteFormatura_ficha_formaturaId_key" ON "ClienteFormatura"("ficha", "formaturaId");
CREATE TABLE "new_Album" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "precoPorFoto" REAL NOT NULL,
    "precoPorMontagem" REAL NOT NULL,
    "fotosQtd" INTEGER NOT NULL,
    "montagensQtd" INTEGER NOT NULL,
    "clienteFormaturaFormaturaId" INTEGER NOT NULL,
    "clienteFormaturaClienteId" INTEGER NOT NULL,
    CONSTRAINT "Album_clienteFormaturaFormaturaId_clienteFormaturaClienteId_fkey" FOREIGN KEY ("clienteFormaturaFormaturaId", "clienteFormaturaClienteId") REFERENCES "ClienteFormatura" ("formaturaId", "clienteId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Album" ("fotosQtd", "id", "montagensQtd", "precoPorFoto", "precoPorMontagem") SELECT "fotosQtd", "id", "montagensQtd", "precoPorFoto", "precoPorMontagem" FROM "Album";
DROP TABLE "Album";
ALTER TABLE "new_Album" RENAME TO "Album";
CREATE UNIQUE INDEX "Album_clienteFormaturaClienteId_clienteFormaturaFormaturaId_key" ON "Album"("clienteFormaturaClienteId", "clienteFormaturaFormaturaId");
CREATE UNIQUE INDEX "Album_clienteFormaturaFormaturaId_clienteFormaturaClienteId_key" ON "Album"("clienteFormaturaFormaturaId", "clienteFormaturaClienteId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
