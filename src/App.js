import React, {useEffect} from 'react';

import Content from './Content';
import styles from './App.module.css';

function calcValues() {
  const centerContent = document.getElementById('center-content');
  const centerFold = document.getElementById('center-fold');

  const overflowHeight = centerContent.clientHeight - centerFold.clientHeight;

  document.body.style.height = overflowHeight + window.innerHeight + 'px';
  const foldsContent = Array.from(
    document.querySelectorAll('[data-fold-content="true"]'),
  );
  const tick = () => {
    const scroll = -(
      document.documentElement.scrollTop || document.body.scrollTop
    );
    foldsContent.forEach(content => {
      content.style.transform = `translateY(${scroll}px)`;
    });
    requestAnimationFrame(tick);
  };

  tick();
}

function App() {
  useEffect(() => {
    window.addEventListener('resize', calcValues);
    calcValues();

    // Drag to scroll functionality
    let isDown = false;
    let startY;
    let scrollTop;

    const handleMouseDown = (e) => {
      // Don't interfere with link clicks
      if (e.target.tagName === 'A') return;
      
      isDown = true;
      startY = e.clientY;
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      document.body.style.cursor = 'url("./assets/icons8-hand-cursor-32.png"), grabbing';
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const y = e.clientY;
      const walk = (startY - y) * 1.5; // Scroll multiplier
      window.scrollTo({
        top: scrollTop + walk,
        behavior: 'auto'
      });
    };

    const handleMouseUp = () => {
      if (isDown) {
        isDown = false;
        document.body.style.cursor = '';
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className={styles.all}>
      <div className={styles.wrapper3d}>
        <div className={`${styles.fold} ${styles.foldTop}`}>
          <div className={styles.foldAlign}>
            <div data-fold-content="true">
              <Content />
            </div>
          </div>
        </div>
        <div className={styles.fold} id="center-fold">
          <div className={styles.foldAlign}>
            <div data-fold-content="true" id="center-content">
              <Content />
            </div>
          </div>
        </div>
        <div className={`${styles.fold} ${styles.foldBottom}`}>
          <div className={styles.foldAlign}>
            <div data-fold-content="true">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
