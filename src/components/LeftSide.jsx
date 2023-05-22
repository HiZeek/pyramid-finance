import Imgs from "../assets/Imgs.png";
import SliderDots from "../assets/SliderDots.png";

const LeftSide = () => {
  return (
    <div className="leftSideBg w-1/2">
      <p className="text-white font-semibold text-[28px] text-center max-w-[554px] m-auto">
        Social media shared today, tomorrow or by location
      </p>
      <div className="relative flex justify-center items-center">
        <img
          src={Imgs}
          alt="Imgs"
          className="w-[440px] h-[630.03px] relative z-10"
        />
        <div className="w-[593px] h-[593.03px] absolute top-0 rounded-full blueCircle" />
      </div>
      <div className="flex justify-center">
        <img src={SliderDots} alt="SliderDot" className="w-[67px] h-5" />
      </div>
    </div>
  );
};

export default LeftSide;
