import { Game } from "entities/game/model/types";
import s from "./styles.module.scss";
import { isUrl } from "shared/lib/validators";
import cx from "classnames";

export const GamesCard = ({ title, provider, image }: Game) => {
  return (
    <div
      className={s.games_card}
      key={title}
    >
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
  );
};
