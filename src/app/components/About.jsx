import Image from "next/image";
import React from "react";
import { PERSONAL_DETAILS } from "../constant";

export default function About() {
  return (
    <div className="max-w-9/12 mx-auto py-5 flex gap-12 items-center justify-between mt-10 rounded-sm">
      <div className="text-primary">
        <h1 className="text-2xl">About</h1>
        <p className="text-justify pt-2">
          I'm Aarthi Tamilselvan, Senior Software Engineer at Ideas2IT
          Technologies, specializing in building scalable and user-focused web
          applications, with solid foundational experience in backend
          technologies such as Spring Boot and .NET.
        </p>
        <h2 className="pt-3 text-base">General Info</h2>
        <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-3 text-sm max-w-3/4 pt-2">
          {PERSONAL_DETAILS.map(({ label, value, type }) => (
            <React.Fragment key={label}>
              <span className="font-medium">{label}</span>
              {type === "email" ? (
                <a
                  href={`mailto:${value}`}
                  className="text-blue-600 hover:underline break-all"
                >
                  {value}
                </a>
              ) : type === "phone" ? (
                <a
                  href={`tel:${value}`}
                  className="text-blue-600 hover:underline"
                >
                  {value}
                </a>
              ) : (
                <span>{value}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <Image
        width={40}
        height={300}
        alt="line"
        src="/vertical_line.png"
      />
      <Image
        width={300}
        height={300}
        alt="My picture"
        src="/my_picture.jpg"
        className="rounded-xl"
      />
    </div>
  );
}
