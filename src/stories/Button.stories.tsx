import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button/Button";

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ padding: "24px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    style: "filled",
    label: "Button",
  },
  argTypes: {
    style: {
      options: ["filled", "outlined"],
      control: { type: "inline-radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "inline-radio" },
    },
    label: {
      control: { type: "text" },
    },
  },
};
