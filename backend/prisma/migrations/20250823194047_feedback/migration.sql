ALTER TABLE `Feedback`
  ADD COLUMN `feedbackOption` VARCHAR(191) NULL;

UPDATE `Feedback`
SET `feedbackOption` = 'bad';

ALTER TABLE `Feedback`
  MODIFY COLUMN `feedbackOption` VARCHAR(191) NOT NULL;

ALTER TABLE `Feedback`
  MODIFY COLUMN `feedbackType` VARCHAR(191) NULL;
