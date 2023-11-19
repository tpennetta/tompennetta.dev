import type { FC, PropsWithChildren } from "react";

export type Props = {
  to: string;
  target?: React.HTMLAttributeAnchorTarget;
  className?: string;
};

const Link: FC<PropsWithChildren<Props & JSX.IntrinsicElements["a"]>> = ({
  children,
  className,
  to,
  target = "_blank",
  ...props
}) => {
  return (
    <a className={className} href={to} target={target} {...props}>
      {children}
    </a>
  );
};

export default Link;
