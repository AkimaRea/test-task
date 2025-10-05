import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Select as SelectPrimitive } from 'radix-ui';

import s from './styles.module.scss';

export interface SelectOption {
  value?: string;
  label?: string;
}

export interface SelectProps {
  options: SelectOption[];
  activeOption: SelectOption;
  setActiveOption(value: string | null): void;
}

export const Select = ({ options, activeOption, setActiveOption }: SelectProps) => (
  <SelectPrimitive.Root value={activeOption.value} onValueChange={setActiveOption}>
    <SelectPrimitive.Trigger className={s.Trigger}>
      <SelectPrimitive.Icon className={s.Icon}>
        <img src='assets/grid.svg' />
      </SelectPrimitive.Icon>
      <SelectPrimitive.Value placeholder='Все провайдеры'>{activeOption.label}</SelectPrimitive.Value>
    </SelectPrimitive.Trigger>

    <SelectPrimitive.Portal>
      <SelectPrimitive.Content className={s.Content} side='bottom' position='popper'>
        <SelectPrimitive.ScrollUpButton className={s.ScrollButton}>
          <ChevronUp />
        </SelectPrimitive.ScrollUpButton>

        <SelectPrimitive.Viewport className={s.Viewport}>
          {options.map(
            option =>
              option?.value &&
              option?.label && (
                <SelectPrimitive.Item value={option.value} className={s.Item} key={option.value}>
                  <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator className={s.ItemIndicator}>
                    <Check width={15} />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ),
          )}
        </SelectPrimitive.Viewport>

        <SelectPrimitive.ScrollDownButton className={s.ScrollButton}>
          <ChevronDown />
        </SelectPrimitive.ScrollDownButton>
        <SelectPrimitive.Arrow />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  </SelectPrimitive.Root>
);
