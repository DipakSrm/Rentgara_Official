"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type InputData = {
  First: string;
  Last: string;
  Email: string;
  Password: string;
  Ph_Num: string | null;
  Ward?: string | null; // For address form
  Municipality?: string | null; // For address form
  Company?: string | null; // For vehicle form
  Model?: string | null; // For vehicle form
  Type?: string | null; // For clothes form
  Category?: string[] | null;
  Plate_Num?: string | null; // For vehicle form
  License_Num?: string | null; // For clothes form
};

export default function SignUpPage() {
  const [isRenter, setIsRenter] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  console.log("selcee", selectedCategories);
  const {
    register,
    handleSubmit,
    setValue,
   
    formState: { errors },
  } = useForm<InputData>();
  const onSubmit: SubmitHandler<InputData> = (data) => {

    if (selectedCategories.length === 0) {
      data.Category = null;
    }else{
      data.Category=selectedCategories;
    }
    console.log(data);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, name]);

    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== name)
      );
    }
  };

  return (
    <>
      <section className="py-1 bg-blueGray-50">
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  My account
                </h6>
                <button
                  className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setIsRenter(!isRenter)}
                >
                  {isRenter ? "Be a Rentee" : "Be a Renter"}
                </button>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form className="" onSubmit={handleSubmit(onSubmit)}>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  User Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="First"
                      >
                        First Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        {...register("First", { required: true })}
                      />
                      {errors.First && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="Last"
                      >
                        Last Name<span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        {...register("Last", { required: true })}
                      />
                      {errors.Last && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="Email"
                      >
                        Email address<span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        {...register("Email", { required: true })}
                      />
                      {errors.Email && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="Password"
                      >
                        Password<span className="text-red-600">*</span>
                      </label>
                      <input
                        type="password"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        {...register("Password", { required: true })}
                      />
                      {errors.Password && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                {isRenter && (
                  <>
                    <div id="contact info">
                      <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                        Contact Information
                      </h6>
                      <div className="flex  items-center justify-evenly">
                        <div className="relative  mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="municipality"
                          >
                            Municipality<span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            {...register("Municipality", { required: true })}
                            id="municipality"
                          />
                          {errors.Municipality && (
                            <span className="text-red-500">
                              This field is required
                            </span>
                          )}
                        </div>
                        <div className="relative mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="ward"
                          >
                            Ward<span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            id="ward"
                            {...register("Ward", { required: true })}
                           
                          />
                          {errors.Ward && (
                            <span className="text-red-500">
                              This field is required
                            </span>
                          )}
                        </div>
                        <div className="relative  mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="Ph_Num"
                          >
                            Phone Number<span className="text-red-600">*</span>
                          </label>
                          <input
                            type="number"
                            maxLength={10}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            id="Ph_Num"
                            {...register("Ph_Num", {
                              required: true,
                              maxLength: 10,
                            })}
                          />
                          {errors.Ph_Num && (
                            <span className="text-red-500">
                              Phone numebr not valid
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <hr className="mt-6 border-b-1 border-blueGray-300" />

                    {/* Category Section */}
                    <div id="category">
                      <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                        Choose a Category<span className="text-red-600">*</span>
                      </h6>
                      <div className="flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4">
                          <div className="relative w-full mb-3 flex items-center gap-2">
                            <input
                              type="checkbox"
                              name="vehicle"
                              id="vehicle"
                              className=""
                              onChange={handleCheckboxChange}
                              checked={selectedCategories.includes("vehicle")}
                            />
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="vehicle"
                            >
                              Vehicle
                            </label>
                          </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                          <div className="relative w-full mb-3 flex items-center gap-2">
                            <input
                              type="checkbox"
                              name="clothes"
                              id="clothes"
                              className=""
                              onChange={handleCheckboxChange}
                              checked={selectedCategories.includes("clothes")}
                            />
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="clothes"
                            >
                              Clothes
                            </label>
                          </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                          <div className="relative w-full mb-3 flex items-center gap-2">
                            <input
                              type="checkbox"
                              name="real_estate"
                              id="real_estate"
                              className=""
                              onChange={handleCheckboxChange}
                              checked={selectedCategories.includes(
                                "real_estate"
                              )}
                            />
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="real_estate"
                            >
                              Real Estate
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {selectedCategories.length === 0 && (
                      <p className="text-sm font-medium text-red-500 p-4">
                        *Note:- Select at least one category.
                      </p>
                    )}
                    <hr className="mt-6 border-b-1 border-blueGray-300" />

                    {/* Conditional Rendering Based on Selected Categories */}
                    {selectedCategories.includes("vehicle") && (
                      <div id="vehicleForm">
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                          Vehicle Information
                        </h6>
                        <div className="flex flex-wrap">
                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="Company"
                              >
                                Company<span className="text-red-600">*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="eg. Toyota, Honda, etc."
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                {...register("Company", { required: true })}
                              />{" "}
                              {errors.Company && (
                                <span className="text-red-500">
                                 Field is required
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="Model"
                              >
                                Model<span className="text-red-600">*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="eg. Hyundai i20, TATA Nexon, etc."
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                {...register("Model", { required: true })}
                              />
                              {errors.Model && (
                                <span className="text-red-500">
                                 Field is required
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="License_Num"
                              >
                                License Number
                                <span className="text-red-600">*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="1537485-13"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                {...register("License_Num", { required: true })}
                              />
                              {errors.License_Num && (
                                <span className="text-red-500">
                                 Field is required
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="Type"
                              >
                                Type<span className="text-red-600">*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="eg. Car, Van, Safari, Minivan, etc"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                {...register("Type", { required: true })}
                              />
                              {errors.Type && (
                                <span className="text-red-500">
                                 Field is required
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="Plate_Num"
                              >
                                Plate Number
                                <span className="text-red-600">*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="BA 1 PA 1234, BA 2 KHA 1234, etc."
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                {...register("Plate_Num", { required: true })}
                              />
                              {errors.Plate_Num && (
                                <span className="text-red-500">
                                 Field is required
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm font-medium text-red-500 p-4">
                          *Note:- You need to verify your vehicle data including
                          image after registration.
                        </p>{" "}
                      </div>
                    )}
                  </>
                )}

                {/* Add more conditional forms based on categories here */}

                <button
                  className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
