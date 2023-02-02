import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function AbsInterMediate() {
  const handleClick = (e, path) => {
    if (path === "/absInterStart") {
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
              src={"/absi.jpeg"}
              height={170}
              width={320}
              className={styles.absIntermediateImage}
            />
          </div>
          <div className={styles.absIntermediateLayOut}>ABS INTERMEDIATE</div>

          <Link href={"/"}>
            <button className={styles.absIntermediateLayOutBackButton}>
              <div>←</div>
            </button>
          </Link>
          <h4 className={styles.absIntermediateSetOfWorkOut}>
            Set of workouts
          </h4>
          <hr className={styles.absIntermediateLayOutHorizontalLine} />
        </div>
        <div className={styles.worksb} class="card">
          <h5 className={styles.absIntermediateLayOutTime}>
            ▼10 mins • 10 workouts
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
        <div className={styles.sec}> 00:20</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            alt: "the pic of the greatest guy ever",
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/crunchGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>ABDOMINAL CRUNCHES</div>
        <div className={styles.x}>x16</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/russiantwistGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.btwist}>RUSSIAN TWIST</div>
        <div className={styles.x}>x20</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/mountainclimberGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>MOUNTAIN CLIMBER</div>
        <div className={styles.x}>x16</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/heeltouchGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.htoch}>HEEL TOUCH</div>
        <div className={styles.x}>x20</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/legraiseGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.bleg}>LEG RAISES</div>
        <div className={styles.x}>x14</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/plankGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.bplk}>PLANK</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/cobrastretchGif.jpg"
          height={80}
          width={80}
        />

        <div className={styles.jjak}>COBRA STRETCH</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/lft.jpg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>SPINE LUMBER TWIST STRECH LEFT</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/rigt.jpeg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>SPINE LUMBER TWIST STRECH RIGHT</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />

        <Link href={"/ABSINTERMEDIATE/absInterStart"}>
          <button className={styles.btn}>
            <div onClick={(e) => handleClick(e, "absInterStart")}>START</div>
          </button>
        </Link>
      </div>
    </div>
  );
}
