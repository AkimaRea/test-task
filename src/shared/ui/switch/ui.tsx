import { Switch as SwitchPrimitive } from 'radix-ui';

import s from './styles.module.scss';

export interface SwitchProps {
  id: string;
  label: string;
  checked?: boolean;
  onCheckedChange?(checked: boolean): void;
}

export const Switch = ({ id, label, checked, onCheckedChange }: SwitchProps) => {
  return (
    <form>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <label className={s.label} htmlFor={id} style={{ paddingRight: 15 }}>
          {label}
        </label>
        <SwitchPrimitive.Root checked={checked} onCheckedChange={onCheckedChange} className={s.root} id={id}>
          <SwitchPrimitive.Thumb className={s.thumb} />
        </SwitchPrimitive.Root>
      </div>
    </form>
  );
};
