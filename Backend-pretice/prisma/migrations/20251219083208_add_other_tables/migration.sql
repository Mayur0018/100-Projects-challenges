/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Movies` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `Movies` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `WatchlistItem` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `WatchlistItem` table. All the data in the column will be lost.
  - Added the required column `createBy` to the `Movies` table without a default value. This is not possible if the table is not empty.
  - Made the column `notes` on table `WatchlistItem` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Movies" DROP CONSTRAINT "Movies_createdBy_fkey";

-- AlterTable
ALTER TABLE "Movies" DROP COLUMN "createdAt",
DROP COLUMN "createdBy",
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "WatchlistItem" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "notes" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Movies" ADD CONSTRAINT "Movies_createBy_fkey" FOREIGN KEY ("createBy") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
