import "../styles/globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";

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
      <Component {...pageProps} />
      <link
        href="https://fonts.googleapis.com/css2?family=Acme&family=Lato:wght@700&family=Roboto:wght@300&family=Seymour+One&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
