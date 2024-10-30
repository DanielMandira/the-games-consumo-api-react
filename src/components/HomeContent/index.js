import styles from "@/components/HomeContent/HomeContent.module.css";
import Loading from "../Loading";
const HomeContent = () => {
  return (
    <>
      <div className={styles.homeContent}>
        {/* CARD DE LISTA DE JOGOS */}
        <div className={styles.listGamesCard}>
          <div className={styles.title}>
            <h2>Lista de jogos</h2>
          </div>
          {/* No React inserir o outro componente Loading aqui: */}
        <Loading /> 
          <div className={styles.games} id="games">
            {/* Lista de jogos irá aqui */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
