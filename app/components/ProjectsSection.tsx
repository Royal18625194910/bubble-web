"use client"
// 项目列表数据
import ProjectCard from "@/app/components/ProjectCard";
import ProjectTag from "@/app/components/ProjectTag";
import { projectsData } from "@/constants/data";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const liRef = useRef(null);
  const isInView = useInView(liRef, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const filteredProjects = projectsData.filter((item) =>
    item.tag.includes(tag)
  );

  return (
    <div id="project">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex justify-center items-center gap-2 py-6">
        <ProjectTag
          name="All"
          onClick={() => setTag("All")}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={() => setTag("Web")}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={() => setTag("Mobile")}
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={liRef} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((item, index) => (
          <motion.li
            key={item.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard
              title={item.title}
              description={item.description}
              imgUrl={item.image}
              gitUrl={item.gitUrl}
              previewUrl={item.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;