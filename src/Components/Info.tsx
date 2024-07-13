import { BiWorld } from "react-icons/bi";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { GiTrophy } from "react-icons/gi";

const Info = () => {
  return (
    <section className="mt-2 py-5 ">
      <div className="main-container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 m-4 ml-11">
        <div className="flex items-center gap-2 uppercase text-sm p-2 ">
          <BiWorld className="text-3xl" />
          <span>Free Shipping Worldwide</span>
        </div>
        <div className="flex items-center gap-2 uppercase text-sm p-2">
          <FaArrowRotateLeft className="text-3xl" />
          <span>Money Back Guarenteed</span>
        </div>
        <div className="flex items-center gap-2 uppercase text-sm p-2">
          <IoIosLock className="text-3xl" />
          <span>Secure Online Payments</span>
        </div>
        <div className="flex items-center gap-2 uppercase text-sm p-2">
          <GiTrophy className="text-3xl" />
          <span>Best Premium Quality</span>
        </div>
      </div>
    </section>
  );
};

export default Info;
