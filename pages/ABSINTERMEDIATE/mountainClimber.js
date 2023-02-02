import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import {
  MdArrowForwardIos,
  MdHomeFilled,
  MdArrowBackIosNew,
} from "react-icons/md";

export default function MountainClimber() {
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
                className={styles.absIntermediateWorkOutDemonstrationImage}
              />
            </div>
            <div className={styles.absIntermediateWorkOutDemonstration}>
              ABS INTERMEDIATE
            </div>

            <Link href={"/"}>
              <button
                className={styles.absIntermediateWorkOutDemonstrationBackButton}
              >
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
            <h4 className={styles.absIntermediateWorkOutDemonstrationName}>
              Mountain Climber
            </h4>
            <hr
              className={
                styles.absIntermediateWorkOutDemonstrationHorizontalLine
              }
            />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.absIntermediateWorkOutTime}>
              ▼10 mins • 11 workouts
            </h5>
          </div>
          <hr className={styles.vr} />

          <div className={styles.animation}>
            {" "}
            <Image
              alt="guy with the greates image ever"
              src={"/mountainclimberGif.gif"}
              height={200}
              width={200}
            />
          </div>
          <div className={styles.jumtim}>x16</div>

          <div className={styles.backWard}>
            <Link href={"/ABSINTERMEDIATE/russianTwist"}>
              <MdArrowBackIosNew />
            </Link>
          </div>
          <div className={styles.forWard}>
            <Link href={"/ABSINTERMEDIATE/heelTouch"}>
              <MdArrowForwardIos />
            </Link>
          </div>
          <h5 className={styles.doneOutOfRemaining}>4 out of 10</h5>
        </div>
      </div>
    </div>
  );
}
