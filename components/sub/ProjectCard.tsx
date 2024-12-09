import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
}

const ProjectCard = ({ src, title, description, url }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className=" absolute top-1 right-1 px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 z-20"
        style={{ pointerEvents: 'auto' }}>
          <GoArrowUpRight  size={26}/>
        Gör
      </a>
    </div>
  );
};

export default ProjectCard;
