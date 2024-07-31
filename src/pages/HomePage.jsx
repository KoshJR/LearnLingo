import { Hero } from 'components/Hero/Hero';
import { Statistics } from 'components/Statistics/Statistics';
import css from "./Pages.module.css"

const HomePage = () => {
  return (
    <div className={css.hero}>
      <Hero />
      <Statistics />
    </div>
  );
};

export { HomePage };
