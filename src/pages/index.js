import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Container from "@/components/Container";
import LoginContent from "@/components/LoginContent";
import Footer from "@/components/Footer";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // Se já estiver logado, redireciona para a página home
      router.push("/home");
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>The Games &copy; 2024</title>
        <meta name="description" content="Consumo em React de uma API de Games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <LoginContent />
        </Container>
      </main>
      <Footer />
    </>
  );
}
