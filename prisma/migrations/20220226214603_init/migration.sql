-- CreateEnum
CREATE TYPE "FeedbackType" AS ENUM ('STEP', 'TASK');

-- CreateEnum
CREATE TYPE "UserAssignmentStatus" AS ENUM ('COMPLETED', 'STARTED', 'NOT_STARTED');

-- CreateTable
CREATE TABLE "Tasks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Steps" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Steps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StepsOnTasks" (
    "taskId" INTEGER NOT NULL,
    "stepId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "StepsOnTasks_pkey" PRIMARY KEY ("taskId","stepId")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "type" "FeedbackType" NOT NULL,
    "details" TEXT NOT NULL,
    "stepId" INTEGER,
    "taskId" INTEGER,
    "authorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestUsers" (
    "id" SERIAL NOT NULL,
    "display" TEXT NOT NULL,
    "integrationId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TestUsers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestGroups" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TestGroups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupTaskAssignments" (
    "id" SERIAL NOT NULL,
    "taskId" INTEGER NOT NULL,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "GroupTaskAssignments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTaskAssignments" (
    "id" SERIAL NOT NULL,
    "taskId" INTEGER NOT NULL,
    "testUserId" INTEGER NOT NULL,
    "status" "UserAssignmentStatus" NOT NULL,
    "currentStepId" INTEGER NOT NULL,

    CONSTRAINT "UserTaskAssignments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TestGroupToTestUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_TestGroupToTestUser_AB_unique" ON "_TestGroupToTestUser"("A", "B");

-- CreateIndex
CREATE INDEX "_TestGroupToTestUser_B_index" ON "_TestGroupToTestUser"("B");

-- AddForeignKey
ALTER TABLE "StepsOnTasks" ADD CONSTRAINT "StepsOnTasks_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StepsOnTasks" ADD CONSTRAINT "StepsOnTasks_stepId_fkey" FOREIGN KEY ("stepId") REFERENCES "Steps"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Tasks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_stepId_fkey" FOREIGN KEY ("stepId") REFERENCES "Steps"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "TestUsers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupTaskAssignments" ADD CONSTRAINT "GroupTaskAssignments_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupTaskAssignments" ADD CONSTRAINT "GroupTaskAssignments_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "TestGroups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTaskAssignments" ADD CONSTRAINT "UserTaskAssignments_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTaskAssignments" ADD CONSTRAINT "UserTaskAssignments_currentStepId_fkey" FOREIGN KEY ("currentStepId") REFERENCES "Steps"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTaskAssignments" ADD CONSTRAINT "UserTaskAssignments_testUserId_fkey" FOREIGN KEY ("testUserId") REFERENCES "TestUsers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestGroupToTestUser" ADD FOREIGN KEY ("A") REFERENCES "TestGroups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestGroupToTestUser" ADD FOREIGN KEY ("B") REFERENCES "TestUsers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
