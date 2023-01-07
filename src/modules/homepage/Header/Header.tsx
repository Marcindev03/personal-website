import { SocialMedia } from "../../common";

export const Header = () => {
  return (
    <header class="min-h-screen flex flex-col justify-between py-14">
      <div class="text-center">
        <h2 class="text-5xl py-2 text-teal-600 font-medium">Marcin Sacha</h2>
        <h3 class="text-xl py-2 text-gray-600">
          Front-end focused Full-stack developer
        </h3>
      </div>
      <p class="leading-10 text-xl text-center text-gray-700">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
        asperiores distinctio aliquam minus nostrum at eligendi maiores ea, odio
        earum corrupti libero, consequuntur, cumque eum laudantium. Aut neque
        alias quos!
      </p>
      <SocialMedia />
    </header>
  );
};
