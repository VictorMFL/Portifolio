import styles from "../styles/MyProjects.module.css";

import { Poppins } from "next/font/google";

import IndividualProject from "./IndividualProject";

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
      <IndividualProject
        title="API_Poke"
        srcImage="images/API_Poke.png"
        description="Projeto feito para você ver os dados de Pokémons, do universo de Pokémon."
        linkWebsite="https://victormfl.github.io/API_Poke/"
        linkGithub="https://github.com/victormfl/API_Poke/"
        odd={true}
      />

      {/* Projeto 2 */}
      <IndividualProject
        title="Catalogo Filmes"
        srcImage="images/catalogo-filmes.png"
        description="Projeto para você ter acesso a dados de filmes já lançados."
        linkWebsite="https://victormfl.github.io/catalogo-filmes/"
        linkGithub="https://github.com/victormfl/catalogo-filmes/"
        odd={false}
      />

      {/* Projeto 3 */}
      <IndividualProject
        title="PokeNext"
        srcImage="images/Next.png"
        description="Projeto feito com a Next-js utilizando uma API que fornece dados de pokémons."
        linkWebsite="https://beautiful-clafoutis-8d4272.netlify.app/"
        linkGithub="https://github.com/victormfl/PokeNext/"
        odd={true}
      />

      {/* Projeto 4 */}
      <IndividualProject
        title="Figma"
        srcImage="images/Figma.png"
        description="Projeto usando os dados de um projeto público no figma. Técnologia usada: HTML, CSS e JavaScript."
        linkWebsite="https://victormfl.github.io/Figma/"
        linkGithub="https://github.com/victormfl/Figma/"
        odd={false}
      />

      {/* Projeto 5 */}
      <IndividualProject
        title="Dogs"
        srcImage="images/Dogs.png"
        description="Dogs rede-social de cachorro, Projeto feito com Vite+React usando a api disponível no curso da
        Origamid. Técnologia usada: Vite, ReactJs, react-router-dom e CSS-module."
        linkWebsite="https://victormfl.github.io/Dogs/"
        linkGithub="https://github.com/victormfl/Dogs/"
        odd={true}
      />

      {/* Projeto 6 */}
      <IndividualProject
        title="API Github"
        srcImage="images/api-github.jpg"
        description="Projeto feito com Vite+React utilizando a API do GitHub para acessar os dados de um usuário de
        acordo com o nome. Técnologia usada: Vite, ReactJs, Styled-components, axios e react-router-dom."
        linkWebsite="https://victormfl.github.io/api-github/"
        linkGithub="https://github.com/victormfl/api-github/"
        odd={false}
      />

      {/* Projeto 7 */}
      <IndividualProject
        title="Bootstrap"
        srcImage="images/Bootstrap.png"
        description="Projeto feito utilizando a biblioteca Bootstrap."
        linkWebsite="https://victormfl.github.io/Bootstrap/"
        linkGithub="https://github.com/victormfl/Bootstrap/"
        odd={true}
      />

      {/* Projeto 8 */}
      <IndividualProject
        title="Kanban"
        srcImage="images/Kanban.png"
        description="Site para anotar a sua lista de afazeres do dia, semana ou mês. Técnologia usada: Vite, ReactJs,
        react-icons, Figma e react-router-dom."
        linkWebsite="https://victormfl.github.io/Kanban/"
        linkGithub="https://github.com/victormfl/Kanban/"
        odd={false}
      />

      {/* Projeto 9 */}
      <IndividualProject
        title="Clone da Amazon"
        srcImage="images/clone_amazon.png"
        description="Projeto feito junto com o professor Matheus do curso da Udemy. Técnologia usada: Vite, ReactJs, 
        TypeScript e Tailwind."
        linkWebsite="https://victormfl.github.io/clone_amazon/"
        linkGithub="https://github.com/victormfl/clone_amazon/"
        odd={true}
      />

      {/* Projeto 10 */}
      <IndividualProject
        title="Formulário"
        srcImage="images/Formulario_sass.png"
        description="Formulário feito com React + Typescript + Sass."
        linkWebsite="https://victormfl.github.io/formulario_sass/"
        linkGithub="https://github.com/victormfl/formulario_sass/"
        odd={false}
      />
    </section>
  );
}
