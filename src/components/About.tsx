import styles from "../styles/About.module.css";

import Image from "next/image";

import { Lato } from "next/font/google";

const fontLato = Lato({
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  return (
    <section className={`${styles.about} ${fontLato.className}`}>
      <div className={styles.intro}>
        <div className={styles.background_img}>
          <Image
            src="images/seta.svg"
            alt="uma seta apontando para o boneco"
            width={50}
            height={50}
            className={styles.arrow}
          />
          <p>
            Hello! Eu sou <span>Victor Manoel</span>
          </p>

          <img
            src="images/Me.png"
            alt="imagem de um boneco com um computador"
          />
        </div>

        <div className={styles.about_me}>
          <p>Desenvolvedor Front-end</p>
          <h1>
            A dedicação, o comprometimento <br />e a busca{" "}
            <span>constante</span>...
          </h1>
          <p>
            por aprendizado são os pilares que me sustentam como profissional e
            me impulsionam a sempre superar expectativas.
          </p>
        </div>
      </div>

      <div className={styles.profession} id="sobre">
        <h1>Sou Desenvolvedor Front-end.</h1>
        <p>Atualmente estou em busca da minha primeira vaga.</p>

        <p className={styles.my_profission}>
          Apaixonado por programação e por solucionar problemas, prezando sempre
          pela pontuidade, comunicação e trabalho em equipe. Comecei minha
          trajetória em programação pelo curso em vídeo, aprendendo sobre{" "}
          <span>HTML5 e CSS3</span>, desde então desenvolvi vários projetos,
          tanto pessoais quanto os disponíveis em cursos. Fiz diversos outros
          cursos voltados para a área de front-end, eles são:{" "}
          <span>
            JavaScript, TypeScript, ReactJS, Next-js, Consumo de APIs(get, post, put, delete e patch), Testes
            unitários(Jest e Testing Library), react-router-dom,
            styled-components, Tailwind, Bootstrap, Axios, Material-UI, SASS,
            Jquery, Redux toolkit, Node-js, MongoDB, Express, React Native e
            Figma.
          </span>
        </p>
      </div>
    </section>
  );
}
