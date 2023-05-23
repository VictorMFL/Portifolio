import styles from "../styles/Skills.module.css";

import { Lato } from "next/font/google";

const fontLato = Lato({
  weight: "400",
  subsets: ["latin"],
});

export default function Skills() {
  return (
    <section className={`${styles.skills} ${fontLato.className}`}>
      <h1>
        Aqui estão algumas das minhas principais <span>habilidades.</span>
      </h1>
      <img src="images/globo.svg" alt="Globo com minhas habilidades" />
    </section>
  );
}
