import React from "react";
import { BsVectorPen, BsCodeSlash } from "react-icons/bs";
import { AiOutlineBug } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";

const services = [
  {
    title: "web design",
    icon: <BsVectorPen />,
  },
  {
    title: "web development",
    icon: <BsCodeSlash />,
  },
  {
    title: "Bug fixing",
    icon: <AiOutlineBug />,
  },
  {
    title: "Cyber Support",
    icon: <TbWorldWww />,
  },
];

const Services = () => {
  return (
    <div className="mt-6 md:mt-28">
      <h1 className="text-2xl font-bold mb-2 uppercase border-l-2 border-primary pl-3">
        Services
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="card min-w-[160px] max-w-[350px] bg-base-100 shadow-xl border-gray-500/20 hover:text-success hover:shadow-none duration-200 border"
          >
            <div className="card-body flex gap-3 flex-col justify-center items-center">
              <div className="text-4xl py-3 text-success">{service.icon}</div>
              <h2 className="text-lg font-semibold uppercase">
                {service.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
