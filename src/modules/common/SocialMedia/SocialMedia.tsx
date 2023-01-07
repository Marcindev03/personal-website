import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "solid-icons/ai";

export const SocialMedia = () => {
  return (
    <div class="text-5xl flex justify-center gap-16 py-3 text-gray-600">
      <AiFillTwitterCircle />
      <AiFillLinkedin />
      <AiFillYoutube />
    </div>
  );
};
