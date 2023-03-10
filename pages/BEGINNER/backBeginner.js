import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function BackBeginner() {
  const handleClick = (e, path) => {
    if (path === "/absBigStart") {
      console.log(`I clicked on it`);
    }
  };
  return (
    <div className={styles.bdy}>
      <div className={styles.bbdy}>
        <div className={styles.arbak}>
          <div className={styles.phoneView}>
            <Image
              style={{ borderRadius: "20px", position: "stick" }}
              alt="guy"
              src={"/back.webp"}
              height={200}
              width={320}
              className={styles.backBeginnerLayOutImage}
            />
          </div>
          <div className={styles.backBeginnerLayOut}>BACK BEGINNER</div>

          <Link href={"/"}>
            <button className={styles.backBeginnerLayOutBackButton}>
              <div>←</div>
            </button>
          </Link>
          <h4 className={styles.backBeginnerSetOfWorkOut}>Set of Workouts</h4>
          <hr className={styles.backBeginnerLayOutHorizontalLine} />
        </div>
        <div className={styles.worksb} class="card">
          <h5 className={styles.backBeginnerLayOutTime}>
            ▼11 mins • 12 workouts
          </h5>
        </div>
        <hr className={styles.vr} />

        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/jupjak.jpeg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>JUMPING JACKS</div>
        <div className={styles.sec}> 00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/armRaises.jpeg"
          height={80}
          width={80}
        />
        <div className={styles.btwist}>ARM RAISES</div>
        <div className={styles.sec}>00:16</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/rhomboidPulls.jpeg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>RHOMBOID PULLS</div>
        <div className={styles.x}>x14</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/sidarm.jpg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>SIDE ARM RAISES</div>
        <div className={styles.sec}>00:16</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/knepush.jpg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>KNEE PUSH-UPS</div>
        <div className={styles.x}>x14</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/sideLiftLeft.jpeg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>SIDE-FLOOR FLOOR STRETCH LEFT</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/sideLiftRight.jpeg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>SIDE-FLOOR FLOOR STRETCH RIGHT</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/armScissors.jpeg"
          height={80}
          width={80}
        />

        <div className={styles.jjak}>ARM SCISSORS</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />

        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/catCow.jpeg"
          height={80}
          width={80}
        />

        <div className={styles.jjak}>CAT COW POSE</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/proneTriceps.jpg"
          height={80}
          width={80}
        />

        <div className={styles.jjak}>PRONE TRICEPS PUSH-UPS</div>
        <div className={styles.x}>x14</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/reclineRhomboid.jpeg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>RECLINED RHOMBOID SQUEEZES</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/childPose.jpeg"
          height={80}
          width={80}
        />
        <div className={styles.btwist}>CHILD&apos;S POSE</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />

        <Link href={"/backBigStart"}>
          <button className={styles.btn}>
            <div onClick={(e) => handleClick(e, "absBigStart")}>START</div>
          </button>
        </Link>
      </div>
    </div>
  );
}
