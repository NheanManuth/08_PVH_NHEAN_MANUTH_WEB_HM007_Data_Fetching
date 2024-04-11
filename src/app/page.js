import ActionComponent from "@/components/ActionComponent";
import AllMovieComponent from "@/components/AllMovieComponent";
import DramaComponent from "@/components/DramaComponent";
import ScienceFictionComponent from "@/components/ScienceFictionComponent";

export default function Home() {
  return (
    <main>
      <div className="bg-black h-screen absolute w-full bg-opacity-30"></div>
      <div class=" h-screen bg-no-repeat bg-cover bg-[url('https://puui.wetvinfo.com/vcover_hz_pic/0/2knhnaakii18oxj1683882661123/0?imageMogr2/thumbnail/600x|imageMogr2/thumbnail/600x')] "></div>

      <div className="bg-red-900">
        <div className="mx-10">
          <div>
            <p className="text-white mr-2 font-medium pt-2 text-2xl">
              All Movies &#62;
            </p>
          </div>
          <AllMovieComponent />
          <div>
            <p className="text-white mr-2 font-medium pt-2 text-2xl">
              Action Movies &#62;
            </p>
          </div>
          <ActionComponent />
          <div>
            <p className="text-white mr-2 font-medium pt-2 text-2xl">
              Drama Movies &#62;
            </p>
          </div>
          <DramaComponent />
          <div>
            <p className="text-white mr-2 font-medium pt-2 text-2xl">
              Science Fiction Movies &#62;
            </p>
          </div>
          <ScienceFictionComponent />
        </div>
      </div>
    </main>
  );
}
