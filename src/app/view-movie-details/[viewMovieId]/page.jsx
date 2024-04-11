import { getMovieByIdService } from "@/service/card.service";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const ViewMovieDetails = async ({ params }) => {
  const movieIdData = await getMovieByIdService(params.viewMovieId);

  console.log("Details Data: ", movieIdData);

  console.log("Movie: ", params.viewMovieId);

  return (
    <main className="bg-red-900 h-screen">
      <div className="pt-28">
        <div className="w-[100%]">
          <div className="flex flex-col md:flex-row mx-10">
            <div className="w-[70%] ">
              <div className="w-[900px] h-[600px] rounded-lg bg-gray-300 dark:bg-gray-700">
                <img
                  className="w-full h-full bg-cover"
                  src={movieIdData.payload.image}
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="pl-10 ">
              <h2 className="text-2xl font-bold text-white dark:text-white">
                {movieIdData.payload.director}
              </h2>
              <p className="text-gray-300 dark:text-gray-300 text-sm ">
                {movieIdData.payload.runtime} minutes
              </p>
              <div className="mb-8">
                <p className="text-gray-300 dark:text-gray-300 text-sm italic">
                  {movieIdData.payload.genre}
                </p>
                <div className="flex items-center mt-2">
                  {movieIdData.payload.rating >= 1 &&
                  movieIdData.payload.rating < 2 ? (
                    <>
                      <FaStar style={{ color: "yellow" }} />
                      <FaRegStar style={{ color: "yellow" }} />
                      <FaRegStar style={{ color: "yellow" }} />
                      <FaRegStar style={{ color: "yellow" }} />
                      <FaRegStar style={{ color: "yellow" }} />
                    </>
                  ) : movieIdData.payload.rating >= 2 &&
                    movieIdData.payload.rating < 3 ? (
                    <>
                      <FaStar style={{ color: "yellow" }} />
                      <FaStar style={{ color: "yellow" }} />
                      <FaRegStar style={{ color: "yellow" }} />
                      <FaRegStar style={{ color: "yellow" }} />
                      <FaRegStar style={{ color: "yellow" }} />
                    </>
                  ) : movieIdData.payload.rating >= 3 &&
                    movieIdData.payload.rating < 4 ? (
                    <>
                      <FaStar style={{ color: "yellow" }} />
                      <FaStar style={{ color: "yellow" }} />
                      <FaStar style={{ color: "yellow" }} />
                      <FaRegStar style={{ color: "yellow" }} />
                      <FaRegStar style={{ color: "yellow" }} />
                    </>
                  ) : movieIdData.payload.rating >= 4 &&
                    movieIdData.payload.rating < 5 ? (
                    <>
                      <FaStar style={{ color: "yellow" }} />
                      <FaStar style={{ color: "yellow" }} />
                      <FaStar style={{ color: "yellow" }} />
                      <FaStar style={{ color: "yellow" }} />
                      <FaRegStar style={{ color: "yellow" }} />
                    </>
                  ) : movieIdData.payload.rating >= 5 ? (
                    <>
                      <FaStar style={{ color: "yellow" }} />
                      <FaStar style={{ color: "yellow" }} />
                      <FaStar style={{ color: "yellow" }} />
                      <FaStar style={{ color: "yellow" }} />
                      <FaStar style={{ color: "yellow" }} />
                    </>
                  ) : (
                    "Invalid rating"
                  )}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white dark:text-white">
                  {movieIdData.payload.movie_title}
                </h2>
              </div>
              <div>
                <p className="text-gray-300 dark:text-gray-300 text-sm mt-2">
                  {movieIdData.payload.description}
                </p>
              </div>
              <div>
                <p className="text-gray-300 dark:text-gray-300 text-sm mt-16">
                  {movieIdData.payload.posted_at}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ViewMovieDetails;
