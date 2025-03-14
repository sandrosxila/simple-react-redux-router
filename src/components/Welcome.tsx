import { useAppSelector } from '@/hooks/redux';
import { AnimatePresence, motion } from 'motion/react';
import styles from './Welcome.module.css';
import { useState } from 'react';

export const Welcome = () => {
  const { user, isLoggedIn } = useAppSelector((state) => state.auth);
  const [isVisible, setIsVisible] = useState(false);
  const [isOn, setIsOn] = useState(false);

  if(!isLoggedIn) {
    return (
      <div className={ styles.welcome }>
        <h1>Welcome to Home</h1>
      </div>
    );
  }

  const item = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

  return (
    <div>
      <div className={ styles.welcome }>
        <h1>Welcome { user!.fullName }</h1>
      </div>
      <motion.section className={ styles.grid } initial="hidden" animate="visible">
        <motion.div whileHover={ { scale: 1.2 } } className={ styles.item }></motion.div>
        <div className={ styles.item }>
          <button
            className="toggle-container"
            style={
              {
                border: 'none',
                outline: 'none',
                width: 100,
                height: 50,
                backgroundColor: '#9911ff44',
                borderRadius: 50,
                cursor: 'pointer',
                display: 'flex',
                padding: 0,
                justifyContent: 'flex-' + (isOn ? 'start' : 'end'),
              }
            }
            onClick={ () => setIsOn(!isOn) }
          >
            <motion.div
              className="toggle-handle"
              style={ 
                {
                  width: 50,
                  height: 50,
                  backgroundColor: '#9911ff',
                  borderRadius: '50%',
                }
              }
              layout
              transition={
                {
                  type: 'spring',
                  visualDuration: 0.2,
                  bounce: 0.2,
                }
              }
            />
          </button>
        </div>
        <motion.div className={ styles.item } variants={ item }></motion.div>
        <motion.div className={ styles.item } variants={ item }></motion.div>
        <motion.div className={ styles.item } variants={ item }></motion.div>
        <div className={ styles.item }></div>
        <div className={ styles.item }>
          <motion.button 
            initial={
              {
                all: 'unset',
                backgroundColor: 'purple',
                borderRadius: '8px',
                outline: 'none',
                padding: '8px 4px'
              }
            } 
            whileHover={ { scale: 1.1 } } 
            whileTap={ { scale: 0.9, backgroundColor: 'crimson' } } 
            transition={
              {
                type: 'spring',
                ease: true,
                duration: 0.3
              }
            }
            onClick={ () => setIsVisible(p => !p) }
          >
            Click Me
          </motion.button>
        </div>
        <div className={ styles.item }>
          <AnimatePresence>
            {
              isVisible && (
                <motion.div
                  initial={ { opacity: 0, width: 100, height: 100, background: 'limegreen' } }
                  animate={ { opacity: 1, rotate: 180 } }
                  exit={ { opacity: 0, rotate: 0 } }
                />
              )
            }
          </AnimatePresence>
        </div>
        <div className={ styles.item }></div>
        <div className={ styles.item }></div>
        <motion.div initial={ { scale: 0 } } whileInView={ { scale: 1 } } className={ styles.item }></motion.div>
        <div className={ styles.item }></div>
      </motion.section>
    </div>
  );
};
