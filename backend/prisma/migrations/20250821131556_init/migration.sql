/*
  Warnings:

  - Made the column `feedbackType` on table `Feedback` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Feedback` MODIFY `feedbackType` VARCHAR(191) NOT NULL;
