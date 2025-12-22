import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const creatorId = "889fe160-d5ba-4256-8ea6-74f7ef257855";

const movies = [
  {
    title: "Inception",
    overview:
      "A skilled thief enters people's dreams to steal secrets and is given a chance to erase his criminal past.",
    releaseYear: "2010",
    genres: ["Sci-Fi", "Action", "Thriller"],
    runtime: 148,
    posterUrl: "https://example.com/inception.jpg",
    createBy: creatorId,
  },
  {
    title: "Interstellar",
    overview:
      "Explorers travel through a wormhole in space to ensure the survival of humanity.",
    releaseYear: "2014",
    genres: ["Sci-Fi", "Drama", "Adventure"],
    runtime: 169,
    posterUrl: "https://example.com/interstellar.jpg",
    createBy: creatorId,
  },
  {
    title: "The Dark Knight",
    overview:
      "Batman faces the Joker, a criminal mastermind spreading chaos in Gotham City.",
    releaseYear: "2008",
    genres: ["Action", "Crime", "Drama"],
    runtime: 152,
    posterUrl: "https://example.com/dark-knight.jpg",
    createBy: creatorId,
  },
  {
    title: "Avengers: Endgame",
    overview: "The Avengers assemble to undo the destruction caused by Thanos.",
    releaseYear: "2019",
    genres: ["Action", "Adventure", "Sci-Fi"],
    runtime: 181,
    posterUrl: "https://example.com/endgame.jpg",
    createBy: creatorId,
  },
  {
    title: "Parasite",
    overview:
      "A poor family schemes to infiltrate a wealthy household with unexpected consequences.",
    releaseYear: "2019",
    genres: ["Thriller", "Drama"],
    runtime: 132,
    posterUrl: "https://example.com/parasite.jpg",
    createBy: creatorId,
  },
];

async function main() {
  console.log("🌱 Sending Movies...");

  for (const movie of movies) {
    await prisma.movies.create({
      data: movie,
    });

    console.log(`✅ Created Movie: ${movie.title}`);
  }

  console.log("🎉 Seeding Completed");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
