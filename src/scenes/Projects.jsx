"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Divider from "../components/Divider";

const projects = [
  {
    title: "Scratcho App",
    subtitle:
      "A mobile application connecting Kenyan basketball fans, teams, and players with community features.",
    img: "/image/scratcho-app.jpg",
    link: "https://scracho-africa.vercel.app/",
    stack: ["React Native", "Expo", "Django"],
  },
  {
    title: "Nat-Mobile UI",
    subtitle:
      "National Bank mobile UI improvement showcasing digital banking, transfers, and transaction history.",
    img: "/image/super-wallet.jpg",
    link: "https://github.com/asino-nelson/nbk",
    stack: ["React Native", "Mobile UI"],
  },
  {
    title: "Vatise Enterprise",
    subtitle:
      "A construction company platform linking customers directly to engineers.",
    img: "/image/vatise-enterprise.jpg",
    link: "https://vatisenel.netlify.app/",
    stack: ["React", "Tailwind"],
  },
  {
    title: "Startup Hub",
    subtitle:
      "A platform connecting startup founders to entrepreneurs and innovators.",
    img: "/image/startup-hub.jpg",
    link: "https://startup-hub-io.vercel.app",
    stack: ["React", "Sanity.io", "Tailwind"],
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="cursor-pointer bg-white/10 shadow-md rounded-sm overflow-hidden hover:shadow-xl transition"
    >
      <img src={project.img} className="h-48 w-full object-cover" />

      <div className="p-4">
        <h3 className="text-lg font-medium">{project.title}</h3>
        <p className="text-slate-400 text-sm mt-1">{project.subtitle}</p>

        <button className="mt-4 text-sm">
          <a
            href={project.link}
            className="bg-green-600 px-4 py-2 rounded-sm hover:bg-green-700"
          >
            Visit Project
          </a>
        </button>
      </div>
    </motion.div>
  );
};

export default function Projects() {

  return (
    <section id="projects" className="py-28">
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          <span className="text-green-500">PRO</span>JECTS
        </h2>
        <div className="flex justify-center mt-3">
          <Divider width="w-1/3" />
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((p, index) => (
          <ProjectCard
            key={index}
            project={p}
          />
        ))}
      </div>

    </section>
  );
}
