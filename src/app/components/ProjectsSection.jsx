"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Founder of BillZo",
    description: "A mobile-first invoicing software that enables businesses to generate invoices, manage orders, and print receipts directly from their phones.",
    image: "/images/project_1.jpg",
    tag: ["All Projects", "Client's Projects"],
    gitUrl: "https://github.com/neeraj1264/demo_billing_software",
    previewUrl: "https://demo-billing-software.vercel.app/",
  },
  {
    id: 2,
    title: "School Management System",
    description: "Developed food ordering platforms for multiple restaurants, helping businesses streamline online orders.",
    image: "/images/project_2.png",
    tag: ["All Projects", "Client's Projects"],
    gitUrl: "https://github.com/neeraj1264/gmsfrontend",
    previewUrl: "https://gmsfrontend.vercel.app/",
  },
  {
    id: 3,
    title: "food ordering platforms",
    description: "Developed food ordering platforms for multiple restaurants, helping businesses streamline online orders.",
    image: "/images/project_3.png",
    tag: ["All Projects", "Client's Projects"],
    gitUrl: "https://github.com/neeraj1264/foodieshub3.0",
    previewUrl: "https://foodieshub3-0.vercel.app/",
  },
  {
    id: 4,
    title: "Weather Prediction App",
    description: "A sleek and responsive static weather web application that displays real-time weather data for any city using OpenWeatherMap API. Designed with modern UI elements, this app provides temperature, humidity, weather conditions, and wind speed with intuitive visuals. Built for fast performance and ease of access, it’s a perfect demonstration of API integration in a front-end environment without a backend.",
    image: "/images/project_4.png",
    tag: ["All Projects", "Hobby Projects"],
    gitUrl: "https://github.com/neeraj1264/WeatherApp",
    previewUrl: "https://neeraj1264.github.io/WeatherApp/",
  },
  {
    id: 5,
    title: "Github User Finder",
    description: "An interactive web app that allows users to search for any GitHub profile by username. It fetches real-time data using the GitHub API and displays user information such as avatar, bio, repositories, followers, and more in a clean, user-friendly layout. Ideal for exploring developer profiles and learning API integration with modern UI design.",
    image: "/images/project_5.png",
    tag: ["All Projects", "Hobby Projects"],
    gitUrl: "https://github.com/neeraj1264/github-user-finderr",
    previewUrl: "https://neeraj1264.github.io/github-user-finderr/",
  },
  {
    id: 6,
    title: "QR Code Generator",
    description: "A simple yet powerful QR Code Generator web app that lets you instantly create QR codes for URLs, text, and more. Users can customize QR colors, background colors, and size to match their brand or style. The app also includes a one-click download option, allowing users to save their QR codes as high-quality images for use in print or digital media.",
    image: "/images/project_6.png",
    tag: ["All Projects", "Hobby Projects"],
    gitUrl: "https://github.com/neeraj1264/QR-Code-Generator-main",
    previewUrl: "https://neeraj1264.github.io/QR-Code-Generator-main/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All Projects");
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
      <div className="text-white flex flex-row justify-center items-center gap-1 py-6">
        <ProjectTag 
          onClick={handleTagChange}
          name="All Projects"
          isSelected={tag === "All Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Client's Projects"
          isSelected={tag === "Client's Projects"}
        />   
        <ProjectTag
          onClick={handleTagChange}
          name="Hobby Projects"
          isSelected={tag === "Hobby Projects"}
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