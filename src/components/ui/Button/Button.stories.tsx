import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Button",
    as: "a",
    white: true,
    className: "",
    px: "",
    href: "",
  },
  argTypes: {
    as: {
      control: {
        type: "select",
      },
    },
    onClick: {
      control: false
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: (args) => {
    return <Button {...args} />;
  },
};
