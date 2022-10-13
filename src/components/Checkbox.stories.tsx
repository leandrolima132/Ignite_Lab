import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from "./Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
        <div className="flex items-center gap-2">
            {Story()}
            <Text>Manter conectado</Text>
        </div>
    ),
  ]
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {
  argTypes: {},
};