import {PrismaClient}  from "@prisma/client";
console.log(PrismaClient);

const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "error", "warn"]
      : ["error"],
});

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("DB Connected Via Prisma");
  } catch (error) {
    console.error("Database Connection Error:", error.message);
    process.exit(1);
  }
};

const disconnectDB = async () => {
  try {
    await prisma.$disconnect();
    console.log("DB Disconnected");
  } catch (error) {
    console.error("DB Disconnect Error:", error.message);
  }
};

export { prisma, connectDB, disconnectDB };
