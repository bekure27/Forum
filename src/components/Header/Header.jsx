
function Header() {
  return (
      <header className="sticky top-0 z-50 bg-white flex justify-around    items-center p-3 md:p-4 lg:p-6">
        <div className="">
          <img
            src="/10004.png"
            alt="Logo"
            className="h-4 md:h-6 lg:h-8 sm:block hidden"
          />
        </div>
        <nav className="space-x-4  sm:flex-col">
          <a href="#" className="text-black hover:text-[#FE8402]">
            Home
          </a>
          <a href="#" className="text-black hover:text-[#FE8402]">
            How it Works
          </a>
          <button className="bg-blue-500 text-white font-semibold py-1 px-4 md:py-2 md:px-6 lg:py-2 lg:px-12 hover:bg-[#FE8402] rounded">
            SIGN IN
          </button>
        </nav>
      </header>
  );
}

export default Header;
