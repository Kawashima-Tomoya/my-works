import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card } from "~/components/ui/Card";

const meta = {
	title: "Components/UI/Card",
	tags: ["autodocs"],
	component: Card,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Card>;

// biome-ignore lint/style/noDefaultExport: <explanation>
// biome-ignore lint/nursery/useComponentExportOnlyModules: <explanation>
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Def",
	},
};
export const Left: Story = {
	args: {
		position: "left",
		children: "Lef",
	},
};
export const Center: Story = {
	args: {
		position: "center",
		children: "Center",
	},
};
export const Right: Story = {
	args: {
		position: "right",
		children: "Right",
	},
};
