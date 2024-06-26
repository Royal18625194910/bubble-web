'use client'
import GithubIcon from "../../public/github-icon.svg";
import JuejinIcon from "../../public/juejin.svg";
import GiteeIcon from "../../public/gitee.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Submitted", e.target.email.value);
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(data),
    });
    console.log("res", res);
    if (res.ok) {
      console.log("email submited!");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md" id='email'>
          {" "}
          我目前正处于寻找新机遇的阶段，我的邮箱始终为你敞开，也可以添加我的vx:Bubble2023955。无论你是有疑问想要咨询，还是只是单纯地想要打个招呼，我都会竭尽所能地给予回复。期待与你的交流，共同开启新的篇章！
        </p>
        <div className="socials flex flex-row gap-3 flex-wrap">
          {/* github */}
          <Link
            className="flex w-12 h-12 overflow-hidden"
            target="_blank"
            href="https://github.com/Royal18625194910"
          >
            <Image width={50} height={50} src={GithubIcon} alt="Github Icon" />
          </Link>
          {/* 掘金 */}
          <Link
            className="flex w-12 h-12 overflow-hidden"
            target="_blank"
            href="https://juejin.cn/user/774515080307799"
          >
            <Image width={50} height={50} src={JuejinIcon} alt="Juejin Icon" />
          </Link>
          {/* 微信 */}
          <Link
            className="flex w-12 h-12 overflow-hidden"
            target="_blank"
            href="https://gitee.com/lin92n"
          >
            <Image
              width={50}
              height={50}
              className="rounded-full"
              src={GiteeIcon}
              alt="Weixin Icon"
            />
          </Link>
        </div>
        {/* 微信二维码 */}
        <div className="mt-14 ml-1">
          <Image
            width={200}
            height={200}
            src="/wx-qrcode.png"
            alt="微信二维码"
          />
        </div>
      </div>
      <div>
        {/*若发送邮件成功则显示*/}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          {/*名字*/}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="阁下怎么称呼?"
            />
          </div>
          {/*邮箱*/}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="顺便告诉我你的邮箱吧"
            />
          </div>
          {/*主题*/}
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="填写主题更有利于我快速查看"
            />
          </div>
          {/*消息*/}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="现在你可以详细的描述你想说的"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-slate-200 hover:text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            发送邮件
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;