import type { FC, PropsWithChildren } from "react";

const Subheading: FC<PropsWithChildren<{}>> = ({ children }) => (
  <div className="text-xsm">{children}</div>
);

export default Subheading;
