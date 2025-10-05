import cx from "classnames";
import { Game } from "entities/game/model/types";
import { isUrl } from "shared/lib/validators";
import { Popover, SettingsButton, Switch } from "shared/ui";
import s from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { gameActions } from "entities/game/model";

export const GamesCardControlled = ({
  id,
  title,
  provider,
  image,
  isActive,
}: Game) => {
  const dispatch = useDispatch();

  const handleChangeActive = () => {
    dispatch(gameActions.toggleActive(id));
  };

  return (
    <div
      className={cx(s.games_card, s.controlled)}
      data-active={isActive}
      key={title}
    >
      <div className={s.games_card_settings}>
        <Popover trigger={<SettingsButton />}>
          <Switch
            id={title}
            label="Показывать"
            checked={isActive}
            onCheckedChange={handleChangeActive}
          />
        </Popover>
      </div>
      <div className={s.games_card_content}>
        <div className={s.games_card_image_wrapper}>
          <img
            className={cx(
              s.games_card_image,
              !isUrl(image) && s.games_card_image_placeholder
            )}
            src={isUrl(image) ? image : "assets/logo.png"}
            alt="game's-banner"
          />
        </div>
        <div className={s.games_card_provider}>
          <div className={s.games_card_provider_logo}>
            {/* <img
                src=""
                alt="provider-logo"
              /> */}
          </div>
          <span>{provider}</span>
        </div>
        <div className={s.games_card_name}>{title}</div>
      </div>
    </div>
  );
};
