import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import {
  MdArrowForwardIos,
  MdHomeFilled,
  MdArrowBackIosNew,
} from "react-icons/md";

export default function LegRaises() {
  return (
    <div>
      <div className={styles.abdy}>
        <div className={styles.bbdy}>
          <div className={styles.absb}>
            <div className={styles.phoneView}>
              <Image
                style={{ borderRadius: "20px" }}
                alt="guy"
                src={"/absi.jpeg"}
                height={170}
                width={320}
                className={styles.im}
              />
            </div>
            <div className={styles.absInt}>ABS INTERMEDIATE</div>

            <Link href={"/"}>
              <button className={styles.back7}>
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
            <h4 className={styles.bgsetabs}>Leg Raises</h4>
            <hr className={styles.vrabsb} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.time}>▼10 mins • 11 workouts</h5>
          </div>
          <hr className={styles.vr} />

          <div className={styles.animation}>
            {" "}
            <Image
              alt="guy with the greates image ever"
              src={"/legraiseGif.gif"}
              height={200}
              width={200}
            />
          </div>
          <div className={styles.jumtim}>x14</div>

          <div className={styles.backWard}>
            <Link href={"/ABSINTERMEDIATE/heelTouch"}>
              <MdArrowBackIosNew />
            </Link>
          </div>
          <div className={styles.forWard}>
            <Link href={"/ABSINTERMEDIATE/plank"}>
              <MdArrowForwardIos />
            </Link>
          </div>
          <h5 className={styles.doneOutOfRemaining}>6 out of 10</h5>
        </div>
      </div>
    </div>
  );
}
