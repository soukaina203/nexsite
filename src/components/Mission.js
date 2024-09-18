import React from 'react';
import { FaLaptop } from 'react-icons/fa6';

function Mission() {
    let sections = [
        { icon: <FaLaptop className='text-white w-[5rem] h-[5rem]' />, background: '#35767A', color: 'white', title: 'Design', desc: 'From sketches To Wireframes To designing Beautiful interfaces' },
        { icon: <FaLaptop className='text-white w-[5rem] h-[5rem]' />, background: '#418787', color: 'white', title: 'Development', desc: 'Developing The solution from scratch using modern frameworks and techs' },
        { icon: <FaLaptop className='w-[5rem] h-[5rem]' />, background: '#EEF1F0', color: 'black', title: 'Deployment', desc: 'Deploying the website on a server, with the domain name' },
    ];

    return (
        <div>
            <section data-animation="animate-slide-right" className="section relative pt-20 pb-12 bg-white z-40 lg:pt-[120px] lg:pb-[90px]">
                <h1 className='text-center text-xl md:text-3xl lg:text-4xl mb-14 font-medium'>Our Mission</h1>
                <div className="container mx-auto bg-white">
                    <div className="flex flex-wrap items-center justify-center -mx-4">
                        <div className="w-full px-4 lg:w-4/12 animate-fade-left animate-delay-400 animate-once">
                            <img src='Mission.png' className='p-3 md:p-0' alt='Mission' />
                        </div>

                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12 animate-fade-left animate-delay-400 animate-once">
                            <div className="p-5 mt-10 lg:mt-0 lg:ml-4 flex gap-3 flex-col">
                                {sections.map((element, index) => {
                                    return (
                                        <div
                                            key={element.background}
                                            className='flex text-left gap-[2rem] w-full h-[11rem] justify-start items-center pl-[4rem] rounded-2xl'
                                            style={{ backgroundColor: element.background }} // Apply background color
                                        >
                                            {element.icon}
                                            <div className='flex flex-col' style={{ color: element.color }}> {/* Apply text color */}
                                                <h1 className='text-3xl font-semibold'>{element.title}</h1>
                                                <p className='text-xl font-normal max-w-2xl'>{element.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Mission;
