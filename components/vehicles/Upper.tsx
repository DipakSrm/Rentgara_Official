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
export default function Upper(){
      const [date1, setDate1] = useState<DateProps>({
        justdate: new Date(),
        datetime: null,
      });

      const [control1, setControl1] = useState<ControlProps>({
        dateOpen: false,
        timeOpen: false,
      });
      const [date2, setDate2] = useState<DateProps>({
        justdate: new Date(),
        datetime: null,
      });

      const [control2, setControl2] = useState<ControlProps>({
        dateOpen: false,
        timeOpen: false,
      });
      const [location, setlocation] = useState("");
      const [vehicle,setvehicle] = useState("");
      const getlocation = (e: any) => {
        const selected = e.target.value;
        setlocation(selected);
      };
      const getvehicle = (e: any) => {
        const selected = e.target.value;
        setvehicle(selected);
      }
       const formatDate = (date: Date | null): string => {
         if (!date) return ""; // Return empty string if date is null
         const formattedDate = date.toLocaleDateString("en-US", {
           year: "numeric",
           month: "short",
           day: "numeric",
         });
         return formattedDate;
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

  const handleReturningDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const select = new Date(e.target.value);
    setDate2((prev) => ({ ...prev, justdate: select }));
  };
  console.log(
  "date1, date2, location, vehicle",
  formatDate(date1.justdate),
  formatDate(date2.justdate),
  location,
  vehicle
);
    return (
      <div className="m-10 w-screen max-w-screen-md">
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
                {/* select vehicles */}
                <div className="flex flex-col">
                  <label
                    htmlFor="Vehicle"
                    className="text-sm font-medium text-stone-600"
                  >
                    Vehicle
                  </label>

                  <input
                    type="text"
                    className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    onChange={getvehicle}
                    placeholder="vehicle"
                    list="vehicle"
                  />
                  <datalist id="vehicle">
                    {vehicleData.map((item) => {
                      return <option value={item.name} key={item.name} />;
                    })}
                  </datalist>
                </div>
                {/* select entry date */}

                <div className="flex flex-col">
                  <label
                    htmlFor="date"
                    className="text-sm font-medium text-stone-600"
                  >
                    Starting Date
                  </label>
                  <input
                    type="date"
                    onChange={handleStartingDate}
                    id="date"
                    className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                {/* select reurning date */}
                <div className="flex flex-col">
                  <label
                    htmlFor="date"
                    className="text-sm font-medium text-stone-600"
                  >
                   Returning Date
                  </label>
                  <input
                    type="date"
                    onChange={handleReturningDate}
                    id="date"
                    className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
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