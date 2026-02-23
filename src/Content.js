import React from 'react';
import styles from './Content.module.css';

function Content() {
  return (
    <main className={styles.printPage}>
      <div className={styles.printContent}>
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>RABBIKA AZMI</h1>
        </header>

        <div className={styles.container}>
          <article className={styles.intro}>
            <ul>
              <li>B.Tech Undergrad, obsessed with R&D, if it's ambitious and interesting, I'm in.</li>
              <li>[ azmirabbika@gmail.com ]</li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rabbika-azmi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [ linkedin.com/in/rabbika-azmi/ ]
                </a>
              </li>
            </ul>
          </article>

          <section>
            <h2>Project Shortlist</h2>
            <hr />
            <article>
              <ul className={styles.projectList}>
                <li className={styles.projectItem}>
                  <div className={styles.projectTitle}>
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
        </div>
      </div>
    </main>
  );
}

export default Content;
