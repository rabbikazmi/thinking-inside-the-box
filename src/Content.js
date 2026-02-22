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
              <li>Engineer & Researcher in Making — [Add your description here]</li>
              <li>[your-email@example.com]</li>
              <li>
                <a
                  href="[social-media-url]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [your-social-handle]
                </a>
              </li>
            </ul>
          </article>

          <section>
            <h2>Project Shortlist</h2>
            <hr />
            <article>
              <ul>
                <li>
                  <a href="[project-url]" target="_blank" rel="noopener noreferrer">
                    [Project Name 1]
                  </a>{' '}
                  — [Brief description of your project and what makes it interesting]
                </li>
                <li>
                  <a href="[project-url]" target="_blank" rel="noopener noreferrer">
                    [Project Name 2]
                  </a>{' '}
                  — [Brief description of your project and what makes it interesting]
                </li>
                <li>
                  <a href="[project-url]" target="_blank" rel="noopener noreferrer">
                    [Project Name 3]
                  </a>{' '}
                  — [Brief description of your project and what makes it interesting]
                </li>
                <li>
                  <a href="[project-url]" target="_blank" rel="noopener noreferrer">
                    [Project Name 4]
                  </a>{' '}
                  — [Brief description of your project and what makes it interesting]
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
