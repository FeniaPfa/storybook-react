import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components/Card/Card";

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    title: "Card",
    description: "Card description",
    image: "https://via.placeholder.com/150",
  },
};
