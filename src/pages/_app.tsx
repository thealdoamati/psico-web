import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./layout"; // Importe seu componente Layout personalizado
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>Psicóloga Hellen Pereira | Especialista em ABA e TCC</title>
        <meta
          name="description"
          content="Psicóloga Hellen Pereira, especializada em Análise do Comportamento Aplicada (ABA) e Terapia Cognitivo-Comportamental (TCC). Atendimento personalizado para crianças e adultos em São Paulo."
        ></meta>
        <meta
          name="keywords"
          content="Psicologia, ABA, TCC, Terapia, Psicóloga Hellen Pereira, Terapia Comportamental, São Paulo"
        ></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Psicóloga Hellen Pereira | Especialista em ABA e TCC" />
        <meta
          property="og:description"
          content="Descubra como a Terapia ABA e TCC com a Psicóloga Hellen Pereira pode ajudar no desenvolvimento pessoal e melhorar a qualidade de vida."
        />
        <meta property="og:url" content="URL_DO_SITE_AQUI" />
        <meta property="og:image" content="URL_DA_IMAGEM_DE_DESTAQUE_AQUI" />
        <meta property="og:image:alt" content="Consultório da Psicóloga Hellen Pereira" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
