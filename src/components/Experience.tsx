import Image from "next/image";
import styles from "../styles/Experience.module.css";

import { Lato, Poppins } from "next/font/google";

const fontLato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const fontPoppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Experience() {
  return (
    <section className={`${styles.experience} ${fontLato.className}`}>
      <h1>Minhas Experiências</h1>
      <section className={fontPoppins.className}>
        <div className={styles.exp_1}>
          <Image
            src="images/estrela.svg"
            alt="Icone de uma estrela"
            width={120}
            height={120}
          />
          <div>
            <h1>React Js</h1>
            <p>Utilizo Next-js/ReactJs em grande parte dos meus projetos.</p>
            <a href="#projetos">Ver</a>
          </div>
        </div>

        <div className={styles.exp_2}>
          <Image
            src="images/xicara-café.svg"
            alt="Icone de uma xicara de café"
            width={120}
            height={120}
          />
          <div>
            <h1>Back-End</h1>
            <p>
              Tenho conhecimento em Node-js e Python, criando aplicações
              back-end.
            </p>
            <a href="#projetos">Ver</a>
          </div>
        </div>

        <div className={styles.exp_3}>
          <Image
            src="images/lampada.svg"
            alt="Icone de uma lampada"
            width={120}
            height={120}
          />
          <div>
            <h1>Projetos Responsivos</h1>
            <p>
              Procuro sempre deixar os meus projetos responsivos para todos os
              tipos de telas.
            </p>
            <a href="#projetos">Ver</a>
          </div>
        </div>

        <div className={styles.exp_4}>
          <Image
            src="images/espada.svg"
            alt="Icone de uma espada"
            width={120}
            height={120}
          />
          <div>
            <h1>Perfil GitHub Atualizado</h1>
            <p>
              Procuro sempre por novos projetos no meu perfil no Github com
              grande frequência.
            </p>
            <a
              href="https://github.com/VictorMFL/"
              target="_blank
            "
            >
              Ver
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
