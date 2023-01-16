import { For } from "solid-js";
import { Heading } from "../../common";
import { TECHNOLOGIES } from "../../data";
import { TechnologyCard } from "./TechnologyCard";

export const Technologies = () => {
  return (
    <section>
      <Heading>Technologies</Heading>

      <For each={TECHNOLOGIES}>
        {({ label, content }) => (
          <TechnologyCard label={label} content={content} />
        )}
      </For>
    </section>
  );
};
