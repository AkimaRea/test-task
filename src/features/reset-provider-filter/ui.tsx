import { gameActions } from "entities/game";
import { RotateCcw } from "lucide-react";
import { useDispatch } from "react-redux";
import s from "./styles.module.scss";

export const ResetProviderFilterButton = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(gameActions.resetProviderFilter());
  };

  return (
    <button
      onClick={handleReset}
      className={s.reset_filter_button}
    >
      <RotateCcw width={20} />
    </button>
  );
};
