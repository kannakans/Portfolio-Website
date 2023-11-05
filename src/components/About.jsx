import React from "react";
import { Profile } from "../assets";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdWifiCalling2 } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const About = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 lg:gap-20 lg:py-20 '>
      {/* <div className='w-full md:h-[290px] lg:w-1/3 flex flex-col items-center border border-gray-500 dark:bg-transparent rounded-md'>
        <img
          src={Profile}
          className='h-[290px] p-1 rounded-md ease-in-out duration-300 hover:scale-125'
        />
      </div> */}

      <div className='w-full flex flex-col'>
        <p className='text-3xl font-bold text-black dark:text-white  '>
          About Me
        </p>
        <p className='text-lg text-black dark:text-gray-400 leading-10'>
          I am a full stack developer with expertise in MERN. I have over one year of experience as a
          backend developer. As a dedicated and experienced backend developer with over one year of professional practice,
          I have demonstrated a solid foundation in designing, developing, and optimizing server-side solutions.
          My expertise encompasses backend technologies, database management, and creating robust APIs that power web applications.
        </p>

        <p
          className="text-lg text-black dark:text-gray-400 leading-10 mt-5"
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          I possess a strong command of programming languages and frameworks, and my practical knowledge extends to performance optimization, security, and data modeling.
          I have specialized knowledge in several key areas, including:
          <ul>
            <h4 className='text-3xl mt-5 text-black dark:text-white'>Development of Business Rule Engine:</h4> I was completely responsible for the development of code editor for the business rule Engine. The skills I have learned were tokenizing, Parsing and interpreting which is used for the development of various programming languages.
            <h4 className='text-3xl mt-5 text-black dark:text-white'>Message Queues with RabbitMQ:</h4> I have a deep understanding of RabbitMQ and its role in building asynchronous and distributed systems. I've leveraged message queuing to enhance application performance and scalability.
            <h4 className='text-3xl mt-5 text-black dark:text-white'>Redis for Caching and Data Storage:</h4> I am proficient in utilizing Redis as an in-memory data store and caching mechanism. This skill has enabled me to enhance data retrieval and application response times.
            <h4 className='text-3xl mt-5 text-black dark:text-white'>Encryption and Security:</h4> I have a good understanding in data encryption techniques, ensuring data security and privacy. My commitment to best practices in encryption safeguards sensitive information.
            <h4 className='text-3xl mt-5 text-black dark:text-white'>Schedulers and Task Automation:</h4>I have hands-on experience with schedulers and task automation, allowing me to streamline and optimize repetitive backend processes.
            <h4 className='text-3xl mt-5 text-black dark:text-white'>System Integration:</h4>I excel in integrating diverse systems and APIs to ensure seamless communication between components. My expertise in system integration has led to the creation of efficient, cohesive, and feature-rich web applications.
          </ul>

        </p>

        <div
          className='mt-5 2xl:mt-10 flex flex-wrap gap-5'
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <FaUserAlt size={14} /> Kannan Mariappan
          </p>
          <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <MdOutlineAlternateEmail size={14} /> 8232kans90@gmail.com
          </p>
          <a
            href='https://wa.me/+11 234 567 897'
            className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'
          >
            <BsWhatsapp size={14} /> +91 9944808329
          </a>
          <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <MdWifiCalling2 size={14} /> +91 9944808329
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
