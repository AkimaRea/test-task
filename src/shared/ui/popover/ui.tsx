import { Popover as PopoverPrimitive } from "radix-ui";
import s from "./styles.module.scss";

export interface PopoverProps {
  trigger: React.ReactNode;
  children?: React.ReactNode;
}

export const Popover = ({ trigger, children }: PopoverProps) => (
  <PopoverPrimitive.Root>
    <PopoverPrimitive.Trigger asChild>
      <button>{trigger}</button>
    </PopoverPrimitive.Trigger>
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        className={s.Content}
        sideOffset={5}
      >
        {children}
        <PopoverPrimitive.Arrow className={s.Arrow} />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  </PopoverPrimitive.Root>
);
