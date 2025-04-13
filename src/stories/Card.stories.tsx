import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components/Card/Card";

const meta: Meta<typeof Card> = {
  component: Card,
  decorators: [
    (Story) => (
      <div className="wrapper">
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  tags: ["autodocs"],
  args: {
    title: "Card",
    description: "Card description",
  },
};
