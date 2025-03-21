/*
  Warnings:

  - You are about to drop the column `position` on the `User` table. All the data in the column will be lost.
  - Added the required column `position` to the `MapUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MapUser" ADD COLUMN     "position" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "position",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
