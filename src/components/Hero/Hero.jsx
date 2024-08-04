import css from './Hero.module.css'

const Hero = () => {
  return (
    <div className={css.heroWrapper}>
      <div className={css.titleWrapper}>
        <h2 className={css.title}>
          Unlock your potential with the best <span>language</span> tutors
        </h2>
        <p className={css.text}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <button className={css.startBtn}>Get started</button>
      </div>
      <div className={css.heroImg}>
        <img
          src=""
          alt=""
          width={568}
          height={530}
        />
      </div>
    </div>
  );
}

export {Hero}