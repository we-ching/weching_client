import React from "react";
import { iconName, IconSet } from "./constants";

interface IconProps {
    icon: iconName;
    size: number;
    color?: any;
}

const Icon = ({ icon, size, color }: IconProps) => (
    <svg
		height={size}
		viewBox={IconSet[icon].viewBox}
		fill={color}
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d={IconSet[icon].path} />
	</svg>
);
export default Icon;