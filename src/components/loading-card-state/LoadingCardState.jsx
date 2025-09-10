import styles from "./LoadingCardState.module.css";

function LoadingCardState({ cardWidth }) {
  return (
    <div className={styles.emptyCardContainer} style={{ width: cardWidth }}>
      <div className={styles.cardImage}></div>
      <div className={styles.cardBody}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingCardState;
