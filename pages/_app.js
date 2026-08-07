import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nexoris Digital | Enterprise IT & Software Solutions</title>
        <meta
          name="description"
          content="Nexoris Digital is a leading IT services company specializing in Cloud Architecture, AI Solutions, Custom Software Engineering, and Enterprise Digital Transformation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col bg-bg-page text-slate-900 selection:bg-blue-500 selection:text-white">
        <Navbar />
        <div className="flex-grow">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}
