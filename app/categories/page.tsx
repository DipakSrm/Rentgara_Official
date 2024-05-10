import Cat_Card from "@/components/cards/Cat_Card";

interface Cat_CardProps {
  name: string;
  url: string;
  description: string;
}
export default function Categories() {
  const data: Cat_CardProps[] = [
    {
      name: "Vehicles",
      url: "/Images/vehicle.jpg",
      description: "Rent all types of vehicles",
    },
    {
      name: "House",
      url: "/Images/house.jpg",
      description: "Rent house at convinient rate",
    },
    {
      name: "Clothes",
      url: "/Images/clothes.jpg",
      description: "RRent clothes for any occasion",
    },
  ];
  return (
    <>
      {" "}
      <div className="flex flex-wrap w-full lg:w-[90%] mx-auto p-6 items-center justify-center gap-8 h-screen ">
        {data.map((item, index) => (
          <Cat_Card key={index} {...item} />
        ))}
      </div>
    </>
  );
}
