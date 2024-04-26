'use client'
import Image from "next/image";
import TabButton from "@/app/components/TabButton";
import { useState, useTransition} from "react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>HTML、CSS、JavaScript</li>
        <li>TypeScript、TailwindCSS</li>
        <li>NextJS、Vue、React、Zustand</li>
        <li>NestJS、Prisma、TypeORM</li>
        <li>MySQL、MongoDB</li>
        <li>. . . </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li>使用NextJs+Clerk+Stripe+Prisma搭建Bubble AI集成平台</li>
        <li>使用NestJS+TypeORM+Mysql进行RBAC权限管理</li>
        <li>. . . </li>
      </ul>
    ),
  },
  {
    title: "Education and Honor",
    id: "education",
    content: (
      <ul>
        <li>23届本科毕业生</li>
        <li>华为云大前端计划"优秀学员"</li>
        <li>工信部高级前端工程师证书</li>
        <li>21年蓝桥杯Web省二等奖</li>
        <li>20年蓝桥杯Python省三等奖</li>
        <li>. . . </li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <div className="h-full">
          <Image
            src={"/images/about-image.png"}
            alt="about"
            width={500}
            height={500}
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <pre className="text-xs lg:text-lg text-gray-200 whitespace-normal">
            大家好，我是一名全栈开发者，热衷于技术探索和应用开发。我的技术栈涵盖了前端、后端和数据库等多个方面。
            在前端，我熟悉Vue和React框架，能够构建出交互丰富的应用界面。同时，我也善于使用Tailwind
            CSS来编写美观且响应式的样式。
            在后端，我掌握Node.js的开发环境，并熟练使用Next.js和NestJS这两个强大的框架，实现前后端一体化的开发。
            数据库方面，我擅长使用MySQL和MongoDB，能够处理大规模数据和复杂的数据结构，并用prisma来简化数据库操作。
            我注重团队协作，相信一个优秀的团队能够激发出更多的潜力和创造力。我会不断学习和提升自己的技能，为大家带来更有价值的内容。
          </pre>
          {/* 其他方面 */}
          {/* tab 栏*/}
          <div className="flex mt-8 justify-start">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          {/* tab 内容 */}
          <div className="mt-5">
            {TAB_DATA.find((item) => item.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;