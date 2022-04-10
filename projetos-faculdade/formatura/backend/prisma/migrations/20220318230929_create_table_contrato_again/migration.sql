-- CreateTable
CREATE TABLE "Contrato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valor" REAL NOT NULL,
    "data" DATETIME NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "formaturaId" INTEGER NOT NULL,
    CONSTRAINT "Contrato_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Contrato_formaturaId_fkey" FOREIGN KEY ("formaturaId") REFERENCES "Formatura" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ClienteFormatura" (
    "formaturaId" INTEGER NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "ficha" INTEGER NOT NULL,
    "escolaId" INTEGER NOT NULL,
    "contratoId" INTEGER NOT NULL,
    "albumId" INTEGER NOT NULL,

    PRIMARY KEY ("formaturaId", "clienteId"),
    CONSTRAINT "ClienteFormatura_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ClienteFormatura_formaturaId_fkey" FOREIGN KEY ("formaturaId") REFERENCES "Formatura" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ClienteFormatura_contratoId_fkey" FOREIGN KEY ("contratoId") REFERENCES "Contrato" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ClienteFormatura_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ClienteFormatura" ("albumId", "clienteId", "contratoId", "escolaId", "ficha", "formaturaId") SELECT "albumId", "clienteId", "contratoId", "escolaId", "ficha", "formaturaId" FROM "ClienteFormatura";
DROP TABLE "ClienteFormatura";
ALTER TABLE "new_ClienteFormatura" RENAME TO "ClienteFormatura";
CREATE UNIQUE INDEX "ClienteFormatura_ficha_formaturaId_key" ON "ClienteFormatura"("ficha", "formaturaId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
