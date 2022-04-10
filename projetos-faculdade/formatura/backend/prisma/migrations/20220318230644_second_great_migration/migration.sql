/*
  Warnings:

  - You are about to drop the `Contrato` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `escolaId` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `ficha` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `formaturaId` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `clienteId` on the `Album` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Contrato";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ClienteFormatura" (
    "formaturaId" INTEGER NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "ficha" INTEGER NOT NULL,
    "escolaId" INTEGER NOT NULL,
    "contratoId" INTEGER NOT NULL,
    "albumId" INTEGER NOT NULL,

    PRIMARY KEY ("formaturaId", "clienteId"),
    CONSTRAINT "ClienteFormatura_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ClienteFormatura_formaturaId_fkey" FOREIGN KEY ("formaturaId") REFERENCES "Formatura" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ClienteFormatura_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cliente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    CONSTRAINT "Cliente_id_fkey" FOREIGN KEY ("id") REFERENCES "Pessoa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Cliente" ("id") SELECT "id" FROM "Cliente";
DROP TABLE "Cliente";
ALTER TABLE "new_Cliente" RENAME TO "Cliente";
CREATE TABLE "new_Album" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "precoPorFoto" REAL NOT NULL,
    "precoPorMontagem" REAL NOT NULL,
    "fotosQtd" INTEGER NOT NULL,
    "montagensQtd" INTEGER NOT NULL,
    "formaturaId" INTEGER,
    CONSTRAINT "Album_formaturaId_fkey" FOREIGN KEY ("formaturaId") REFERENCES "Formatura" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Album" ("formaturaId", "fotosQtd", "id", "montagensQtd", "precoPorFoto", "precoPorMontagem") SELECT "formaturaId", "fotosQtd", "id", "montagensQtd", "precoPorFoto", "precoPorMontagem" FROM "Album";
DROP TABLE "Album";
ALTER TABLE "new_Album" RENAME TO "Album";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "ClienteFormatura_ficha_formaturaId_key" ON "ClienteFormatura"("ficha", "formaturaId");
