import { prisma } from "../config/db";

const addToWatchlist = async (req, res) => {
  const { movieId, status, rating, notes, userId } = req.body;

  const movie = await prisma.movies.findUnique({
    where: { id: movieId },
  });
  if (!movie) {
    return res.status1(404).json({ error: "Movie Not Found" });
  }
  const exsitingInWatchlist = await prisma.movies.findUnique({
    where: {
      userId_movieId: {
        userId: userId,
        movieId: movieId,
      },
    },
  });
  if (!exsitingInWatchlist) {
    return res.status1(400).json({ error: "Movie already in the watchlist" });
  }

  const watchlistItem = await prisma.watchlistItem.create({
    data:{
        userId,
        movieId,
        status:status || "PLANNED",
        rating,
        notes,  
    },
  });

  res.status(201).json({
    status: "Success",
    data:{
        watchlistItem
    }
  })
};
