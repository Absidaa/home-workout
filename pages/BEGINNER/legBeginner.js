import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

function absBeginner() {
  const handleClick = (e, path) => {
    if (path === "/absBigStart") {
      console.log(`I clicked on it`);
    }
  };
  return (
    <div className={styles.bdy}>
      <div className={styles.bbdy}>
        <div className={styles.arbak}>
          <Image
            alt="guy"
            src={"/leg.jpeg"}
            height={150}
            width={300}
            className={styles.im4}
          />
          <div className={styles.leg1}>LEG BEGINNER</div>

          <Link href={"/"}>
            <button className={styles.back4}>←</button>
          </Link>
          <h4 className={styles.bgset3}>Set of Workouts</h4>
          <hr className={styles.vrl} />
        </div>
        <div className={styles.worksb} class="card">
          <h5 className={styles.time}>▼26 mins• 23 workouts</h5>
        </div>
        <hr className={styles.vr} />

        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/jupjak.jpeg"
          height={80}
          width={80}
        />
        <div className={styles.bplk}>SIDE HOP</div>
        <div className={styles.x}> 00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/crun.jpeg"
          height={80}
          width={80}
        />
        <div className={styles.bplk}>SQUATS</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/rutwist.png"
          height={80}
          width={80}
        />
        <div className={styles.bplk}>SQUATS</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/moclim.jpg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>SIDE-LYING LEG LIFT LEFT</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/htouch.jpg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>SIDE-LYING LEG LIFT RIGHT</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/lraise.jpg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>SIDE-LYING LEG LIFT LEFT</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/plak.jpeg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>SIDE-LYING LEG LIFT RIGHT</div>
        <div className={styles.sec}>x12</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/costreh.jpg"
          height={80}
          width={80}
        />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/rigt.jpeg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>BACKWARD LUNGE</div>
        <div className={styles.x}>X14</div>
        <hr className={styles.vrs} />

        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/rutwist.png"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>BACKWARD LUNGE</div>
        <div className={styles.x}>x14</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/moclim.jpg"
          height={80}
          width={80}
        />

        <div className={styles.jjak}>DONKEY KICKS LEFT</div>
        <div className={styles.x}>x16</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/htouch.jpg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>DONKEY KICKS RIGHT</div>
        <div className={styles.x}>x16</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/lraise.jpg"
          height={80}
          width={80}
        />

        <div className={styles.jjak}>DONKEY KICKS LEFT</div>
        <div className={styles.x}>x16</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/plak.jpeg"
          height={80}
          width={80}
        />

        <div className={styles.jjak}>DONKEY KICKS RIGHT</div>
        <div className={styles.sec}>x16</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/costreh.jpg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>LEFT QUAD STRETCH WITH WALL</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/lft.jpg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>RIGHT QUAD STRETCH WITH WALL</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/rigt.jpeg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>KNEE TO CHEST STRETCH LEFT</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/lraise.jpg"
          height={80}
          width={80}
        />

        <div className={styles.jjak}>KNEE TO CHEST STRETCH RIGHT</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/plak.jpeg"
          height={80}
          width={80}
        />

        <div className={styles.jjak}>WALL CALF RAISES</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/costreh.jpg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>WALL CALF RAISES</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/lft.jpg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>SUMO SQUAT CALF RAISES WITH WALL</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/rigt.jpeg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>CALF STRETCH LEFT</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/rigt.jpeg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>CALF STRETCH RIGHT</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />

        <Link href={"/absBigStart"}>
          <button className={styles.btn}>
            <div onClick={(e) => handleClick(e, "absBigStart")}>START</div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default absBeginner;
