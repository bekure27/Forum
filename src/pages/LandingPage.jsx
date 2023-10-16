import About from "../components/About/About"
import LoginRegister from "../components/LoginRegister/LoginRegister"

const LandingPage = () => {
  return (
    <div
      className=" bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('./10001.svg')` }}
    >
      <div className=" py-28 px-28 sm:flex ">
        <LoginRegister />
        <About />
      </div>
    </div>
  );
}

export default LandingPage