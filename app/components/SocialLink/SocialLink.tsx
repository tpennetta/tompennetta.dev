import type { FC } from "react";
import { Github, Linkedin, Twitter } from "../Icon/Icon";
import Link from "../Link/Link";

type SocialPlatform = "github" | "linkedin" | "twitter";
type Props = {
  href: string;
  platform: SocialPlatform;
  label?: string;
  target?: React.HTMLAttributeAnchorTarget;
};

const returnIcon = (platform: SocialPlatform) => {
  if (platform === "github") {
    return <Github />;
  }
  if (platform === "linkedin") {
    return <Linkedin />;
  }
  if (platform === "twitter") {
    return <Twitter />;
  }
};

const SocialLink: FC<Props> = ({
  href,
  platform,
  label = href,
  target = "_blank",
}) => {
  return (
    <div className="flex my-1 first:mt-2 last:mb-2">
      {/* This is a <svg> tag wrapper */}
      {returnIcon(platform)}
      {/* This is an anchor <a> tag wrapper */}
      <Link className="text-xs font-light ml-2" target={target} to={href}>
        {label}
      </Link>
    </div>
  );
};

export default SocialLink;
