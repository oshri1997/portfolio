"use client";
import Image from "next/image";

const ProjectCard = ({ imgSrc, projectName, mainTech, projectUrl, githubUrl }) => {
  return (
    <div
      className={`group relative mx-auto flex h-auto w-[95%] items-center justify-center rounded-xl from-bluep to-blueLight p-4 shadow-2xl  shadow-blue-500/20 duration-200 ease-in-out   hover:bg-gradient-to-r md:w-full `}
    >
      <Image
        className="rounded-xl object-cover  duration-200 ease-in-out hover:scale-[1.02] group-hover:opacity-10"
        src={imgSrc}
        alt="property"
        width={800}
        height={700}
      />
      <div className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%]  group-hover:block">
        <h3 className="text-center text-lg tracking-wider text-white md:text-2xl">
          {projectName}
        </h3>
        <p className="pb-4 pt-2 text-center text-sm text-white md:text-base">{mainTech}</p>
        <a href={projectUrl}>
          <p className="center mx-auto mb-2 w-[150px] cursor-pointer rounded-lg bg-white py-2 text-center text-sm font-bold text-gray-700 hover:bg-slate-200 md:text-lg">
            Demo
          </p>
        </a>
        <a href={githubUrl}>
          <p className="center mx-auto w-[150px] cursor-pointer rounded-lg bg-gray-600 py-2 text-center  text-sm font-bold text-gray-200 hover:bg-gray-700  md:text-lg">
            Repo
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
