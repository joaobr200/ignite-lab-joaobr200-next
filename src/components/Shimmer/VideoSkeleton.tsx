import Footer from "../Footer";

const VideoSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col">
        <div className="bg-black">
          <div className="shimmer w-full h-full max-w-[1100px] max-h-[60vh] aspect-video m-auto"></div>
        </div>

        <div className=" w-full max-w-[1100px] p-8 mx-auto">
          <div className="flex items-start m-auto mt-8 gap-16 sm:flex-col">
            <div className="flex flex-col gap-4 flex-wrap  w-full max-w-[731px]">
              <div className="shimmer w-full p-2"></div>
              <div className="shimmer w-full p-10"></div>
            </div>
            <div className="flex flex-col gap-4 md:items-center md:justify-center md:w-full">
              <a
                href=""
                className="shimmer flex items-center justify-center gap-3 text-sm
              font-bold py-6 px-8 rounded w-60 transition-colors
              md:w-full
             "
              ></a>
              <a
                href=""
                className="shimmer flex items-center justify-center gap-3 text-sm
              font-bold py-6 px-8 rounded w-60 transition-colors
              md:w-full"
              ></a>
            </div>
          </div>

          {/* Teacher Profile  */}
          <div className="mt-11 flex items-center gap-4">
            <div className="shimmer rounded-full w-16 h-16"></div>
            <div className="flex flex-col gap-4 w-full max-w-[300px] ">
              <div className="shimmer w-full p-2"></div>
              <div className="shimmer w-full p-1"></div>
            </div>
          </div>

          {/* Material and Wallpapers Cards  */}
          <div className="mt-20 grid grid-cols-2 gap-4 items-center justify-center m-auto md:grid-cols-1">
            <a
              href="#"
              className=" shimmer flex items-center bg-gray-700 w-full max-w-[500px] h-[134px] gap-4  rounded transition-colors hover:bg-gray-600"
            ></a>

            <a
              href="#"
              className=" shimmer flex items-center bg-gray-700 w-full max-w-[500px] h-[134px] gap-4  rounded transition-colors hover:bg-gray-600"
            ></a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VideoSkeleton;
