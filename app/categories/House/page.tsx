"use client";

import House_Card from "@/components/cards/House_Card";
import Filter from "@/components/house/Filter";
import Upper from "@/components/house/Upper";


type HouseCardProps = {
  house_type: string;
  owner_name: string;
  rating: number;
  house_image: string;
  price: number;
  address: string;
  pp_url: string;
};
export default function House() {
  const data: HouseCardProps[] = [
    {
      house_type: "Apartment",
      owner_name: "John Doe",
      rating: 4,
      house_image: "/Images/13.jpg",
      price: 10000,
      address: "Urlabari",
      pp_url: "/Images/pp.jpg",
    },
    {
      house_type: "Villa",
      owner_name: "Jane Doe",
      rating: 3,
      house_image: "/Images/14.jpeg",
      price: 15000,
      address: "Damak",
      pp_url: "/Images/pp.jpg",
    },
    {
      house_type: "House",
      owner_name: "John Doe",
      rating: 4,
      house_image: "/Images/15.jpeg",
      price: 20000,
      address: "Itahari",
      pp_url: "/Images/pp.jpg",
    },
    {
      house_type: "Apartment",
      owner_name: "Jane Doe",
      rating: 3,
      house_image: "/Images/16.jpg",
      price: 25000,
      address: "Kanepokhari",
      pp_url: "/Images/pp.jpg",
    },
    {
      house_type: "Villa",
      owner_name: "John Doe",
      rating: 4,
      house_image: "/Images/17.jpeg",
      price: 30000,
      address: "Gauradha",
      pp_url: "/Images/pp.jpg",
    },
    {
      house_type: "House",
      owner_name: "Jane Doe",
      rating: 3,
      house_image: "/Images/18.jpeg",
      price: 35000,
      address: "Gauradha",
      pp_url: "/Images/pp.jpg",
    },
    {
        house_type: "Apartment",    
        owner_name: "John Doe",
        rating: 4,
        house_image: "/Images/19.jpg",
        price: 10000,
        address: "Urlabari",
        pp_url: "/Images/pp.jpg",
        },
        {
        house_type: "Villa",
        owner_name: "Jane Doe",
        rating: 3,
        house_image: "/Images/20.jpeg",
        price: 15000,
        address: "Damak",
        pp_url: "/Images/pp.jpg",
        },
        {
        house_type: "House",
        owner_name: "John Doe",
        rating: 4,
        house_image: "/Images/21.jpeg",
        price: 20000,
        address: "Itahari",
        pp_url: "/Images/pp.jpg",
        }
        

    
  ];
  return (
    <section
      id="section"
      className=" mx-auto h-full grid lg:grid-cols-6 mt-[10%] gap-4 w-full"
    >
      <div className="lg:col-span-6 lg:row-span-1 lg:mt-[1.5rem] md:mt-[2.5rem] mt-[5rem] base:mt-[6rem]">
        <Upper />
      </div>
      <div className="lg:col-span-2 ">
        <Filter />
      </div>
      <div className=" lg:col-span-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4 p-4  ">
        {data.map((item, index) => {
          return <House_Card {...item} key={index} />;
        })}
      </div>
    </section>
  );
}
