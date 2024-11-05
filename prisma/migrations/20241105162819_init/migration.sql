-- CreateTable
CREATE TABLE "trade" (
    "id" SERIAL NOT NULL,
    "data" DATE,
    "ativo" VARCHAR(50),
    "direcao" VARCHAR(10),
    "percentual" DECIMAL,
    "alvo" VARCHAR(50),
    "createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "trade_pkey" PRIMARY KEY ("id")
);
