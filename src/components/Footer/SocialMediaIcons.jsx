import SocialIcon from "./SocialIcon";

const SocialMediaIcons = () => {
  return (
    <div className="flex flex-col items-center gap-y-6 ">
      <div className="flex items-center justify-center gap-x-5">
        <SocialIcon img={"https://i.ibb.co.com/CbqYbVV/Vector-3.png"} />
        <SocialIcon img={"https://i.ibb.co.com/H2VkrVW/Vector-4.png"} />
        <SocialIcon img={"https://i.ibb.co.com/BtRRQf8/Vector-5.png"} />
        <SocialIcon img={"https://i.ibb.co.com/nkt6ynC/Vector-6.png"} />
      </div>

      <h1 className="font-roboto text-xl font-normal text-white">
        © 2023 All Rights Reserved{" "}
      </h1>
    </div>
  );
};

export default SocialMediaIcons;
