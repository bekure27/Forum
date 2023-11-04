import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
function Header() {
const dispatch = useDispatch();
const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
const user = useSelector((state) => state.auth.user);
const navigate = useNavigate()




// console.log(user)
  const handleLogout = () => {
    dispatch(logout());
    navigate('/')
  };



  return (
    <header className="sticky top-0 z-50 bg-white flex justify-around items-center p-3 md:p-4 lg:p-6">
      <div className="">
        <Link to={isAuthenticated ? "/questions" : "/"}>
          <img
            src="/10004.png"
            alt="Logo"
            className="h-4 md:h-6 lg:h-8 sm:block hidden"
          />
        </Link>
      </div>
      <nav className="space-x-4  sm:flex-col">
        <Link
          to={isAuthenticated ? "/questions" : "/"}
          className="text-black hover:text-[#FE8402]"
        >
          Home
        </Link>

        {isAuthenticated && (
          <Link
            to={isAuthenticated ? "/profile" : "/"}
            className="text-black hover:text-[#FE8402]"
          >
            Your Profile
          </Link>
        )}
        
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white font-semibold py-1 px-4 md:py-2 md:px-6 lg:py-2 lg:px-12 hover:bg-[#FE8402] rounded"
          >
            Logout
          </button>
        ) : (
          <button className="bg-blue-500 text-white font-semibold py-1 px-4 md:py-2 md:px-6 lg:py-2 lg:px-12 hover:bg-[#FE8402] rounded">
            SIGN IN
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;
