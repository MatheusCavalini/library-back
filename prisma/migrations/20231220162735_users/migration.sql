-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telephone` INTEGER NOT NULL,
    `road` VARCHAR(191) NOT NULL,
    `neighborhood` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `number` INTEGER NOT NULL,
    `complement` VARCHAR(191) NOT NULL,
    `zip_code` INTEGER NOT NULL,
    `is_admin` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
