import { Outlet } from "react-router";
import s from "./styles.module.scss";
import { Header } from "shared/ui/";
import { selectProviderFilterOption } from "entities/game";
import { useSelector } from "react-redux";

export const AppLayout = () => {
  const currentProvider = useSelector(selectProviderFilterOption);

  return (
    <div className={s.appLayout}>
      <Header title={currentProvider.label} />
      <Outlet />
    </div>
  );
};
