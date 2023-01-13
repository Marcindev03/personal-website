import { Component, For } from "solid-js";

type TechnologyCardProps = {
  label: string;
  content: string[];
};

export const TechnologyCard: Component<TechnologyCardProps> = ({
  label,
  content,
}) => {
  const paragraphStyle = "text-gray-800 py-1";

  return (
    <div class="text-center shadow-lg p-10 rounded-xl my-10">
      <img src="/design.png" alt="" />
      <h3 class="text-lg font-medium pt-8 pb-2">{label}</h3>

      <For each={content}>{(item) => <p class={paragraphStyle}>{item}</p>}</For>
    </div>
  );
};
