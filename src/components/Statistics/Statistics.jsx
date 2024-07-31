import css from "./Statistics.module.css"

const Statistics = () => {
  return (
    <div className={css.statistic}>
      <div className={css.statContainer}>
        <p className={css.stat}>32,000 +</p>
        <p className={css.statTitle}> Experienced tutors</p>
      </div>
      <div className={css.statContainer}>
        <p className={css.stat}>300,000 +</p>
        <p className={css.statTitle}>5-star tutor reviews</p>
      </div>
      <div className={css.statContainer}>
        <p className={css.stat}>120 +</p>
        <p className={css.statTitle}>Subjects taught</p>
      </div>
      <div className={css.statContainer}>
        <p className={css.stat}>200 +</p>
        <p className={css.statTitle}>Tutor nationalities</p>
      </div>
    </div>
  );
}

export {Statistics}