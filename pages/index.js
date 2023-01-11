import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />

      <div className={styles.bdy}>
        <main className={styles.main}>
          <h1>Home workout</h1>
          <h4 className={styles.begin}>BEGINNER</h4>
          <Link href={"/absBeginner"}>
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/absbeginner.jpg"
                height={137}
                width={275}
              />
            </div>
          </Link>
          <Link href={"/chestBeginner"}>
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/chestworkout.jpeg"
                height={137}
                width={275}
              />
            </div>
          </Link>
          <Link href={"/armBeginner"}>
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/armwork.jpeg"
                height={137}
                width={275}
              />
            </div>
          </Link>
          <Link href={"/legBeginner"}>
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/legwork.jpeg"
                height={137}
                width={275}
              />
            </div>
          </Link>
          <Link href={"/backBeginner"}>
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/backwork.jpeg"
                height={137}
                width={275}
              />
            </div>
          </Link>
          <h4 className={styles.int}>INTERMEDIATE</h4>
          <Link href={"/absIntermediate"}>
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/absinter.jpeg"
                height={137}
                width={275}
              />
            </div>
          </Link>
          <Link href={"/chestIntermediate"}>
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/chestint.jpeg"
                height={137}
                width={275}
              />
            </div>
          </Link>
          <Link href={"/armIntermediate"}>
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/armint.jpeg"
                height={137}
                width={275}
              />
            </div>
          </Link>
          <Link href={"/legIntermediate"}>
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/legint.jpeg"
                height={137}
                width={275}
              />
            </div>
          </Link>
          <Link href={"/backIntermediate"}>
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/backint.jpeg"
                height={137}
                width={275}
              />
            </div>
          </Link>
          <h4 className={styles.adv}>ADVANCED</h4>
          <Link href={"/absAdvance"}>
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/advwk.jpeg"
                height={137}
                width={275}
              />
            </div>
          </Link>
          <Link href={"/chestAdvance"}>
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/advches.jpeg"
                height={137}
                width={275}
              />
            </div>
          </Link>
          <Link href={"/armAdvance"}>
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/armadv.jpeg"
                height={137}
                width={275}
              />
            </div>
          </Link>
          <Link href={"/legAdvance"}>
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/legadv.jpeg"
                height={137}
                width={275}
              />
            </div>
          </Link>
          <Link href={"/backAdvance"}>
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/backadv.jpeg"
                height={137}
                width={275}
              />
            </div>
          </Link>
        </main>
      </div>
    </>
  );
}
