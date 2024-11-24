import { useState, useEffect } from "react";
import styles from "@/components/HomeContent/HomeContent.module.css";
import Loading from "../Loading";
import axios from "axios";
import url from "@/services/url.js";
import { useRouter } from "next/router";
const HomeContent = () => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const router = useRouter();  // Hook to navigate

  const fetchGames = async () => {
    try {
      const token = localStorage.getItem("authToken"); // Recupera o token
      const response = await axios.get(`${url}/games`, {
        headers: {
          Authorization: `Bearer ${token}`, // Adiciona o token no cabeçalho
        },
      });
      setGames(response.data.games);
    } catch (error) {
      console.error("Erro ao obter games: ", error);
      throw error;
    }
  };

  // Função para deletar o jogo
  useEffect(() => {
    fetchGames();
    setLoading(false);
  }, []);

  // Função para deletar o jogo
  const handleDelete = async (gameId) => {
    try {
      const token = localStorage.getItem("authToken"); // Recupera o token
      await axios.delete(`${url}/game/${gameId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Adiciona o token no cabeçalho
        },
      });
      setGames(games.filter((game) => game._id !== gameId));
    } catch (error) {
      console.error("Erro ao deletar o jogo: ", error);
    }
  };
  

  // const handleEdit = (gameId) => {
  //   router.push(`/edit/${gameId}`); // Navega para a página de edição com o ID do jogo
  // };
  

  return (
    <>
      <div className={styles.homeContent}>
        {/* CARD LISTA DE JOGOS */}
        <div className={styles.listGamesCard}>
          {/* TITLE */}
          <div className={styles.title}>
            <h2>Lista de jogos</h2>
          </div>

          {/* Componente Loading */}

          {loading ? (
            <Loading loading={loading} />
          ) : (
            <div className={styles.games} id={styles.games}>
              {/* Lista de jogos. Começar o map aqui */}
              {games.map((game) => (
                <ul key={game._id} className={styles.listGames}>
                  <div className={styles.gameImg}>
                    <img
                      src="./images/game_cd_cover.png"
                      alt="Jogo em estoque"
                    />
                  </div>
                  <div className={styles.gameInfo}>
                    <h3>Título: {game.title} </h3>
                    {game.descriptions.map((desc, index) => (
                      <div key={index}>
                        <li>Plataforma: {desc.platform}</li>
                        <li>Gênero: {desc.genre}</li>
                        <li>Avaliação: {desc.rating}</li>
                      </div>
                    ))}
                    <li>Ano: {game.year} </li>
                    <li>Preço: R${game.price}</li>

                    {/* <button className={styles.btnEdit} onClick={()=>handleEdit(game._id)}>
                      Editar
                    </button> */}
                    &nbsp;
                    <button className={styles.btnDel} onClick={() => handleDelete(game._id)}>
                      Deletar
                    </button>
                  </div>
                </ul>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeContent;
