import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface InputRootProps {
  children: React.ReactNode;
}
function InputRoot({ children }: InputRootProps) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 py-4 px-3 h-12 rounded bg-gray-800 w-full  focus-within:ring-2 ring-cyan-300"
      )}
    >
      {children}
    </div>
  );
}

export interface InputIconProps {
  children: React.ReactNode;
}

function InputIcon({ children }: InputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input(props: InputProps) {
  return (
    <input
      className={
        "bg-transparent flex-1 text-gray-100 outline-none text-xs placeholder:text-gray-400"
      }
      {...props}
    />
  );
}

export const TextInputs = {
  Root: InputRoot,
  Icon: InputIcon,
  Input: Input,
};
