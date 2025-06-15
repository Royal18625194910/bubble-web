

// Navbar Links

import { images } from "./images";


export const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Project",
    path: "#project",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];





export const projectsData = [
  {
    id: 1,
    title: "Bubble Bolt new",
    description: "Bubble Bolt new是一个强大的 AI 编程助手应用，它提供了智能代码生成、实时代码预览和 AI 对话等功能，帮助开发者提高编程效率。",
    image: images.bubbleBoltNewImg,
    tag: ["All", 'AI',"Web"],
    gitUrl: "https://github.com/Royal18625194910/bubble-code-new",
    previewUrl: "http://bubble-code-new.vercel.app/",
  },
  {
    id: 2,
    title: "Bubble AI Canva",
    description: "Bubble AI Canva 是一个现代化的在线设计平台，集成了强大的 AI 图片处理能力和专业的设计工具。通过直观的拖拽操作和智能的 AI 辅助功能，让设计创作变得简单高效。",
    image: images.bubbleCanvaAIImg,
    tag: ["All",'AI' ,"Web"],
    gitUrl: "https://github.com/Royal18625194910/bubble-canvas-ai",
    previewUrl: "https://bubble-canvas-ai.vercel.app/",
  },
  {
    id: 3,
    title: "Bubble AI Platform",
    description: "Bubble AI Platform 是一个 AI 集成平台，提供了多种 AI 工具和服务，包括语音识别、图像识别、文本生成等。",
    image: images.bubbleAiInterImg,
    tag: ["All", 'AI',"Web"],
    gitUrl: "https://github.com/Royal18625194910/Bubble-AI-Platform",
    previewUrl: "https://bubble-ai-platform.vercel.app/",
  },
  {
    id: 4,
    title: "AI Video App",
    description: "AI Video App是一个基于AI的视频应用,用户可以使用AI生成视频、编辑视频、分享视频等功能。",
    image: images.bubbleAIVideoImg,
    tag: ["All", "Mobile", "AI"],
    gitUrl: "https://github.com/Royal18625194910/Bubble-AI-Video-App",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Bubble Uber",
    description: "一个打车应用，可以预定打车，查看打车信息等功能。",
    image: images.bubbleUberImg,
    tag: ["All", "Web",'Mobile'],
    gitUrl: "https://gitee.com/lin92n/bubble_uber",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "智能灯",
    description: "一个智能灯应用，可以控制灯的亮度、色温等功能，记录用户使用时长统计，提供智能化的灯光环境。",
    image: images.eyeLightImg,
    tag: ["All", "Web","Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

export const achievementsList = [
  {
    metric: "Projects",
    value: projectsData.length,
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "999",
  },
  {
    metric: "Years",
    value: new Date().getFullYear() - 2023,
  },
];