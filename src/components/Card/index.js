import { trimString } from "../../helpers";
import styles from "./style.module.css";

const Card = ({ userData, userImages, likes }) => {

  return (
    <div className={styles.cardContainer}>
      <img className={styles.bannerImg} src={userImages?.raw} alt="" />
      <div className={styles.likeContainer}>{`${likes} Likes`}</div>
      <div className={styles.userInfoContainer}>
        <img src={userData?.profile_image?.medium} alt="" />
        <div>
          <h2>{userData.instagram_username? userData.instagram_username : userData?.first_name}</h2>
          <h5>{trimString(userData?.bio, 30)}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
