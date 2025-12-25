import Image from "next/image";
import { PROJECTS } from "./constant";
import { SKILLS_MAP } from "./constant";

export default function Projects() {
  return (
    <div className="px-8 pt-6 grid grid-cols-3 grid-rows-2 gap-6 text-primary">
      {PROJECTS.map((project) => {
        return (
          <div
            className={`border p-3 rounded-xl border-gray-200 flex flex-col shadow-lg
            ${project.id === PROJECTS.length - 1 && "col-span-2"}`}
            key={project.id}
          >
            {project.title}
            <p className="text-sm pt-2">{project.description}</p>
            <div className="flex gap-3 mt-auto pb-2">
              {project.skills.map((skill) => {
                return (
                  <span
                    key={skill}
                    className="pt-2 border rounded-full p-2 border-primary/5 shadow-md"
                  >
                    <Image
                      width={22}
                      height={22}
                      src={SKILLS_MAP[skill.toLowerCase()]}
                      alt="skill logo"
                    />
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
