import { MapPinLine, Star } from "@phosphor-icons/react";
import Image from "next/image";

type HouseCardProps = {
  house_type: string;
  owner_name: string;
  rating: number;
  house_image: string;
  price: number;
  address: string;
  pp_url: string;
};
const House_Card: React.FC<HouseCardProps> = ({
  house_type,
  owner_name,
  rating,
  house_image,
  price,
  address,
  pp_url,
}) => {
  return (
    <div className="w-full  lg:h-[90%] rounded-lg flex flex-col gap-2 hover:translate-y-[-5%] transition-transform duration-300 shadow ease-in-out bg-slate-50">
      <div className=" flex justify-center items-center  hover:cursor-pointer overflow-hidden  p-2">
        <div
          style={{ width: "300px", height: "200px" }}
          className="overflow-hidden"
        >
          <Image
            src={house_image}
            alt="this is image"
            height={300}
            width={500}
            className="w-full h-full"
          />
        </div>
      </div>

      <div className=" p-2 flex flex-col gap-4 ">
        <div className="flex items-center justify-between ">
          <h1 className=" lg:text-2xl md:text-xl text-3xl font-semibold text-blue-700 ">
            {house_type}
            <br />
            <span className="text-green-500 ">Rs{price} per month</span>
          </h1>
          <div className="flex justify-start items-center gap-2 ">
            <Star size={32} className="text-yellow-400 w-4" />
            <span>{rating}</span>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="flex items-center  gap-2">
            <Image
              src={pp_url}
              alt="this is image"
              width={100}
              height={100}
              className="rounded-full" // Apply the rounded-full class for a circular shape
              style={{ width: "5vh", height: "5vh" }} // Set the width and height to maintain the circular shape
            />
            <span className="">{owner_name}</span>
          </div>
          <div className="flex items-center justify-start gap-2 row-span-1 pt-2">
            <MapPinLine size={32} />
            <span className="">{address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default House_Card;
