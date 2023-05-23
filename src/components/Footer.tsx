import styles from "../styles/Footer.module.css";

import { Poppins } from "next/font/google";

const fontFooter = Poppins({
  weight: "600",
  subsets: ["latin"],
});


export default function Footer() {
  return (
    <footer id="contato" className={`${styles.footer} ${fontFooter.className}`}>
      <h1>Contato</h1>

      <p>Estou em busca de uma vaga! Estou disponível para conversas.</p>

      <p>E-mail: victormanoel.dev@gmail.com</p>

      <div className={styles.icons_contact}>
        <a
          href="https://github.com/VictorMFL/"
          target="_blank
          "
          className={styles.icon_github}
        ></a>
        <a
          href="https://www.instagram.com/victor_freitas02"
          target="_blank
          "
          className={styles.icon_insta}
        ></a>
        <a
          href="https://www.linkedin.com/in/victor-manoel-de-freitas-laurentino-ba81ab22a/"
          target="_blank
          "
          className={styles.icon_linkedin}
        ></a>
      </div>
    </footer>
  );
}
