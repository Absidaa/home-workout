import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function BackInterMediate() {
  const handleClick = (e, path) => {
    if (path === "/absBigStart") {
      console.log(`I clicked on it`);
    }
  };
  return (
    <div className={styles.bdy}>
      <div className={styles.bbdy}>
        <div className={styles.absb}>
          <div className={styles.phoneView}>
            <Image
              style={{ borderRadius: "20px" }}
              alt="guy"
              src={"/backi.jpeg"}
              height={170}
              width={308}
              className={styles.im11}
            />
          </div>
          <div className={styles.abs3}>BACK INTERMEDIATE</div>

          <Link href={"/"}>
            <button className={styles.back9}>
              <div>←</div>
            </button>
          </Link>
          <h4 className={styles.bgsetabs}>Set of workouts</h4>
          <hr className={styles.vrabsb} />
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
          alt="the pic of the greatest guy ever"
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
          alt="the pic of the greatest guy ever"
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
          alt="the pic of the greatest guy ever"
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
          alt="the pic of the greatest guy ever"
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
          alt="the pic of the greatest guy ever"
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
          alt="the pic of the greatest guy ever"
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
          alt="the pic of the greatest guy ever"
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
          alt="the pic of the greatest guy ever"
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
          alt="the pic of the greatest guy ever"
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
          alt="the pic of the greatest guy ever"
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
          alt="the pic of the greatest guy ever"
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
          alt="the pic of the greatest guy ever"
          src="/childPoseGif.gif"
          height={80}
          width={80}
        />

        <div className={styles.jjak}>CHILD&apos;S POSE</div>
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
