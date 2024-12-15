import css from "./Profile.module.css";
import Stats from '../stats/Stats';

export default function Profile({image,name,tag,location,stats}) {
  return (
      <div className={css.profile}>
          <div className={css.userInfo}>
              <img className={css.avatar}
                src={image}
                alt="User avatar"
            />
              <p className={css.userName}>{name}</p>
              <p className={css.userTag}>@{tag}</p>
              <p className={css.userTag}>{location}</p>
          </div>
          <ul className={css.boxProperties}>
              <Stats name="Followers" value={stats.followers} />
              <Stats name="Views" value={stats.views} />
              <Stats name="Likes" value={stats.likes} />
          </ul>
    </div>
  );
};