import Link from "next/link";
import type { ReactElement } from "react";
import { Card } from "~/components/ui/Card";

type CardItem = {
	position: "left" | "center" | "right";
	size?: "ss" | "sm" | "md" | "lg" | "xl";
	icon: ReactElement;
};

type TripleCardProps = {
	cards: CardItem[];
};

export function TripleCard(props: TripleCardProps): ReactElement {
	return (
		<div className="isolate flex justify-center">
			{props.cards.map((card, index) =>
				index === 0 ? (
					<button type="button" key={card.position}>
						<Card position={card.position} size={card.size}>
							{card.icon}
						</Card>
					</button>
				) : (
					<Link
						key={card.position}
						href={index === 1 ? "/works" : "/about"}
						passHref={true}
					>
						<Card position={card.position} size={card.size}>
							{card.icon}
						</Card>
					</Link>
				),
			)}
		</div>
	);
}
