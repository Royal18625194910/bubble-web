'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-12">
        {/* 左侧描述 */}
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 sm:text-5xl text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-secondary-500">
              Hello,I'm
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Bubble",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "一名AI+全栈开发",
                1000,
                "目前在AI应用领域探索",
                1000,
                "欢迎合作",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="mt-2"
            />
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg mb-6">
            嗨！我是Bubble，一名前端工程师，学习时长两年半。致力于创造出色的网站和应用程序，欢迎来到我的个人网站，希望你喜欢!
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500  to-secondary-500 hover:bg-slate-100 text-white">
              <a href="#email">Hire Me</a>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 mt-3 bg-transparent hover:bg-slate-800 transition-colors text-white ">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        {/* 右侧头像 */}
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[360px] lg:h-[360px] relative">
            <Image
              src="/images/profile1.png"
              width={350}
              height={350}
              alt="bubble-avatar"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 align-baseline rounded-b-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
