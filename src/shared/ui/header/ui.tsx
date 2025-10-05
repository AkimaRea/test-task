import { Link } from 'react-router';

import s from './styles.module.scss';

interface HeaderProps {
  title?: string;
}

export const Header = ({ title = 'EXAMPLE' }: HeaderProps) => {
  return (
    <header className={s.header}>
      <Link to='/'>
        <img src='assets/gamepad.svg' alt='gamepad' />
      </Link>
      <span className={s.header_title}>{title ? title : 'Все игры'}</span>
    </header>
  );
};
