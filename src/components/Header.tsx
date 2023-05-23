import { useState } from "react";
import styles from "../styles/Header.module.css";

import { Plus_Jakarta_Sans } from "next/font/google";

const fontHeader = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Header() {
  const [mobile, setMobile] = useState(false);

  function activeMenu() {
    setMobile(!mobile);
  }

  return (
    <header className={`${styles.header} ${fontHeader.className}`}>
      <a href="#" className={styles.name}>
        &lt;Victor /&gt;
      </a>

      <div onClick={activeMenu}>
        <span
          className={`${mobile ? styles.fechar_menu : styles.abrir_menu}`}
        ></span>
      </div>

      {mobile && (
        <ul className={styles.nav_mobile}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      )}
      
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
