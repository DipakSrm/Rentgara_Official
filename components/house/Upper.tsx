import { locationData, vehicleData } from "@/public/data/data";
import { useState } from "react";
interface DateProps {
  justdate: Date | null;
  datetime: Date | null;
}

interface ControlProps {
  dateOpen: boolean;
  timeOpen: boolean;
}
export default function Upper() {
  const [date1, setDate1] = useState<DateProps>({
    justdate: new Date(),
    datetime: null,
  });

 

  const [location, setlocation] = useState("");
  const [Number, setNumber] = useState("");
    const [Purpose, setPurpose] = useState("");
  const getlocation = (e: any) => {
    const selected = e.target.value;
    setlocation(selected);
  };
  const getNumber = (e: any) => {
    const selected = e.target.value;
    setNumber(selected);
  };
   const getPurpose = (e: any) => {
     const selected = e.target.value;
     setPurpose(selected);
   };

  console.log("this is location", location);

  const time_numbers: string[] = [
    "1am",
    "2am",
    "3am",
    "4am",
    "5am",
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
    "8pm",
    "9pm",
    "10pm",
    "11pm",
    "12am",
  ];
  //function declaration for setting time
  const handleStartingDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const select = new Date(e.target.value);
    setDate1((prev) => ({ ...prev, justdate: select }));
  };

  
  console.log(
    "date1, date2, location, Number",
    date1.justdate,
   
    location,
    Number
  );
  return (
    <div className="m-10 w-screen max-w-screen-md overflow-hidden ">
      <div className="flex flex-col">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
          <form className="">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {/* select location */}
              <div className="flex flex-col">
                <label
                  htmlFor="Location"
                  className="text-sm font-medium text-stone-600"
                >
                  Location
                </label>

                <input
                  type="text"
                  className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  onChange={getlocation}
                  placeholder="Location"
                  list="location"
                />
                <datalist id="location">
                  {locationData.map((item) => {
                    return <option value={item.name} key={item.name} />;
                  })}
                </datalist>
              </div>
              {/* select genders */}
              <div className="flex flex-col">
                <label
                  htmlFor="Number"
                  className="text-sm font-medium text-stone-600"
                >
                  Number
                </label>

                <input
                  type="text"
                  className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  onChange={getNumber}
                  placeholder="select Number"
                  list="Number"
                />
                <datalist id="Number">
                  <option value="Single"></option>
                  <option value="Couple"></option>
                  <option value="Family"></option>
                </datalist>
              </div>
              {/* select entry date */}

              <div className="flex flex-col">
                <label
                  htmlFor="date"
                  className="text-sm font-medium text-stone-600"
                >
                  Appointment Date
                </label>
                <input
                  type="date"
                  onChange={handleStartingDate}
                  id="date"
                  className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              {/* select purpose */}
              <div className="flex flex-col">
                <label
                  htmlFor="Number"
                  className="text-sm font-medium text-stone-600"
                >
                  Purpose
                </label>

                <input
                  type="text"
                  className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  onChange={getPurpose}
                  placeholder="select Purpose"
                  list="Purpose"
                />
                <datalist id="Purpose">
                  <option value="Living"></option>
                  <option value="Business"></option>
                 
                </datalist>
              </div>
            </div>

            <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
              <button className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">
                Reset
              </button>
              <button className="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
