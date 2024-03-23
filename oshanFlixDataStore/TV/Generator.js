const axios = require("axios");
const fs = require("fs");
const path = require("path");

const apiKey = "1cf50e6248dc270629e802686245c2c8";

async function fetchAndSaveSeriesData(seriesId) {
  try {
    const tmdbResponse = await axios.get(
      `https://api.themoviedb.org/3/tv/${seriesId}?api_key=${apiKey}`
    );

    const creditsResponse = await axios.get(
      `https://api.themoviedb.org/3/tv/${seriesId}/credits?api_key=${apiKey}`
    );

    const currentDate = new Date();
    const create_at = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}-${currentDate.getHours().toString().padStart(2, '0')}-${currentDate.getMinutes().toString().padStart(2, '0')}-${currentDate.getSeconds().toString().padStart(2, '0')}`;

    const seriesData = {
      created_at: create_at,
      id: seriesId,
      type: "tv",
      title: tmdbResponse.data.name,
      release_date: tmdbResponse.data.first_air_date,
      genre: tmdbResponse.data.genres.map((genre) => genre.name),
      description: tmdbResponse.data.overview,
      actors: creditsResponse.data.cast.slice(0, 10).map((actor) => ({
        name: actor.name,
        image: `https://image.tmdb.org/t/p/w500${actor.profile_path}`,
      })),
      rating: tmdbResponse.data.vote_average.toFixed(1),
      poster_url: `https://image.tmdb.org/t/p/w500${tmdbResponse.data.poster_path}`,
      backdrop_url: `https://image.tmdb.org/t/p/w1280${tmdbResponse.data.backdrop_path}`,
      trailer_url: "",
      seasons: await Promise.all(
        tmdbResponse.data.seasons.map(async (season) => {
          if (season.episode_count > 0) {
            const episodeDataPromises = Array(season.episode_count)
              .fill()
              .map(async (_, index) => {
                const episodeNumber = index + 1;
                const episodeImagesResponse = await axios.get(
                  `https://api.themoviedb.org/3/tv/${seriesId}/season/${season.season_number}/episode/${episodeNumber}/images?api_key=${apiKey}`
                );
                const episodeImages = episodeImagesResponse.data;

                return {
                  episodeNumber,
                  images: episodeImages.stills
                    .slice(0, 1)
                    .map(
                      (still) =>
                        `https://image.tmdb.org/t/p/w500${still.file_path}`
                    ),
                  hd_video_url: "",
                  sd_video_url: "",
                  sub_url: "",
                  direct: true,
                };
              });

            return {
              [`episodes`]: await Promise.all(episodeDataPromises),
            };
          } else {
            return { [`episodes`]: [] };
          }
        })
      ),
    };

    const filePath = path.join(__dirname, "data", `${seriesId}.json`);
    fs.writeFileSync(filePath, JSON.stringify(seriesData, null, 2));

    console.log("Series data saved successfully.");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch and save series data.");
  }
}

//===============================
const seriesId = "52814";
//===============================
// RUN : node ./TV/Generator.js
fetchAndSaveSeriesData(seriesId);
