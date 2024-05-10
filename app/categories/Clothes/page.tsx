'use client'
import Cloth_Card from "@/components/cards/Cloth_Card";
import VehicleCard from "@/components/cards/Vehicle_card";
import Filter from "@/components/clothes/Filter";
import Upper from "@/components/clothes/Upper";
type ClothCardProps = {
  cloth_name: string;
  owner_name: string;
  rating: number;
  cloth_image: string;
  price: number;
  address: string;
  pp_url: string;
};
export default function Clothes(){
    const data:ClothCardProps[]=[
        {
            cloth_name:"Guniyu cholo",
            owner_name:"John Doe",
            rating:4,
            cloth_image:"/Images/7.jpeg",
            price:1000,
            address:"Urlabari",
            pp_url:"/Images/pp.jpg",
        },
        {
            cloth_name:"Kurta",
            owner_name:"Jane Doe",
            rating:3,
            cloth_image:"/Images/8.jpeg",
            price:1500,
            address:"Damak",
            pp_url:"/Images/pp.jpg",
        },
        {
            cloth_name:"Saree",
            owner_name:"John Doe",
            rating:4,
            cloth_image:"/Images/9.jpeg",
            price:2000,
            address:"Itahari",
            pp_url:"/Images/pp.jpg",
        },
        {
            cloth_name:"Sherwani",
            owner_name:"Jane Doe",
            rating:3,
            cloth_image:"/Images/10.jpeg",
            price:2500,
            address:"Kanepokhari",
            pp_url:"/Images/pp.jpg",
        },
        {
            cloth_name:"Lehenga",
            owner_name:"John Doe",
            rating:4,
            cloth_image:"/Images/11.jpeg",
            price:3000,
            address:"Gauradha",
            pp_url:"/Images/pp.jpg",
        },
        {
            cloth_name:"Gown",
            owner_name:"Jane Doe",
            rating:3,
            cloth_image:"/Images/12.jpeg",
            price:3500,
            address:"Damak",
            pp_url:"/Images/pp.jpg",
        },
    ]
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
            return <Cloth_Card {...item} key={index} />;
          })}
        </div>
      </section>
    );
}