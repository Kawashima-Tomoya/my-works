import type { ReactNode } from "react";

type CardProps = {
	position?: "left" | "center" | "right";
	size?: "ss" | "sm" | "md" | "lg" | "xl";
	children?: ReactNode;
	className?: string;
};

const _baseStyle =
	"grid place-items-center rounded-xl bg-white shadow-lg ring-1 ring-black/[0.08]";

const positionStyle = {
	left: "relative top-1.5 left-2.5 transition duration-500 group-hover:duration-200 -rotate-6 group-hover:-translate-x-5 group-hover:-rotate-15 group-hover:-translate-y-0.5 hover:scale-150 hover:rotate-0 hover:z-20",
	center:
		"z-10 transition duration-500 group-hover:duration-200 group-hover:-translate-y-1 hover:scale-150",
	right:
		"relative top-1.5 right-2.5 transition duration-500 group-hover:duration-200 rotate-6 group-hover:translate-x-5 group-hover:rotate-15 group-hover:-translate-y-0.5 hover:scale-150 hover:-rotate-0 hover:z-20",
} as const;

const sizeStyle = {
	ss: "size-10",
	sm: "size-12",
	md: "size-15",
	lg: "size-20",
	xl: "size-25",
};

export function Card({
	position,
	size = "md",
	children,
	className,
}: CardProps): React.ReactElement {
	const positionClass = position ? positionStyle[position] : "";
	return (
		<div
			className={`${_baseStyle} ${positionClass} ${sizeStyle[size]} ${className ?? ""}`}
		>
			{children}
		</div>
	);
}
