import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { clsx } from "clsx";

export interface CheckboxProps extends RadixCheckbox.CheckboxProps {}
export function Checkbox(props: CheckboxProps) {
  return (
    <RadixCheckbox.Root
      className={clsx("w-6 h-6 p-[2px] bg-gray-800 rounded ")}
      {...props}
    >
      <RadixCheckbox.Indicator className={clsx("")} asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
}
