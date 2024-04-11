import { getAllMovieActionService } from '@/service/card.service';
import Link from "next/link";

const ActionComponent = async () => {
    const actionData = await getAllMovieActionService();
    // console.log("movie Data: ", movieData)
  return (
    <div>
      <div className="flex gap-3 mt-3 overflow-x-auto no-scrollbar">
        {actionData.payload.map((action) => (
            <div key={action.movie_id}>
                <Link
            class="p-4 w-[300px] border bg-white border-indigo-300 rounded-lg hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
            href={`/view-movie-details/${action.movie_id}`}
          >
            <img
            
              src={action.image ? action.image:'https://media.themoviedb.org/t/p/w1000_and_h563_face/5aVJULcnX6y2qZ3FHfUtr3R8hOl.jpg'}
              class="shadow overflow-hidden border"
            />
            <div class="mt-5">
              <h4 class="font-bold text-xl line-clamp-1">{action.movie_title}</h4>
              <p class="mt-2 text-gray-600 line-clamp-2">
                {action.description}
              </p>
            </div>
          </Link>
            </div>
        ))}
     
    </div>
    </div>
  )
}

export default ActionComponent
