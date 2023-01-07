import { AiFillLinkedin, AiFillMail, AiFillGithub } from "solid-icons/ai";
import { CONTACT, SOCIAL_MEDIA } from "../../data";

export const SocialMedia = () => {
  const linkAttributes = {
    target: "_blank",
    rel: "noopener noreferrer",
  };

  return (
    <div class="text-5xl flex justify-center gap-16 py-3 text-gray-600">
      <a href={SOCIAL_MEDIA.GITHUB} {...linkAttributes}>
        <AiFillGithub />
      </a>
      <a href={SOCIAL_MEDIA.LINKEDIN} {...linkAttributes}>
        <AiFillLinkedin />
      </a>
      <a href={`mailto: ${CONTACT.EMAIL}`}>
        <AiFillMail />
      </a>
    </div>
  );
};
