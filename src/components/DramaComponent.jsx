import { getAllMovieDramaService } from '@/service/card.service';
import React from 'react';
import Link from "next/link";

const DramaComponent = async () => {
    const dramaData = await getAllMovieDramaService();
  return (
    <div className="flex gap-3 mt-3 overflow-x-auto no-scrollbar">
        {dramaData.payload.map((drama) => (
            <div key={drama.movie_id}>
                <Link
            class="p-4 w-[300px] border bg-white border-indigo-300 rounded-lg hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
            href={`/view-movie-details/${drama.movie_id}`}
          >
            <img
            
              src={drama.image ? drama.image:'https://media.themoviedb.org/t/p/w1000_and_h563_face/5aVJULcnX6y2qZ3FHfUtr3R8hOl.jpg'}
              class="shadow overflow-hidden border"
            />
            <div class="mt-5">
              <h4 class="font-bold text-xl line-clamp-1">{drama.movie_title}</h4>
              <p class="mt-2 text-gray-600 line-clamp-2">
                {drama.description}
              </p>
            </div>
          </Link>
            </div>
        ))}
     
    </div>
  )
}

export default DramaComponent
