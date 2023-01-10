import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
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
          <div className={styles.cad} class="card">
            <Image
              style={{ borderRadius: "8.5px" }}
              src="/armwork.jpeg"
              height={137}
              width={275}
            />
          </div>
          <div className={styles.cad} class="card">
            <Image
              style={{ borderRadius: "8.5px" }}
              src="/legwork.jpeg"
              height={137}
              width={275}
            />
          </div>
          <div className={styles.cad} class="card">
            <Image
              style={{ borderRadius: "8.5px" }}
              src="/backwork.jpeg"
              height={137}
              width={275}
            />
          </div>
          <h4 className={styles.int}>INTERMEDIATE</h4>
          <div className={styles.cad} class="card">
            <Image
              style={{ borderRadius: "8.5px" }}
              src="/absinter.jpeg"
              height={137}
              width={275}
            />
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/chestint.jpeg"
                height={137}
                width={275}
              />
            </div>
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/armint.jpeg"
                height={137}
                width={275}
              />
            </div>
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/legint.jpeg"
                height={137}
                width={275}
              />
            </div>
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/backint.jpeg"
                height={137}
                width={275}
              />
            </div>
            <h4 className={styles.adv}>ADVANCED</h4>
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/advwk.jpeg"
                height={137}
                width={275}
              />
            </div>
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/advches.jpeg"
                height={137}
                width={275}
              />
            </div>
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/armadv.jpeg"
                height={137}
                width={275}
              />
            </div>
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/legadv.jpeg"
                height={137}
                width={275}
              />
            </div>
            <div className={styles.cad} class="card">
              <Image
                style={{ borderRadius: "8.5px" }}
                src="/backadv.jpeg"
                height={137}
                width={275}
              />
            </div>
            <div className={styles.cad} class="card">
              discover more workout
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
