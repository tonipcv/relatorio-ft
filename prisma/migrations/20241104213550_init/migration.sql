-- CreateEnum
CREATE TYPE "Direcao" AS ENUM ('LONG', 'SHORT');

-- CreateTable
CREATE TABLE "Trade" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "ativo" TEXT NOT NULL,
    "direcao" "Direcao" NOT NULL,
    "percentual" DOUBLE PRECISION NOT NULL,
    "alvo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Trade_pkey" PRIMARY KEY ("id")
);
