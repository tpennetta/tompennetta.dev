import type { FC } from "react";

type Props = {
  src: string;
  alt: string;
};

const Avatar: FC<Props> = ({ src, alt }) => {
  return (
    <img
      className={[
        "w-1/2 m-4",
        "rounded-full", // Circular avatar
        "border-2 border-gray-900 border-solid",
        "bg-gradient-to-b from-gray-900 to-[#3A4243] bg-opacity-50",
        "md:w-36",
        "dark:border-gray-100",
      ].join(" ")}
      src={src}
      alt={alt}
    />
  );
};

export default Avatar;
