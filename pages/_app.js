import "../styles/globals.css";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  return (
    <>
      <div>
        <Navbar />
        <Component {...pageProps} />
        <link
          href="https://fonts.googleapis.com/css2?family=Acme&family=Lato:wght@700&family=Roboto:wght@300&family=Seymour+One&display=swap"
          rel="stylesheet"
        />
      </div>
    </>
  );
}
