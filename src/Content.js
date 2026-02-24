import React from 'react';
import styles from './Content.module.css';
import starIcon from './assets/star-removebg-preview.png';

function Content() {
  return (
    <main className={styles.printPage}>
      <div className={styles.printContent}>
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>RABBIKA AZMI</h1>
        </header>

        <div className={styles.container}>
          <article className={styles.intro}>
            <p>Hi, I'm a Creative Engineer, Researcher & a B.Tech Undergrad at IGDTUW, obsessed with R&D, if it's ambitious and interesting, I'm in.</p>
          </article>

          <section>
            <h2>Project Shortlist</h2>
            <hr />
            <article>
              <ul className={styles.projectList}>
                <li className={styles.projectItem}>
                  <div className={styles.projectTitle}>
                    <img src={starIcon} alt="" className={styles.starIcon} />
                    <a href="https://github.com/rabbikazmi/eleven11" target="_blank" rel="noopener noreferrer">
                      Eleven11
                    </a>
                  </div>
                  <div className={styles.projectDesc}>
                    YOLOv8-powered web app that detects safety gear in real-time from images or live camera. Multilingual support + TTS alerts.
                  </div>
                  <div className={styles.projectFocus}>
                    Focus: custom model training · full-stack development · real-time inference
                  </div>
                </li>
                <li className={styles.projectItem}>
                  <div className={styles.projectTitle}>
                    <img src={starIcon} alt="" className={styles.starIcon} />
                    <a href="https://github.com/rabbikazmi/embodied-vqa-rl" target="_blank" rel="noopener noreferrer">
                      Embodied VQA-RL
                    </a>
                  </div>
                  <div className={styles.projectDesc}>
                    An autonomous agent that physically navigates a 3D environment to answer visual questions using deep RL + YOLOv8.
                  </div>
                  <div className={styles.projectFocus}>
                    Focus: embodied AI · reinforcement learning · computer vision
                  </div>
                </li>
                <li className={styles.projectItem}>
                  <div className={styles.projectTitle}>
                    <img src={starIcon} alt="" className={styles.starIcon} />
                    <a href="https://github.com/rabbikazmi/snapncook" target="_blank" rel="noopener noreferrer">
                      SnapNCook
                    </a>
                  </div>
                  <div className={styles.projectDesc}>
                    Point your camera at your fridge, get a recipe. YOLOv11 detects ingredients, Gemini API suggests dishes.
                  </div>
                  <div className={styles.projectFocus}>
                    Focus: computer vision · API integration · user experience design
                  </div>
                </li>
                <li className={styles.projectItem}>
                  <div className={styles.projectTitle}>
                    <img src={starIcon} alt="" className={styles.starIcon} />
                    <a href="https://github.com/rabbikazmi/floatfolio" target="_blank" rel="noopener noreferrer">
                      Floatfolio
                    </a>
                  </div>
                  <div className={styles.projectDesc}>
                    webOS-inspired portfolio with draggable windows, Spotify playlist, and a hidden easter egg.
                  </div>
                  <div className={styles.projectFocus}>
                    Focus: creative UI · web development · interactive design
                  </div>
                </li>
              </ul>
            </article>
          </section>

          <section>
            <h2>Work Experience</h2>
            <hr />
            <article>
              <ul className={styles.tight}>
                <li>
                  <sup>[Year]</sup>
                  [Company Name], [Location] — <i>[Your Role]</i>
                </li>
                <li>
                  <sup>[Year]</sup>
                  [Company Name], [Location] — <i>[Your Role]</i>
                </li>
                <li>
                  <sup>[Year]</sup>
                  [Company Name], [Location] — <i>[Your Role]</i>
                </li>
              </ul>
            </article>
          </section>

          <section>
            <h2>Research & Publications</h2>
            <hr />
            <article>
              <ul>
                <li>
                  <sup>[Year]</sup>
                  <a href="[publication-url]" target="_blank" rel="noopener noreferrer">
                    [Publication or Research Title]
                  </a>{' '}
                  — [Brief description]
                </li>
                <li>
                  <sup>[Year]</sup>
                  <a href="[publication-url]" target="_blank" rel="noopener noreferrer">
                    [Publication or Research Title]
                  </a>{' '}
                  — [Brief description]
                </li>
              </ul>
            </article>
          </section>

          <section>
            <h2>Education</h2>
            <hr />
            <article>
              <ul className={styles.tight}>
                <li>
                  <sup>[Year]</sup>
                  [Degree], [University/Institution]
                </li>
                <li>
                  <sup>[Year]</sup>
                  [Degree/Certificate], [University/Institution]
                </li>
              </ul>
            </article>
          </section>

          <section className={styles.contactSection}>
            <div className={styles.contactIcons}>
              <a href="mailto:azmirabbika@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.contactIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/rabbika-azmi/" target="_blank" rel="noopener noreferrer" className={styles.contactIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/rabbikazmi" target="_blank" rel="noopener noreferrer" className={styles.contactIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Content;
