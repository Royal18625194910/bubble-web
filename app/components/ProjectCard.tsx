import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  imgUrl = "",
  title = "",
  description = "",
  gitUrl = "",
  previewUrl = "",
}) => {
  return (
    <div>
      {/*项目背景图*/}
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
        }}>
        <Image
          src={imgUrl}
          alt={title}
          width={500}
          height={500}
          className="w-full h-52 object-contain"
        />
        {/*遮罩层*/}
        <div className="overlay justify-center items-center absolute w-full h-full left-0 top-0 bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-300">
          <Link
            href={gitUrl}
            className="mr-4 flex justify-center items-center w-14 h-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link text-center">
            <CodeBracketIcon className="w-10 h-10 text-[#adb7be] cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="flex justify-center items-center w-14 h-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link text-center">
            <EyeIcon className="w-10 h-10 text-[#adb7be] cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      {/* 相关信息 */}
      <div className="text-white mt-2 rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#adb7be]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
