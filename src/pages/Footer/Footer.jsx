import { FaFacebook, FaTwitter, FaGithub, FaInstagram, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (

            <footer className="footer footer-center p-10 bg-[#cffafe] text-base-content mt-44 ">
            <nav className="border-b pb-8 pt-4 border-green-400">
                <div className="grid grid-flow-col gap-6">
                    <a href="https://www.facebook.com/rafis.bird.house"><FaFacebook className="text-3xl text-blue-700"></FaFacebook></a>
                    <a href="https://twitter.com/rafibhuiyan1234"><FaTwitter className="text-3xl text-sky-400"></FaTwitter></a>
                    <a href="https://github.com/abdullahrafi1234"><FaGithub className="text-3xl"></FaGithub></a>
                    <a href="https://www.instagram.com/abdullah.rafiii/"><FaInstagram className="text-3xl text-red-400"></FaInstagram></a>
                </div>
            </nav>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-48 gap-4 pb-8 border-b border-base-300">
            <aside className="justify-center text-center items-center">

               {/* react icon */}
               <p className="pl-20 p-4"><FaLocationDot className="text-4xl"></FaLocationDot></p>
                <p className="font-semibold text-2xl">
                    Address
                </p>
                <p>15/17 Tikkapara, Mohammadpur <br />Dhaka 1207</p>
            </aside>
            <aside>
               {/* react icon */}
               <p className="pl-20 p-4"> <MdEmail className="text-4xl"></MdEmail></p>
                <p className="font-semibold text-2xl">
                    Email
                </p>
                <p>rafibhuiyan1234@gmail.com</p>
                <p>mdabdullah23456@gmail.com</p>
            </aside>
            <aside>
               {/* react icon */}
               <p className="pl-12 p-4"> <FaPhone className="text-3xl"></FaPhone></p>
                <p className="font-semibold text-2xl">
                   Phone
                </p>
                <p>(+88) 01722438145</p>
                <p>(+88) 01568393268</p>
            </aside>
            </div>
            

            <aside>
                <p>Copyright © 2024 - All right reserved by SleepWell Industries Ltd</p>
            </aside>
        </footer>

    );
};

export default Footer;