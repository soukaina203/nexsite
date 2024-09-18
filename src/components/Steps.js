import React from 'react'
import { FaRegChartBar } from "react-icons/fa6";

function Steps() {
    let steps=[
        {icon:<FaRegChartBar className=' w-[4rem] h-[4rem]' />,title:'Professional process'},
        {icon:<FaRegChartBar className=' w-[4rem] h-[4rem]' />,title:'Delivering In Deadlines'},
        {icon:<FaRegChartBar className=' w-[4rem] h-[4rem]' />,title:'Keep You Updates'},
        {icon:<FaRegChartBar className=' w-[4rem] h-[4rem]' />,title:'Validate The Work in each step'},
    ]
  return (
    <div>
    <div className="relative w-full h-full">
    <img src="steps.png" alt="" className="object-cover w-full h-full" />
    <h1 className="absolute inset-0 flex items-center justify-center  ml-auto mr-auto text-7xl max-w-4xl text-center font-bold text-[#EEF1F0]">
        Because Your Satisfaction Is Our Priority
    </h1>
</div>


      <section className="flex items-center justify-center w-full h-full py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((property) => (
          <div key={property.title} className="flex flex-col hover:-translate-y-1n hover:shadow-xl p-6 bg-[#EEF1F0] border-2 rounded-md  
          transition-all hover:scale-110  cursor-pointer  duration-300  w-[17rem] h-[16rem]
           translate-y-[-70%] transform  shadow-lg">
            <div className="flex-shrink-0 p-4 gap-3">
              {property.icon}
            </div>
              <h2 className="text-left max-w-xl  font-semibold text-2xl text-[#2A656D] ">{property.title}</h2>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Steps
