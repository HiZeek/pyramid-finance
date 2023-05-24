// Components
import Button from "../ui/Button";

// Images
import Logo from "../assets/Logo.png";
import AppStoreBadge from "../assets/AppStoreBadge.png";
import GooglePlayBadge from "../assets/GooglePlayBadge.png";
import Google from "../assets/Google.png";

const RightSide = () => {
  const inputMain = "flex flex-col sm:flex-row gap-8 max-w-[750px]";
  const inputContainer =
    "flex flex-col max-w-[359px] sm:w-[348px] sm:justify-between";
  const inputStyle =
    "max-w-[480px] h-12 border border-[#D1D1D1] rounded-[5px] px-3 focus:outline-[#007AFF]";

  return (
    <div className="w-full pb-5 lg:w-3/5 pt-[60px] bg-white px-5 h-full overflow-y-auto hideBar">
      <div className="max-w-[750px] m-auto">
        <img src={Logo} alt="Logo" className="w-[114.84px] h-[48px]" />
        <div className="mt-[61px]">
          <div>
            <h2 className="font-semibold text-[28px]">Create account</h2>
            <p className="text-sm font-normal mt-2">
              For business, band or celebrity.
            </p>
          </div>
          <div className="mt-14">
            <form>
              <div className="flex flex-col gap-y-6">
                <div className={inputMain}>
                  <div className={inputContainer}>
                    <label htmlFor="fname" className="text-sm font-normal">
                      First name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      className={inputStyle}
                    />
                  </div>
                  <div className={inputContainer}>
                    <label htmlFor="lname" className="text-sm font-normal">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      className={inputStyle}
                    />
                  </div>
                </div>
                <div className={inputMain}>
                  <div className={inputContainer}>
                    <label htmlFor="pnumber" className="text-sm font-normal">
                      Email or phone number
                    </label>
                    <input
                      type="text"
                      id="pnumber"
                      name="pnumber"
                      className={inputStyle}
                    />
                  </div>
                  <div className={inputContainer}>
                    <label htmlFor="date" className="text-sm font-normal">
                      Date of birth (MM/DD/YY)
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className={inputStyle}
                    />
                  </div>
                </div>
                <div className={inputMain}>
                  <div className={inputContainer}>
                    <label htmlFor="pass" className="text-sm font-normal">
                      Password
                    </label>
                    <input
                      type="password"
                      id="pass"
                      name="pass"
                      className={inputStyle}
                    />
                  </div>
                  <div className={inputContainer}>
                    <label htmlFor="cpass" className="text-sm font-normal">
                      Confirm password
                    </label>
                    <input
                      type="password"
                      id="cpass"
                      name="cpass"
                      className={inputStyle}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-4 mt-7">
                <div className="flex flex-col-reverse gap-7 sm:flex-row sm:justify-between lg:items-center">
                  <div>
                    <input
                      id="remember"
                      name="remember"
                      type="checkbox"
                      className="border border-[#D1D1D1] rounded-sm"
                    />
                    <label
                      htmlFor="remember"
                      className="ml-3 text-sm font-normal"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-[#007AFF] cursor-pointer text-sm font-normal"
                  >
                    Forgot password?
                  </a>
                </div>
                <div>
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="border border-[#D1D1D1] rounded-sm"
                  />
                  <label htmlFor="terms" className="ml-3 text-sm font-normal">
                    I agree to all the{" "}
                    <a href="#" className="text-[#007AFF] cursor-pointer">
                      Terms
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#007AFF] cursor-pointer">
                      Privacy policy
                    </a>
                  </label>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between justify-center gap-8 my-8">
                  <Button
                    className="bg-[#007AFF] text-white py-[13px] px-4 lg:px-[65px] max-w-[358px] sm:w-[348px]"
                    type="submit"
                  >
                    Create account
                  </Button>
                  <Button className="bg-[#2D3748] text-white py-[13px] px-4 lg:px-[65px] flex justify-center items-center gap-3 max-w-[358px] sm:w-[348px]">
                    <img src={Google} alt="Google" className="w-5 h-5" />
                    Sign-in with google
                  </Button>
                </div>
              </div>
            </form>
            <p className="text-sm font-normal text-center">
              Don’t have an account?{" "}
              <a href="#" className="text-[#007AFF] cursor-pointer">
                Log In
              </a>
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start items-center gap-[13px] mt-20">
          <a href="http://google.com/">
            <img
              src={GooglePlayBadge}
              alt="GooglePlayBadge"
              className="w-[135px] h-10"
            />
          </a>
          <a href="http://apple.com/">
            <img
              src={AppStoreBadge}
              alt="AppStoreBadge"
              className="w-[133.26px] h-[38.26px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
