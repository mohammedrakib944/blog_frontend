import "@/styles/globals.css";
import Layout from "@/components/common/Layout";
import { ContextProdiver } from "@/context/context";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  return (
    <ContextProdiver>
      <NextNProgress color="#50fa7b" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProdiver>
  );
}
