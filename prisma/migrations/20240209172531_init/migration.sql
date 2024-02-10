-- CreateEnum
CREATE TYPE "ElectoralDistrictName" AS ENUM ('AVEIRO', 'BEJA', 'BRAGANCA', 'COIMBRA', 'LEIRIA', 'LISBOA', 'EVORA', 'EUROPA', 'FARO', 'FORA_DA_EUROPA', 'GUARDA', 'PORTALEGRE', 'PORTO', 'SANTAREM', 'SETUBAL', 'VIANA_DO_CASTELO', 'VISEU');

-- CreateEnum
CREATE TYPE "SocialPlatformName" AS ENUM ('EMAIL', 'FACEBOOK', 'INSTAGRAM', 'TWITTER', 'TIKTOK', 'YOUTUBE', 'WEBSITE');

-- CreateTable
CREATE TABLE "PartyAlliance" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "acronym" TEXT NOT NULL,
    "photoFileName" TEXT NOT NULL,

    CONSTRAINT "PartyAlliance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Party" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "acronym" TEXT NOT NULL,
    "logoFileName" TEXT,
    "description" TEXT,
    "descriptionSource" TEXT,
    "coligationId" INTEGER,

    CONSTRAINT "Party_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialPlatform" (
    "id" INTEGER NOT NULL,
    "platform" "SocialPlatformName" NOT NULL,
    "link" TEXT NOT NULL,
    "candidateId" INTEGER,
    "partyId" INTEGER,
    "partyAllianceId" INTEGER,

    CONSTRAINT "SocialPlatform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Candidate" (
    "id" INTEGER NOT NULL,
    "shortName" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "birthdate" DATE NOT NULL,
    "photoFileName" TEXT,
    "bio" TEXT,
    "position" INTEGER,
    "isSub" BOOLEAN,
    "electoralCircleId" INTEGER NOT NULL,
    "partyId" INTEGER NOT NULL,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ElectoralDistrict" (
    "id" INTEGER NOT NULL,
    "name" "ElectoralDistrictName" NOT NULL,
    "electedDeputies" INTEGER NOT NULL,

    CONSTRAINT "ElectoralDistrict_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Party" ADD CONSTRAINT "Party_coligationId_fkey" FOREIGN KEY ("coligationId") REFERENCES "PartyAlliance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialPlatform" ADD CONSTRAINT "SocialPlatform_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "Candidate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialPlatform" ADD CONSTRAINT "SocialPlatform_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "Party"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialPlatform" ADD CONSTRAINT "SocialPlatform_partyAllianceId_fkey" FOREIGN KEY ("partyAllianceId") REFERENCES "PartyAlliance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_electoralCircleId_fkey" FOREIGN KEY ("electoralCircleId") REFERENCES "ElectoralDistrict"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "Party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
