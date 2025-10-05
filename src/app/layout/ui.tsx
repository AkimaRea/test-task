import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';

import { selectProviderFilterOption } from 'entities/game';

import { Header } from 'shared/ui/';

import s from './styles.module.scss';

export const AppLayout = () => {
  const currentProvider = useSelector(selectProviderFilterOption);

  return (
    <div className={s.appLayout}>
      <Header title={currentProvider.label} />
      <Outlet />
    </div>
  );
};
