import React from "react";
import StackCard from "./StackCard";
import { SKILLS } from "../data/skills";
import Tech from "./Tech";

const Stack = () => {
  return (
    <section id="stack" className="md:h-screen py-16 md:py-28 px-6">
      <div className="container mx-auto max-w-6xl">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-rubik-distressed text-start mb-4">
            My Stacks
          </h1>
        </div>
        <div className="mb-8">
          <p>
            Passionate about continuously exploring and mastering modern design
            trends and techniques.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {SKILLS.map((skill, index) => (
            <StackCard
              key={index}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
            />
          ))}
        </div>
        <div className="w-full">
        <div>
          <h1 className="text-xl md:text-2xl font-bold font-rubik-distressed text-start mb-2">
          A Few Tech Utilities I Used
          </h1>
        </div>
          <Tech />
        </div>
      </div>
    </section>
  );
};

export default Stack;
