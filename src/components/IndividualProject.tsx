import styles from "../styles/IndividualProject.module.css";

type ProjectProps = {
  linkWebsite: string;
  linkGithub: string;
  title: string;
  description: string;
  srcImage: string;
  odd: boolean;
};

export default function IndividualProject({
  linkWebsite,
  linkGithub,
  title,
  description,
  srcImage,
  odd,
}: ProjectProps) {
  return (
    <>
      {odd ? (
        <div className={styles.my_projects}>
          <div className={styles.description_project}>
            <a
              href={linkWebsite}
              target="_blank
          "
            >
              {title}
            </a>
            <h1>Projeto {title}</h1>

            <div>
              <p>{description}</p>
            </div>
            <a
              href={linkGithub}
              target="_blank
          "
              className={styles.link}
            ></a>
          </div>
          <div className={`${styles.background_project} ${styles.back}`}>
            <div className={styles.background_contrast}></div>
            <img
              src={srcImage}
              alt={`Imagem do projeto ${title}`}
              className={styles.img_project}
            />
          </div>
        </div>
      ) : (
        <div className={styles.my_projects}>
          <div className={styles.background_project}>
            <div className={styles.background_contrast}></div>
            <img
              src={srcImage}
              alt={`Imagem do projeto ${title}`}
              className={styles.img_project}
            />
          </div>
          <div className={styles.description_project}>
            <a
              href={linkWebsite}
              target="_blank
          "
            >
              {title}
            </a>
            <h1>Projeto {title}</h1>

            <div>
              <p>{description}</p>
            </div>
            <a
              href={linkGithub}
              target="_blank
          "
              className={styles.link}
            ></a>
          </div>
        </div>
      )}
    </>
  );
}
