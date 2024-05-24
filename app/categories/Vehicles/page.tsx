'use client'
import VehicleCard from "@/components/cards/Vehicle_card";
import Filter from "@/components/vehicles/Filter";
import Upper from "@/components/vehicles/Upper";
import React, { useState,useEffect } from "react";

type VehicleCardProps = {
  car_name: string;
  owner_name: string;
  rating: number;
  car_image: string;
  price: number;
  address: string;
  pp_url: string;
};
export default function Main() {
  const [showFilter, setShowFilter] = useState(true);
const[IsLocationEnabled,setIsLocationEnabled]=useState(false);
const[Location,setLocation]=useState({latitude:0,longitude:0});
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
//write a dummy data for vehicle datainclude 6 vehicle with props as vehicle_name,vehicle_image,vehicle_price,vehicle_location,owner_name,ratings
const data: VehicleCardProps[] = [
  {
    car_name: "Toyota",
    owner_name: "John Doe",
    rating: 4,
    car_image: "/Images/1.jpeg",
    price: 100,
    address: "New York",
    pp_url: "/Images/pp.jpg",
  },
  {
    car_name: "Honda",
    owner_name: "Jane Doe",
    rating: 3,
    car_image: "/Images/2.jpg",
    price: 150,
    address: "California",
    pp_url: "/Images/pp.jpg",
  },
  {
    car_name: "Ford",
    owner_name: "John Doe",
    rating: 4,
    car_image: "/Images/3.jpeg",
    price: 200,
    address: "Texas",
    pp_url: "/Images/pp.jpg",
  },
  {
    car_name: "Chevrolet",
    owner_name: "Jane Doe",
    rating: 3,
    car_image: "/Images/4.jpeg",
    price: 250,
    address: "Florida",
    pp_url: "/Images/pp.jpg",
  },
  {
    car_name: "Nissan",
    owner_name: "John Doe",
    rating: 4,
    car_image: "/Images/5.jpeg",
    price: 300,
    address: "Washington",
    pp_url: "/Images/pp.jpg",
  },
  {
    car_name: "Volkswagen",
    owner_name: "Jane Doe",
    rating: 3,
    car_image: "/Images/6.jpg",
    price: 350,
    address: "New Jersey",
    pp_url: "/Images/pp.jpg",
  },
  //checking geolocation

];
 useEffect(() => {
   // Check if geolocation is supported by the browser
   if ("geolocation" in navigator) {
    const handleAllowLocation = () => {
      // Request geolocation permission
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Set location coordinates
          setLocation({ latitude, longitude });
          // Set location enabled
          setIsLocationEnabled(true);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          // Handle errors
        }
        
      );
    };
      handleAllowLocation();
   }
   
   else {
     console.log("Geolocation is not supported by your browser");
   }
 
 }, []);

 console.log("your location coord is",Location)
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
          return <VehicleCard {...item} key={index} />;
        })}
      </div>
    </section>
  );
}
