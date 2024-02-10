/*
  Warnings:

  - The values [TIKTOK] on the enum `SocialPlatformName` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ElectoralDistrictName" ADD VALUE 'ACORES';
ALTER TYPE "ElectoralDistrictName" ADD VALUE 'BRAGA';
ALTER TYPE "ElectoralDistrictName" ADD VALUE 'CASTELO_BRANCO';
ALTER TYPE "ElectoralDistrictName" ADD VALUE 'MADEIRA';
ALTER TYPE "ElectoralDistrictName" ADD VALUE 'VILA_REAL';

-- AlterEnum
BEGIN;
CREATE TYPE "SocialPlatformName_new" AS ENUM ('EMAIL', 'FACEBOOK', 'GITHUB', 'INSTAGRAM', 'MEDIUM', 'TWITTER', 'YOUTUBE', 'WEBSITE');
ALTER TABLE "SocialPlatform" ALTER COLUMN "platform" TYPE "SocialPlatformName_new" USING ("platform"::text::"SocialPlatformName_new");
ALTER TYPE "SocialPlatformName" RENAME TO "SocialPlatformName_old";
ALTER TYPE "SocialPlatformName_new" RENAME TO "SocialPlatformName";
DROP TYPE "SocialPlatformName_old";
COMMIT;
