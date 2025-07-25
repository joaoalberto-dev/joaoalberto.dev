import { Header } from "@/core/components/header/header";
import { Section } from "@/core/components/section/section";
import type { Metadata } from "next";

const content = [
  {
    title: "Don't get blocked",
    description:
      "Learn to unblock yourself no matter what, by making a decision, by asking for help fast, by not trying to be perfectionist.",
  },

  {
    title: "Don't block others",
    description:
      "Make information public, DMs are the enemy. Ensure everything is properly documented; this can help people to make decisions without even needing to contact you.",
  },

  {
    title: "Give it five minutes",
    description:
      "Sometimes you just need a small break before giving your opinion, thats fine. Not everything should be instantaneous.",
  },

  {
    title: "Learn to make decisions",
    description:
      "Soon or later you will need to make decisions, alone or in group, with or without pressure, when this happesn, it’s important to have context enough to make the right decision (Sometimes you will make the wrong decision and this is fine, if you learn with it)",
  },

  {
    title:
      "Be a scout, leave the place you are in better than when you arrived",
    description:
      "This applies to everything; your code, your docs, your desk. Make it better than when you arrived.",
  },

  {
    title: "No abstraction is better than the wrong abstraction",
    description:
      "Not everthing should be abstracted, it’s fine to have two functions that look the same if you don’t know where to put it yet.",
  },

  {
    title: "Be present",
    description:
      "If you are in a meeting, one of the worst things you can do is not paying enough attention, this will waste everyone’s time, put your phone in silence mode, ignore that slack message for a few minutes, it’s ok.",
  },

  {
    title: "Listen your data",
    description:
      "In all my years of software development this happened countless times, you ask your user for feedback and they answer “I prefer X” but then you look at your data and the user is actually doing Y, they are not lying, they just maybe don’t know what they want yet.",
  },

  {
    title: "Software is meant to be fast. Play like a champion.",
    description:
      "Known your data sctructures and algorithms and learn to optimize them, if you are working with one hundred items maybe it’s fine to brute force the solution sometimes, but make sure you undestand the consequences and how to deal with them.",
  },
];

export const metadata: Metadata = {
  title: "João Alberto | Tips for software engineers",
  description: "A list of good practices for software engineers",
};

export default function Post() {
  return (
    <main className="flex flex-col gap-y-16 max-w-[420px] mx-auto">
      <Header
        title="Tips for software engineers"
        description="This is a list of some thoughts I collected over the years about how to be a good software engineer."
      />
      {content.map((c) => (
        <Section key={c.title} title={c.title}>
          <p className="opacity-50 font-serif leading-5">{c.description}</p>
        </Section>
      ))}
    </main>
  );
}
