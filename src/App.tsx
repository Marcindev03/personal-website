import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import { BsMoonStarsFill } from "solid-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "solid-icons/ai";

const App: Component = () => {
  const [darkMode, setDarkMode] = createSignal(false);

  const paragraphStyle = "text-gray-800 py-1";

  const handleDarkModeToogle = () => setDarkMode((prevMode) => !prevMode);

  return (
    <main class={`bg-white px-10 ${darkMode() ? "dark" : ""}`}>
      <section class=" min-h-screen">
        <nav class="py-10 mb-12 flex justify-between">
          <h1 class="text-xl">Developedbyed</h1>
          <ul class="flex items-center">
            <li>
              <BsMoonStarsFill
                onClick={handleDarkModeToogle}
                class="cursor-pointer text-2xl"
              />
            </li>
            <li>
              <a
                class="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div class="text-center p-10">
          <h2 class="text-5xl py-2 text-teal-600 font-medium">Dimitri Marco</h2>
          <h3 class="text-2xl py-2">Developer and designer</h3>
          <p class="text-md py-5 leading-8 text-gray-800">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae eum
            consectetur officia quaerat voluptatibus, vitae quidem! Voluptatem
            atque odio quibusdam itaque inventore soluta mollitia eos, nesciunt
            perspiciatis commodi amet blanditiis!
          </p>
        </div>
        <div class="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        <div class="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20">
          <img src="/dev-ed-wave.png" />
        </div>
      </section>

      <section>
        <div>
          <h3 class="text-3xl py-1">Services I offer</h3>
          <p class="text-md py-2 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            quasi. Voluptas aspernatur maiores sunt iure perspiciatis
            necessitatibus quas? Repellat placeat porro accusamus delectus
            recusandae dolor commodi minus blanditiis earum magni.
          </p>
        </div>
        <div>
          <div class="text-center shadow-lg p-10 rounded-xl my-10">
            <img src="/design.png" alt="" />
            <h3 class="text-lg font-medium pt-8 pb-2">Beautiful designs</h3>
            <p class="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              adipisci animi illum vitae perspiciatis molestias sit ratione.
              Aliquam, numquam delectus facere eos maiores nulla omnis esse
              voluptas consequuntur, ab inventore!
            </p>
            <h4 class="py-4 text-teal-600">Design tools I use</h4>
            <p class={paragraphStyle}>Photoshop</p>
            <p class={paragraphStyle}>Figma</p>
            <p class={paragraphStyle}>Illustator</p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3 class="text-3xl py-1">Portfolio</h3>
          <p class="text-md py-2 leading-8 text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus rem consectetur provident a repudiandae amet veniam ex
            alias exercitationem, ratione dolorum voluptatum. Molestiae
            consequatur perspiciatis labore illum nobis tenetur nostrum.
          </p>
        </div>
        <div class="flex flex-col gap-10 py-10">
          <div>
            <img src="/web1.png" alt="" class="rounded-lg" />
          </div>
          <div>
            <img src="/web2.png" alt="" class="rounded-lg" />
          </div>
          <div>
            <img src="/web3.png" alt="" class="rounded-lg" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
