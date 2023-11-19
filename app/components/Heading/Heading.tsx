import type { FC, PropsWithChildren } from "react";

const Heading: FC<PropsWithChildren<{}>> = ({ children }) => (
    <div className="font-bold text-2xl">{children}</div>
);

export default Heading;
