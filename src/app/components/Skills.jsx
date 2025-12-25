import Image from "next/image";
import { SKILLS } from "../constant";

export default function Skills() {
  return (
    <div className="flex gap-10 flex-col justify-center items-center text-primary">
      <h2 className="text-4xl">My Skills</h2>
      <div className="grid grid-cols-5 grid-rows-2 gap-5 max-w-5/6 mx-0">
        {SKILLS.map((skill) => {
          return (
            <div
              key={skill.id}
              className="p-4 flex flex-col justify-center items-center gap-4"
            >
              <Image
                src={skill.img}
                width={60}
                height={60}
                alt={`${skill?.name} logo`}
              />
              {skill.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
