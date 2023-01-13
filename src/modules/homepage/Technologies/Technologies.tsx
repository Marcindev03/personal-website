import { TECHNOLOGIES } from "../../data";
import { TechnologyCard } from "./TechnologyCard";

export const Technologies = () => {
  return (
    <section>
      <h3 class="text-3xl py-1">Technologies</h3>

      {TECHNOLOGIES.map(({ label, content }) => (
        <TechnologyCard label={label} content={content} />
      ))}
    </section>
  );
};
