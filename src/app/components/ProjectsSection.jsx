"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Rishabh Portfolio Website",
    description: "This is my portfolio website. It is built using Next.js, Tailwind CSS, Framer-Motion. It has a fully responsive design. It has a contact form which can be used to send me an email without using needing to login to your gmail. For this, I have used Nodemailer.",
    image: "/images/projects/1.png",
    tag: ["All", "Next.js", "React.js"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Pokezone App",
    description: "It is an interactive map for a Pokemon game. It fetches the data stored in multiple JSON files using JavaScript Fetch API and displays it using HTML and CSS based on user input. It is coded using HTML, CSS, JavaScript, and Sass.",
    image: "/images/projects/2.png",
    tag: ["All"],
    gitUrl: "https://github.com/Rishu3010/PokeZone",
    previewUrl: "https://pokezone.onrender.com/",
  },
  {
    id: 3,
    title: "Image Conversion/Compression Website",
    description: "This is a web application to process images and change their format. For eg. JPEG to PNG. It also has the option to compress the images to reduce their size. This is coded using HTML, CSS, JavaScript, and Bootstrap",
    image: "/images/projects/3.png",
    tag: ["All"],
    gitUrl: "https://github.com/Rishu3010/Image-Converter/",
    previewUrl: "https://rishuimgconverter.netlify.app/",
  },
  {
    id: 4,
    title: "Video Streaming Platform",
    description: "This is a Decentralized Video Streaming Platfrom designed to share and watch videos seamlessly. It is decentralised, i.e., the videos are not stored on a central server. It is built using React.js, and Solidity. It uses IPFS for storing the videos. It runs on the Ethereum Blockchain.",  
    image: "/images/projects/4.png",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/Rishu3010/DecentralizedVideoStreaming/",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next.js"
          isSelected={tag === "Next.js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React.js"
          isSelected={tag === "React.js"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
