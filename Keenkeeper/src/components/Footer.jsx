import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logo-xl.png";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] text-white text-center">
      <img className="pt-20 pb-4 mx-auto" src={logo} />
      <p className="text-[16px]">
        <small>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </small>
      </p>
      <p className="text-[20px] font-medium pt-6 pb-4">Social Links</p>
      <div className="flex justify-center items-center gap-3 text-black pb-10">
        <div className="bg-white p-2 rounded-full">
          <GrInstagram />
        </div>
        <div className="bg-white p-2 rounded-full">
          <FaFacebookSquare />
        </div>
        <div className="bg-white p-2 rounded-full">
          <FaXTwitter />
        </div>
      </div>
      <div className="divider container mx-auto my-divider"></div>
      <div className="flex flex-col md:flex-row justify-between items-center container mx-auto pb-8">
        <p>
          <small className="text-[#ffffffe5]">
            © 2026 KeenKeeper. All rights reserved.
          </small>
        </p>
        <div className="flex justify-center items-center gap-6">
          <p className="text-[#ffffffe5]">Privacy Policy</p>
          <p className="text-[#ffffffe5]">Terms of Service</p>
          <p className="text-[#ffffffe5]">Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
