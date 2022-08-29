import styles from "./style.module.css";

export const LoadingCard = () => {
  return (
    <div className={styles.loadingCardContainer}>
      <div className={styles.loadingBannerImg}></div>
      <div className={styles.userInfoContainer}>
        <div className={styles.userIcon}></div>
        <div className={styles.userTextContainer}>
          <div className={styles.userName}></div>
          <div className={styles.userBio}></div>
        </div>
      </div>
    </div>
  );
};
