import styles from "../styles/MyProjects.module.css";

import { Poppins } from "next/font/google";

const fontPoppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

export default function MyProjects() {
  return (
    <section
      className={`${styles.my_projects} ${fontPoppins.className}`}
      id="projetos"
    >
      {/* Projeto 1 */}
      <div className={styles.description_project}>
        <a
          href="https://victormfl.github.io/catalogo-filmes/"
          target="_blank
          "
        >
          Catalogo Filmes
        </a>
        <h1>Projeto Catalogo de filmes</h1>

        <div>
          <p>Projeto para você ter acesso a dados de filmes já lançados.</p>
        </div>
        <a
          href="https://github.com/victormfl/catalogo-filmes/"
          target="_blank
          "
          className={styles.link}
        ></a>
      </div>
      <div className={`${styles.background_project} ${styles.background_1}`}>
        <div className={styles.background_contrast}></div>
        <img
          src="images/catalogo-filmes.png"
          alt="Projeto catalogo-filmes"
          className={styles.img_project}
        />
      </div>

      {/* Projeto 2 */}
      <div className={`${styles.background_project} ${styles.background_2}`}>
        <div className={styles.background_contrast}></div>
        <img
          src="images/Next.png"
          alt="Projeto PokeNext"
          className={styles.img_project}
        />
      </div>
      <div className={styles.description_project}>
        <a
          href="https://beautiful-clafoutis-8d4272.netlify.app/"
          target="_blank
          "
        >
          PokeNext
        </a>
        <h1>Projeto PokeNext</h1>

        <div>
          <p>
            Projeto feito com a Next-js utilizando uma API que fornece dados de
            pokémons.
          </p>
        </div>
        <a
          href="https://github.com/victormfl/PokeNext/"
          target="_blank
          "
          className={styles.link}
        ></a>
      </div>

      {/* Projeto 3 */}
      <div className={styles.description_project}>
        <a
          href="https://victormfl.github.io/Pokemon/"
          target="_blank
          "
        >
          Pokémon
        </a>
        <h1>Projeto Pokémon</h1>

        <div>
          <p>
            Projeto feito com React.Js utilizando uma api que fornece dados dos
            pokémons. bibliotecas: react-router-dom, axios e react-icons.
          </p>
        </div>
        <a
          href="https://github.com/victormfl/Pokemon/"
          target="_blank
          "
          className={styles.link}
        ></a>
      </div>
      <div className={`${styles.background_project} ${styles.background_3}`}>
        <div className={styles.background_contrast}></div>
        <img
          src="images/api-pokemon.png"
          alt="Projeto API Pokémon"
          className={styles.img_project}
        />
      </div>

      {/* Projeto 4 */}
      <div className={`${styles.background_project} ${styles.background_4}`}>
        <div className={styles.background_contrast}></div>
        <img
          src="images/Figma.png"
          alt="Projeto Figma"
          className={styles.img_project}
        />
      </div>
      <div className={styles.description_project}>
        <a
          href="https://victormfl.github.io/Figma/"
          target="_blank
          "
        >
          Figma
        </a>
        <h1>Projeto Figma</h1>

        <div>
          <p>
            Projeto usando os dados de um projeto público no figma. Técnologia
            usada: HTML, CSS e JavaScript.
          </p>
        </div>
        <a
          href="https://github.com/victormfl/Figma/"
          target="_blank
          "
          className={styles.link}
        ></a>
      </div>

      {/* Projeto 5 */}
      <div className={styles.description_project}>
        <a
          href="https://victormfl.github.io/Dogs/"
          target="_blank
          "
        >
          Dogs
        </a>
        <h1>Projeto Dogs</h1>

        <div>
          <p>
            Dogs rede-social de cachorro, Projeto feito com Vite+React usando a
            api disponível no curso da Origamid. Técnologia usada: Vite,
            ReactJs, react-router-dom e CSS-module.
          </p>
        </div>
        <a
          href="https://github.com/victormfl/Dogs/"
          target="_blank
          "
          className={styles.link}
        ></a>
      </div>
      <div className={`${styles.background_project} ${styles.background_5}`}>
        <div className={styles.background_contrast}></div>
        <img
          src="images/Dogs.png"
          alt="Projeto Dogs"
          className={styles.img_project}
        />
      </div>

      {/* Projeto 6 */}
      <div className={`${styles.background_project} ${styles.background_6}`}>
        <div className={styles.background_contrast}></div>
        <img
          src="images/api-github.jpg"
          alt="Projeto API Github"
          className={styles.img_project}
        />
      </div>
      <div className={styles.description_project}>
        <a
          href="https://victormfl.github.io/api-github/"
          target="_blank
          "
        >
          API Github
        </a>
        <h1>Projeto API Github</h1>

        <div>
          <p>
            Projeto feito com Vite+React utilizando a API do GitHub para acessar
            os dados de um usuário de acordo com o nome. Técnologia usada: Vite,
            ReactJs, Styled-components, axios e react-router-dom.
          </p>
        </div>
        <a
          href="https://github.com/victormfl/api-github/"
          target="_blank
          "
          className={styles.link}
        ></a>
      </div>

      {/* Projeto 7 */}
      <div className={styles.description_project}>
        <a
          href="https://victormfl.github.io/Bootstrap/"
          target="_blank
          "
        >
          Bootstrap
        </a>
        <h1>Projeto Bootstrap</h1>

        <div>
          <p>Projeto feito utilizando a biblioteca Bootstrap.</p>
        </div>
        <a
          href="https://github.com/victormfl/Bootstrap/"
          target="_blank
          "
          className={styles.link}
        ></a>
      </div>
      <div className={`${styles.background_project} ${styles.background_7}`}>
        <div className={styles.background_contrast}></div>
        <img
          src="images/Bootstrap.png"
          alt="Projeto Bootstrap"
          className={styles.img_project}
        />
      </div>

      {/* Projeto 8 */}
      <div className={`${styles.background_project} ${styles.background_8}`}>
        <div className={styles.background_contrast}></div>
        <img
          src="images/Kanban.png"
          alt="Projeto Kanban"
          className={styles.img_project}
        />
      </div>
      <div className={styles.description_project}>
        <a
          href="https://victormfl.github.io/Kanban/"
          target="_blank
          "
        >
          Kanban
        </a>
        <h1>Projeto Kanban</h1>

        <div>
          <p>
            Site para anotar a sua lista de afazeres do dia, semana ou mês.
            Técnologia usada: Vite, ReactJs, react-icons, Figma e
            react-router-dom.
          </p>
        </div>
        <a
          href="https://github.com/victormfl/Kanban/"
          target="_blank
          "
          className={styles.link}
        ></a>
      </div>

      {/* Projeto 9 */}
      <div className={styles.description_project}>
        <a
          href="https://victormfl.github.io/clone_amazon/"
          target="_blank
          "
        >
          Clone da Amazon
        </a>
        <h1>Projeto Clone da Amazon</h1>

        <div>
          <p>
            projeto feito junto com o professor Matheus do curso da Udemy.
            Técnologia usada: Vite, ReactJs, TypeScript e Tailwind.
          </p>
        </div>
        <a
          href="https://github.com/victormfl/clone_amazon/"
          target="_blank
          "
          className={styles.link}
        ></a>
      </div>
      <div className={`${styles.background_project} ${styles.background_9}`}>
        <div className={styles.background_contrast}></div>
        <img
          src="images/clone_amazon.png"
          alt="Projeto Clone da Amazon"
          className={styles.img_project}
        />
      </div>

      {/* Projeto 10 */}
      <div className={`${styles.background_project} ${styles.background_10}`}>
        <div className={styles.background_contrast}></div>
        <img
          src="images/Formulario_sass.png"
          alt="Projeto Formulário SASS"
          className={styles.img_project}
        />
      </div>
      <div className={styles.description_project}>
        <a
          href="https://victormfl.github.io/formulario_sass/"
          target="_blank
          "
        >
          Formulário
        </a>
        <h1>Projeto Formulário</h1>

        <div>
          <p>Formulário feito com React + Typescript + Sass.</p>
        </div>
        <a
          href="https://github.com/victormfl/formulario_sass/"
          target="_blank
          "
          className={styles.link}
        ></a>
      </div>

      {/* Projeto 11 */}
      <div className={styles.description_project}>
        <a
          href="https://victormfl.github.io/previsao-tempo/"
          target="_blank
          "
        >
          Previsão do Tempo
        </a>
        <h1>Projeto Previsão do Tempo</h1>

        <div>
          <p>
            Projeto feito com React.Js utilizando uma api que fornece dados
            meteorológicos. bibliotecas: react-router-dom e axios.
          </p>
        </div>
        <a
          href="https://github.com/victormfl/previsao-tempo"
          target="_blank
          "
          className={styles.link}
        ></a>
      </div>
      <div className={`${styles.background_project} ${styles.background_11}`}>
        <div className={styles.background_contrast}></div>
        <img
          src="images/previsão-tempo.png"
          alt="Projeto Previsão do Tempo"
          className={styles.img_project}
        />
      </div>
    </section>
  );
}
