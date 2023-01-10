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
      </div>
    </>
  );
}
