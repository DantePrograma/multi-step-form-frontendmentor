import sideBarDesktop from "../../assets/images/bg-sidebar-desktop.svg";
import sideBarMobile from "../../assets/images/bg-sidebar-mobile.svg";

export const NavBar = ({
  windowWidth,
  currentStep,
}: {
  windowWidth: number;
  currentStep: number;
}) => {
  return (
    <nav
      style={{
        backgroundImage: `url(${
          windowWidth > 768 ? sideBarDesktop : sideBarMobile
        })`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="h-[16rem] md:h-full absolute md:relative p-12 md:p-7 md:pt-9 w-full flex md:flex-col font-medium gap-8 justify-center md:justify-start md:rounded-lg"
    >
      <img src={sideBarDesktop} alt="" />
      <div className="md:flex gap-3 items-center">
        <button
          style={{
            backgroundColor: currentStep === 0 ? "#bfe2fd" : "",
            color: currentStep === 0 ? "#02295a" : "#bfe2fd",
            border: "1px solid #bfe2fd",
          }}
          className="text-[#bfe2fd] rounded-full h-10 w-10 transition"
        >
          1
        </button>
        {windowWidth > 768 && (
          <div>
            <p className="text-[#d6d9e6]">STEP 1</p>
            <h1 className="text-white font-bold">YOUR INFO</h1>
          </div>
        )}
      </div>
      <div className="md:flex gap-3 items-center">
        <button
          style={{
            backgroundColor: currentStep === 1 ? "#bfe2fd" : "",
            color: currentStep === 1 ? "#02295a" : "#bfe2fd",
            border: "1px solid #bfe2fd",
          }}
          className="text-[#bfe2fd] rounded-full h-10 w-10 transition"
        >
          2
        </button>
        {windowWidth > 768 && (
          <div>
            <p className="text-[#d6d9e6]">STEP 2</p>
            <h1 className="text-white font-bold">SELECT PLAN</h1>
          </div>
        )}
      </div>

      <div className="md:flex gap-3 items-center">
        <button
          style={{
            backgroundColor: currentStep === 2 ? "#bfe2fd" : "",
            color: currentStep === 2 ? "#02295a" : "#bfe2fd",
            border: "1px solid #bfe2fd",
          }}
          className="text-[#bfe2fd] rounded-full h-10 w-10 transition"
        >
          3
        </button>
        {windowWidth > 768 && (
          <div>
            <p className="text-[#d6d9e6]">STEP 3</p>
            <h1 className="text-white font-bold">ADD-ONS</h1>
          </div>
        )}
      </div>

      <div className="md:flex gap-3 items-center">
        <button
          style={{
            backgroundColor: currentStep === 3 ? "#bfe2fd" : "",
            color: currentStep === 3 ? "#02295a" : "#bfe2fd",
            border: "1px solid #bfe2fd",
          }}
          className="text-[#bfe2fd] rounded-full h-10 w-10 transition"
        >
          4
        </button>
        {windowWidth > 768 && (
          <div>
            <p className="text-[#d6d9e6]">STEP 4</p>
            <h1 className="text-white font-bold">SUMMARY</h1>
          </div>
        )}
      </div>
    </nav>
  );
};
