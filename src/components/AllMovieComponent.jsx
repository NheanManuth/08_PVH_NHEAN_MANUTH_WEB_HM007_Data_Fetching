import { getAllMovieService } from "@/service/card.service";
import Link from "next/link";

const AllMovieComponent = async () => {
  const movieData = await getAllMovieService();
  console.log("movie Data: ", movieData);
  return (
    <div className="flex gap-3 mt-3 overflow-x-auto no-scrollbar">
      {movieData.payload.map((data) => (
        <div key={data.movie_id}>
          <Link
            class="p-4 w-[300px] border bg-white border-indigo-300 rounded-lg hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
            href={`/view-movie-details/${data.movie_id}`}
          >
            <img
              src={
                data.image
                  ? data.image
                  : "https://media.themoviedb.org/t/p/w1000_and_h563_face/5aVJULcnX6y2qZ3FHfUtr3R8hOl.jpg"
              }
              className="shadow overflow-hidden border"
            />
            <div className="mt-5">
              <h4 className="font-bold text-xl line-clamp-1">{data.movie_title}</h4>
              <p className="mt-2 text-gray-600 line-clamp-2">{data.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllMovieComponent;
