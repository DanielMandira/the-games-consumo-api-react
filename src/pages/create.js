import Head from "next/head";
import Container from "@/components/Container";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import CreateContent from "@/components/CreateContent";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Homepage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      // Se não houver token, redireciona para a página de login
      router.push("/");
    }
  }, [router]);
  return (
    <>
      <Head>
        <title>Criar Novo Jogo</title>
        <meta name="description" content="Página para cadastrar um novo jogo" />
      </Head>
      <main>
        <Menu />
        <Container>
          <CreateContent />
        </Container>
      </main>
      <Footer />
    </>
  );
}
