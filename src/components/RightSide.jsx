// Components
import Button from "../ui/Button";

// Images
import Logo from "../assets/Logo.png";
import AppStoreBadge from "../assets/AppStoreBadge.png";
import GooglePlayBadge from "../assets/GooglePlayBadge.png";
import Google from "../assets/Google.png";

const RightSide = () => {
  return (
    <div className="w-3/5 pt-[60px] bg-white">
      <div className="max-w-[750px] m-auto">
        <img src={Logo} alt="Logo" className="w-[114.84px] h-[48px]" />
        <div className="mt-[61px]">
          <h2 className="font-semibold text-[28px]">Create account</h2>
          <p className="text-sm font-normal mt-2">
            For business, band or celebrity.
          </p>
          <div className="mt-14">
            <form>
              <div className="flex flex-col gap-y-6">
                <div className="flex gap-x-8 max-w-[750px]">
                  <div className="flex flex-col w-[359px]">
                    <label htmlFor="fname" className="text-sm font-normal">
                      First name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      className="max-w-[358px] h-12 border border-[#D1D1D1] rounded-[5px] px-3"
                    />
                  </div>
                  <div className="flex flex-col w-[359px]">
                    <label htmlFor="lname" className="text-sm font-normal">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      className="max-w-[358px] h-12 border border-[#D1D1D1] rounded-[5px] px-3"
                    />
                  </div>
                </div>
                <div className="flex gap-x-8 max-w-[750px]">
                  <div className="flex flex-col w-[359px]">
                    <label htmlFor="pnumber" className="text-sm font-normal">
                      Email or phone number
                    </label>
                    <input
                      type="text"
                      id="pnumber"
                      name="pnumber"
                      className="max-w-[358px] h-12 border border-[#D1D1D1] rounded-[5px] px-3"
                    />
                  </div>
                  <div className="flex flex-col w-[359px]">
                    <label htmlFor="date" className="text-sm font-normal">
                      Date of birth (MM/DD/YY)
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="max-w-[358px] h-12 border border-[#D1D1D1] rounded-[5px] px-3"
                    />
                  </div>
                </div>
                <div className="flex gap-x-8 max-w-[750px]">
                  <div className="flex flex-col w-[359px]">
                    <label htmlFor="pass" className="text-sm font-normal">
                      Password
                    </label>
                    <input
                      type="password"
                      id="pass"
                      name="pass"
                      className="max-w-[480px] h-12 border border-[#D1D1D1] rounded-[5px] px-3"
                    />
                  </div>
                  <div className="flex flex-col w-[359px]">
                    <label htmlFor="cpass" className="text-sm font-normal">
                      Confirm password
                    </label>
                    <input
                      type="password"
                      id="cpass"
                      name="cpass"
                      className="max-w-[480px] h-12 border border-[#D1D1D1] rounded-[5px] px-3"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-4 mt-7">
                <div className="flex justify-between items-center">
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
                <div className="flex justify-between my-8">
                  <Button
                    className="bg-[#007AFF] text-white py-[13px] px-[105px]"
                    type="submit"
                  >
                    Create account
                  </Button>
                  <Button className="bg-[#2D3748] text-white py-[13px] px-[105px] flex gap-x-3">
                    <img src={Google} alt="Google" className="w-5 h-5" />
                    Sign-in with google
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <p className="text-sm font-normal text-center">
            Don’t have an account?{" "}
            <a href="#" className="text-[#007AFF] cursor-pointer">
              Log In
            </a>
          </p>
        </div>
        <div className="flex gap-x-[13px] mt-20">
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
