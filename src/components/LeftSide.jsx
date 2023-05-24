// import Imgs from "../assets/Imgs.png";
import SliderDots from "../assets/SliderDots.png";
import RightImg from "../assets/RightImg.svg";

const LeftSide = () => {
  return (
    <div className="leftSideBg w-2/5 px-10 py-14 hidden min-h-screen lg:flex flex-col justify-between overflow-scroll">
      <p className="text-white font-semibold text-[28px] text-center max-w-[554px] mx-auto">
        Social media shared today, tomorrow or by location
      </p>
      <div className="flex justify-center">
        <img src={RightImg} alt="test" className="mt-[50px] mb-[30px]" />
      </div>
      <div className="flex justify-center">
        <img src={SliderDots} alt="SliderDot" className="w-[67px] h-5" />
      </div>
    </div>
  );
};

export default LeftSide;
