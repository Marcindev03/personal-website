import { Heading } from "../../common";

export const ContactForm = () => {
  const labelFormStyles = "block mb-2";

  return (
    <section id="contact">
      <div class=" lg:py-16 max-w-screen-md pb-4">
        <Heading>Contact me!</Heading>
        <p class="text-md py-4 leading-8 text-gray-800">
          Are you interested with my work? Maybee you want to ask for somehting
          ? Do you want to talk with me ? Leave me your email below and I will
          respond as soon as I can
        </p>
        <form action="#" class="space-y-8">
          <div>
            <label for="email" class={labelFormStyles}>
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Type your email"
              required
            />
          </div>
          <div>
            <label for="subject" class={labelFormStyles}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let me know what are you intereseted"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label for="message" class={labelFormStyles}>
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a message..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-teal-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};
