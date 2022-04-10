/*
  Warnings:

  - You are about to drop the column `contratoId` on the `ClienteFormatura` table. All the data in the column will be lost.
  - You are about to drop the column `clienteId` on the `Contrato` table. All the data in the column will be lost.
  - You are about to drop the column `formaturaId` on the `Contrato` table. All the data in the column will be lost.
  - Added the required column `clienteFormaturaClienteId` to the `Contrato` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clienteFormaturaFormaturaId` to the `Contrato` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ClienteFormatura" (
    "formaturaId" INTEGER NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "ficha" INTEGER NOT NULL,
    "escolaId" INTEGER NOT NULL,

    PRIMARY KEY ("formaturaId", "clienteId"),
    CONSTRAINT "ClienteFormatura_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ClienteFormatura_formaturaId_fkey" FOREIGN KEY ("formaturaId") REFERENCES "Formatura" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ClienteFormatura" ("clienteId", "escolaId", "ficha", "formaturaId") SELECT "clienteId", "escolaId", "ficha", "formaturaId" FROM "ClienteFormatura";
DROP TABLE "ClienteFormatura";
ALTER TABLE "new_ClienteFormatura" RENAME TO "ClienteFormatura";
CREATE UNIQUE INDEX "ClienteFormatura_ficha_formaturaId_key" ON "ClienteFormatura"("ficha", "formaturaId");
CREATE TABLE "new_Contrato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valor" REAL NOT NULL,
    "data" DATETIME NOT NULL,
    "clienteFormaturaFormaturaId" INTEGER NOT NULL,
    "clienteFormaturaClienteId" INTEGER NOT NULL,
    CONSTRAINT "Contrato_clienteFormaturaFormaturaId_clienteFormaturaClienteId_fkey" FOREIGN KEY ("clienteFormaturaFormaturaId", "clienteFormaturaClienteId") REFERENCES "ClienteFormatura" ("formaturaId", "clienteId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Contrato" ("data", "id", "valor") SELECT "data", "id", "valor" FROM "Contrato";
DROP TABLE "Contrato";
ALTER TABLE "new_Contrato" RENAME TO "Contrato";
CREATE UNIQUE INDEX "Contrato_clienteFormaturaFormaturaId_clienteFormaturaClienteId_key" ON "Contrato"("clienteFormaturaFormaturaId", "clienteFormaturaClienteId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
