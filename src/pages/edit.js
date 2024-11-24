import { useRouter } from "next/router";
import EditGame from "@/components/EditGame";

export default function Edit() {
  const router = useRouter();
  const { id } = router.query; // Captura o parâmetro 'id' da URL

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      // Se não houver token, redireciona para a página de login
      router.push("/");
    }
  }, [router]);

  
  if (!id) {
    return <div>Carregando...</div>; // Renderiza algo enquanto o ID ainda não está disponível
  }

  return (
    <main>
      <EditGame id={id} />
    </main>
  );
}
