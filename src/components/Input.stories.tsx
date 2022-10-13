import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { TextInputs, InputProps, InputRootProps } from "./Input";

export default {
  title: "Components/Input",
  component: TextInputs.Root,
  args: {
    children: [
      <TextInputs.Icon>
        <Envelope />
      </TextInputs.Icon>,
      <TextInputs.Input placeholder="Enter your email" />,
    ],
  },
  argTypes: {},
} as Meta<InputRootProps>;

export const Default: StoryObj<InputRootProps> = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
