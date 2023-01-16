import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

function absBeginner() {
  const handleClick = (e, path) => {
    if (path === "/absBigStart") {
      console.log(`I clicked on it`);
    }
  };
  return (
    <div className={styles.bdy}>
      <div className={styles.bbdy}>
        <div className={styles.absb}>
          <Image
            alt="guy"
            src={"/backi.jpeg"}
            height={150}
            width={280}
            className={styles.im9}
          />
          <div className={styles.abs6}>BACK INTERMEDIATE</div>

          <Link href={"/"}>
            <button className={styles.back8}>←</button>
          </Link>
          <h4 className={styles.bgset9}>Set of workouts</h4>
          <hr className={styles.vrbac} />
        </div>
        <div className={styles.worksb} class="card">
          <h5 className={styles.time}>▼14 mins • 12 workouts</h5>
        </div>
        <hr className={styles.vr} />

        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/jumpingjackGif.gif"
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
          src="/tricepKickBackGif.webp"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>TRICEPS KICKBACKS</div>
        <div className={styles.x}>x14</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/InclinePushUpGif.webp"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>INCLINE PUSH-UPS</div>
        <div className={styles.x}>x14</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/roboidPullGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>RHOMBOID PULLS</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/TricepsDipsGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>FLOOR TRICEP DIPS</div>
        <div className={styles.x}>x16</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/catCowGif.webp"
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
          src="/hipHingeGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.bleg}>HIP HINGE</div>
        <div className={styles.x}>x10</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/sideLyingFloorRightGif.gif"
          height={80}
          width={80}
        />

        <div className={styles.jjak}>SIDE LYING FLOOR STRETCH LEFT</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />

        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/sideLiftLeft.jpeg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>SIDE LYING FLOOR STRETCH RIGHT</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/hoverPushUpGif.gif"
          height={80}
          width={80}
        />

        <div className={styles.jjak}>HOVER PUSH-UPS</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/SwimmerSupermanGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>SWIMMER AND SUPERMAN</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/childPoseGif.gif"
          height={80}
          width={80}
        />

        <div className={styles.jjak}>CHILD'S POSE</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />

        <Link href={"/BACKINTERMEDIATE/backInterStart"}>
          <button className={styles.btn}>
            <div onClick={(e) => handleClick(e, "backinterStart")}>START</div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default absBeginner;
