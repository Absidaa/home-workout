import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function LegInterMediate() {
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
              src={"/legin.jpeg"}
              height={170}
              width={320}
              className={styles.legIntermediateLayOutImage}
            />
          </div>
          <div className={styles.legIntermediateLayOut}>LEG INTERMEDIATE</div>

          <Link href={"/"}>
            <button className={styles.legIntermediateLayOutBackButton}>
              <div>←</div>
            </button>
          </Link>
          <h4 className={styles.legIntermediateSetOfWorkOut}>
            Set of workouts
          </h4>
          <hr className={styles.legIntermediateLayOutHorizontalLine} />
        </div>
        <div className={styles.worksb} class="card">
          <h5 className={styles.legIntermediateLayOutTime}>
            ▼19 mins• 17 workouts
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
          src="/squatGif.gif"
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
          alt="the pic of the greatest guy ever"
          src="/fireHydrantLeftGif.webp"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>FIRE HYDRANTE LEFT</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/fireHydrantGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>FIRE HYDRANT RIGHT</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />

        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/lungeGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.bplk}>LUNGES</div>
        <div className={styles.x}>x14</div>
        <hr className={styles.vrs} />

        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/sumoSquatGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.bleg}>SUMO SQUAT</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/flutterKicksGif.gif"
          height={80}
          width={80}
        />

        <div className={styles.jjak}>FLUTTER KICKS </div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />

        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/wallsitGif.gif"
          height={80}
          width={80}
        />

        <div className={styles.bleg}>WALL SIT</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/quadLeftGif.gif"
          height={80}
          width={80}
        />

        <div className={styles.jjak}>LEFT QUAD STRETCH </div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/quad.gif"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>RIGHT QUAD STRECH</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/kneeToChestGif.gif"
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
          alt="the pic of the greatest guy ever"
          src="/kneeToChestRightGif.jpeg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>KNEE TO CHEST STRECH RIGHT</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />

        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/CalfRaisesGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>CALVES RAISES SPLAYED FOOT</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/SingleLegCalfRaisesGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>SINGLE LEG CALF HOP LEFT</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/SingleLegCalfRaisesGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>SINGLE CALF HOP RIGHT</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />

        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/calfStretchLeft.jpeg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}> CALF STRETCH LEFT</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/calfStretchRight.jpeg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}> CALF STRETCH RIGHT</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />

        <Link href={"/LEGINTERMEDIATE/legInterStart"}>
          <button className={styles.btn}>
            <div onClick={(e) => handleClick(e, "legInterStart")}>START</div>
          </button>
        </Link>
      </div>
    </div>
  );
}
