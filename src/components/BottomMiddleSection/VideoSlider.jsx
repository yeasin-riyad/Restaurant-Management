const VideoSlider = ({video}) => {
  return (
    <div className="flex flex-col-reverse mt-48 lg:flex-row h-[500px] lg:mt-6">
      <div className="bg-YElloW w-full  p-8 lg:p-16 lg:w-3/4">
      <div className=" flex flex-col gap-y-7 justify-between font-roboto font-normal w-full text-[#0A1425] lg:gap-y-14 ">
        <p className="text-lg lg:text-2xl">
          <span className="inline-block text-5xl -ml-5 lg:-ml-6">“</span> You can't go
          wrong with Chicken Mandi, I had it twice. The chicken was cooked
          perfectly, juicy & soft (usually mandi chicken is a bit dry). I would
          defiantly recommend it.
        </p>

        <div className="flex justify-between items-center w-full">
          <div>
            <h1 className="font-bebas font-bold text-lg lg:text-xl">KHALID A DAWSRY</h1>
            <p className="text-lg">Jeddah, Saudi</p>
          </div>

          <img
            src="https://i.ibb.co.com/JjCzj5q/Image.png"
            alt="reviewer Pic"
          />
        </div>
       
       
      </div>
      <div className="flex flex-col items-end">
          <hr className="bg-[#B52B1D]  w-[50px] h-[4px]" />

          <hr className="bg-[#0A1425] w-full h-[2px]" />
        </div>


      </div>

      <div className="w-full overflow-visible">
        <div className="relative w-full h-[250px] pb-[56.25%] lg:h-[500px]">
          <iframe
            className="absolute  left-0 w-full h-full top-0"
            src={video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
