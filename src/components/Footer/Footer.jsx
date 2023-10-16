import {
  AiFillYoutube,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
function Footer() {
  return (
    <footer className="bg-footer text-white p-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="text-center mb-4 md:mb-0 md:mr-8">
          <img
            src="/10005.png"
            alt="Logo"
            className="w-auto h-6 mx-auto md:w-auto md:h-7"
          />
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <AiFillFacebook size={32} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <AiFillInstagram size={32} />
             
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <AiFillYoutube size={32} />
            </a>
          </div>
        </div>
        <div className="text-center ">
          <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
          <ul className="text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                How it works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center ">
          <h2 className="text-lg font-semibold mb-4  ">Contact Info</h2>
          <ul className="text-gray-300">
            <li>
              <a href="mailto:info@example.com" className="hover:text-white">
                Email: info@example.com
              </a>
            </li>
            <li>
              <a href="tel:1-800-555-1212" className="hover:text-white">
                Phone: 1-800-555-1212
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
