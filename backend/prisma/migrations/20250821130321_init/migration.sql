-- CreateTable
CREATE TABLE `Feedback` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userMessage` VARCHAR(191) NOT NULL,
    `botMessage` VARCHAR(191) NOT NULL,
    `feedbackType` VARCHAR(191) NULL,
    `comment` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
