import { Settings2 } from 'lucide-react';

import s from './styles.module.scss';

export const SettingsButton = () => {
  return (
    <div className={s.settings} aria-label='Update dimensions'>
      <Settings2 color='var(--color-text-white)' width={20} />
    </div>
  );
};
