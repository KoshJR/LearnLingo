import { Navigation } from 'components/Navigation/Navigation';
import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <header>
        <div className={css.navbar}>
          <div>
            <a href="/learn-lingo/home" className={css.logo}>
              <img src="" alt="" width={28} height={28} className={css.flag} />
              <span className={css.logoText}>LearnLingo</span>
            </a>
          </div>
          <Navigation />
          <div className={css.userAuth}>
            <button className={css.loginBtn}>
             <img src="" alt="" width={20} height={20}/>
              Log in
             </button>
            <button className={css.registerBtn}>Registration</button>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export { Layout };
