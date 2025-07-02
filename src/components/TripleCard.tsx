import type { ReactElement } from "react";
import { Card } from "~/components/Card";

type CardItem = {
	position: "left" | "center" | "right";
	icon: ReactElement;
};

type TripleCardProps = {
	cards: CardItem[];
};

export function TripleCard({ cards }: TripleCardProps): ReactElement {
	return (
		<div className="isolate flex justify-center">
			{cards.map((card) => (
				<Card key={card.position} position={card.position}>
					{card.icon}
				</Card>
			))}
		</div>
	);
}
