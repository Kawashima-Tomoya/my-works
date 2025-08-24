import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

type Position = "left" | "center" | "right" | "";
type Size = "ss" | "sm" | "md" | "lg" | "xl";

type CardProps = {
	position?: Position;
	size?: Size;
	children?: ReactNode;
	className?: string;
	onClick?: () => void;
};

const base =
	"grid place-items-center rounded-xl bg-white shadow-lg ring-1 ring-black/[0.08]";

const card = tv({
	base,
	variants: {
		position: {
			left: "relative top-1.5 left-2.5 transition duration-500 group-hover:duration-200 -rotate-6 group-hover:-translate-x-5 group-hover:-rotate-15 group-hover:-translate-y-0.5 hover:scale-150 hover:rotate-0 hover:z-20",
			center:
				"z-10 transition duration-500 group-hover:duration-200 group-hover:-translate-y-1 hover:scale-150",
			right:
				"relative top-1.5 right-2.5 transition duration-500 group-hover:duration-200 rotate-6 group-hover:translate-x-5 group-hover:rotate-15 group-hover:-translate-y-0.5 hover:scale-150 hover:-rotate-0 hover:z-20",
			"": "",
		},
		size: {
			ss: "size-10",
			sm: "size-12",
			md: "size-15",
			lg: "size-20",
			xl: "size-25",
		},
	},
	defaultVariants: {
		size: "md",
		position: "",
	},
});

export function Card({
	position = "",
	size = "md",
	children,
	className,
}: CardProps): React.ReactElement {
	const classes = twMerge(card({ position, size }), className ?? "");

	return <div className={classes}>{children}</div>;
}
