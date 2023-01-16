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
          <h1>Home Workout</h1>
          <h4 className={styles.begin}>BEGINNER</h4>
          <div>
            <Link href={"BEGINNER/absBeginner"}>
              <div className={styles.cad} class="card">
                <Image
                  alt="the greates worout ever"
                  style={{ borderRadius: "8.5px" }}
                  src="/absbeginner.jpg"
                  height={137}
                  width={275}
                />
              </div>
            </Link>
            <div className={styles.abbin}>ABS BEGINNER</div>
          </div>
          <div>
            <Link href={"BEGINNER/chestBeginner"}>
              <div className={styles.cad} class="card">
                <Image
                  style={{ borderRadius: "8.5px" }}
                  src="/chet.jpeg"
                  height={137}
                  width={275}
                />
              </div>
            </Link>
            <div className={styles.chest}>CHEST BEGINNER</div>
          </div>
          <div>
            <Link href={"BEGINNER/armBeginner"}>
              <div className={styles.cad} class="card">
                <Image
                  style={{ borderRadius: "8.5px" }}
                  src="/armwork.jpeg"
                  height={137}
                  width={275}
                />
              </div>
            </Link>
            <div className={styles.armb}>ARM BEGINNER</div>
          </div>
          <div>
            <Link href={"BEGINNER/legBeginner"}>
              <div className={styles.cad} class="card">
                <Image
                  style={{ borderRadius: "8.5px" }}
                  src="/legwork.jpeg"
                  height={137}
                  width={275}
                />
              </div>
            </Link>
            <div className={styles.legb}>LEG BEGINNER</div>
          </div>
          <div>
            <Link href={"BEGINNER/backBeginner"}>
              <div className={styles.cad} class="card">
                <Image
                  style={{ borderRadius: "8.5px" }}
                  src="/backwork.jpeg"
                  height={137}
                  width={275}
                />
              </div>
            </Link>
            <div className={styles.backb}>BACK BEGINNER</div>
          </div>
          <h4 className={styles.int}>INTERMEDIATE</h4>
          <div>
            <Link href={"INTERMEDIATE/absIntermediate"}>
              <div className={styles.cad} class="card">
                <Image
                  style={{ borderRadius: "8.5px" }}
                  src="/absinter.jpeg"
                  height={137}
                  width={275}
                />
              </div>
            </Link>
            <div className={styles.absi}>ABS INTERMEDIATE</div>
          </div>
          <div>
            <Link href={"INTERMEDIATE/chestIntermediate"}>
              <div className={styles.cad} class="card">
                <Image
                  style={{ borderRadius: "8.5px" }}
                  src="/chestint.jpeg"
                  height={137}
                  width={275}
                />
              </div>
            </Link>
            <div className={styles.chesti}>CHEST INTERMEDIATE</div>
          </div>
          <div>
            <Link href={"INTERMEDIATE/armIntermediate"}>
              <div className={styles.cad} class="card">
                <Image
                  style={{ borderRadius: "8.5px" }}
                  src="/armint.jpeg"
                  height={137}
                  width={275}
                />
              </div>
            </Link>
            <div className={styles.armi}>ARM INTERMEDIATE</div>
          </div>
          <div>
            <Link href={"INTERMEDIATE/legIntermediate"}>
              <div className={styles.cad} class="card">
                <Image
                  style={{ borderRadius: "8.5px" }}
                  src="/legint.jpeg"
                  height={137}
                  width={275}
                />
              </div>
            </Link>
            <div className={styles.legi}>LEG INTERMEDIATE</div>
          </div>
          <div>
            <Link href={"INTERMEDIATE/backIntermediate"}>
              <div className={styles.cad} class="card">
                <Image
                  style={{ borderRadius: "8.5px" }}
                  src="/backint.jpeg"
                  height={137}
                  width={275}
                />
              </div>
            </Link>
            <div className={styles.backi}>BACK INTERMEDIATE</div>
          </div>
          <h4 className={styles.adv}>ADVANCED</h4>
          <div>
            <Link href={"ADVANCED/absAdvanced"}>
              <div className={styles.cad} class="card">
                <Image
                  style={{ borderRadius: "8.5px" }}
                  src="/advwk.jpeg"
                  height={137}
                  width={275}
                />
              </div>
            </Link>
            <div className={styles.absa}>ABS ADVANCED</div>
          </div>
          <div>
            <Link href={"ADVANCED/chestAdvanced"}>
              <div className={styles.cad} class="card">
                <Image
                  style={{ borderRadius: "8.5px" }}
                  src="/chesta.jpeg"
                  height={137}
                  width={275}
                />
              </div>
            </Link>
            <div className={styles.chesta}>CHEST ADVANCED</div>
          </div>
          <div>
            <Link href={"ADVANCED/armAdvanced"}>
              <div className={styles.cad} class="card">
                <Image
                  style={{ borderRadius: "8.5px" }}
                  src="/armadv.jpeg"
                  height={137}
                  width={275}
                />
              </div>
            </Link>
            <div className={styles.arma}>ARM ADVANCED</div>
          </div>
          <div>
            <Link href={"ADVANCED/legAdvanced"}>
              <div className={styles.cad} class="card">
                <Image
                  style={{ borderRadius: "8.5px" }}
                  src="/legadv.jpeg"
                  height={137}
                  width={275}
                />
              </div>
            </Link>
            <div className={styles.lega}>LEG ADVANCED</div>
          </div>
          <div>
            <Link href={"ADVANCED/backAdvanced"}>
              <div className={styles.cad} class="card">
                <Image
                  style={{ borderRadius: "8.5px" }}
                  src="/backadv.jpeg"
                  height={137}
                  width={275}
                />
              </div>
            </Link>
            <div className={styles.backa}>BACK ADVANCED</div>
          </div>
        </main>
      </div>
    </>
  );
}
