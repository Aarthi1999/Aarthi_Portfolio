import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-between p-4 text-white px-8 py-4 pt-20 w-full flex-col lg:flex-row md:flex-col">
      <div id="mobile-menu" className="self-start md:hidden lg:hidden"></div>

      <div className="flex-1 grid gap-4">
        <h1 className=" text-3xl sm:text-5xl md:text-6xl lg:text-8xl">
          {"Welcome.".split("").map((letter, i) => (
            <span
              key={i}
              className="inline-block animate-wave-once"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>
        <p className="text-sm sm:text-md md:text-base lg:text-base">
          I’m <b>Aarthi Tamilselvan</b>, an accomplished React Developer with
          over four years of experience building dynamic, user-focused web
          applications using React, Redux, and TypeScript. I also have
          foundational experience with Java (Spring Boot) and .NET. I’m known
          for adapting quickly to new technologies and delivering efficient,
          user-centric, and AI-enhanced solutions.
        </p>
      </div>
      <div className="relative w-75 h-75 sm:w-87.5 sm:h-87.5 md:w-100 md:h-100 lg:w-125 lg:h-125 mask-radial">
        <Image
          src="/computer.jpg"
          alt="Laptop Setup"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
