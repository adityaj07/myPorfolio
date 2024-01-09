const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function ImageSkeleton(){
    return (
        <div className={` ${shimmer} bg-[#1C1D1D] pb-2 m-2 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}>
          <div
            className='mb-4 rounded-xl w-full h-full'
          ></div>

          <p className="mb-2 -mt-2 p-2">
            <span></span>
          </p>
          </div>
          
    )
}