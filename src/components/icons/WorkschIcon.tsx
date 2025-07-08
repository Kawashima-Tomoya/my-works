import type { CSSProperties } from "react";

type PropsType = {
	style?: CSSProperties;
	color?: string;
};

export function WorksIcon(props: PropsType): React.ReactElement {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 256 256"
			fill={props.color ?? "#666666"}
			style={props.style}
		>
			<title>作品アイコン</title>
			<path
				d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V88H40V56Zm0,144H40V104H216v96Z"
				stroke="#666666"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
