import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import SessionProvider from "next-auth";

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    // <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    // </SessionProvider>
  );
}
