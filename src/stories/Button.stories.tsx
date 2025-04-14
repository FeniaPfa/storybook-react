import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button/Button";
import { withActions } from "@storybook/addon-actions/decorator";
import { userEvent, within, expect } from "@storybook/test";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    actions: { handles: ["mouseover"] },
    backgrounds: {
      default: "default",
      values: [
        { name: "blackfriday", value: "#000000" },
        { name: "default", value: "#FFFFFF" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "24px" }}>
        <Story />
      </div>
    ),
    withActions,
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
    onClick: {
      action: "clicked",
    },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button"));
    await expect(canvas.getByText(args.label)).toBeInTheDocument();
  },
};
