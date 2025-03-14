import classNames from 'classnames';
import styles from './About.module.css';

export const AboutPage = () => {
  return (
    <div>
      <span>This is a simple react page which likes grid layout</span>
      <div className={ styles.parent }>
        <div className={ classNames(styles.header, styles['grid-area']) }>Header</div>
        <div className={ classNames(styles.main, styles['grid-area']) }>Main</div>
        <div className={ classNames(styles.sidebar, styles['grid-area']) }>Sidebar</div>
        <div className={ classNames(styles.footer, styles['grid-area']) }>Footer</div>
      </div> 
    </div>
    
  );
};
