/*
  Warnings:

  - You are about to drop the column `valorPorFoto` on the `Album` table. All the data in the column will be lost.
  - Added the required column `fotosQtd` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `montagensQtd` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precoPorFoto` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precoPorMontagem` to the `Album` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Album" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "precoPorFoto" REAL NOT NULL,
    "precoPorMontagem" REAL NOT NULL,
    "formaturaId" INTEGER NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "fotosQtd" INTEGER NOT NULL,
    "montagensQtd" INTEGER NOT NULL,
    CONSTRAINT "Album_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Album_formaturaId_fkey" FOREIGN KEY ("formaturaId") REFERENCES "Formatura" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Album" ("clienteId", "formaturaId", "id") SELECT "clienteId", "formaturaId", "id" FROM "Album";
DROP TABLE "Album";
ALTER TABLE "new_Album" RENAME TO "Album";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
