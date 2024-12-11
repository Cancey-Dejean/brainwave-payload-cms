import type { Meta, StoryObj } from "@storybook/react";
import RoadmapCard from "./";

const meta = {
  title: "Components/Cards/RoadmapCard",
  component: RoadmapCard,
  parameters: {
    layout: "fullscreen",
  },
  // tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="py-15">
        <Story />
      </div>
    ),
  ],
  args: {
    colorful: true,
    date: "Aug 2024",
    status: "done",
    mainImage: "/images/roadmap/image-1.png",
    mainImageAlt: "Image",
    title: "Section Title",
    description: "Description goes here",
  },
  argTypes: {
    _key: {
      control: false,
    },
    date: {
      control: "text",
    },
    status: {
      control: "select",
    }
  },
} satisfies Meta<typeof RoadmapCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    return <RoadmapCard {...args} />;
  },
};
