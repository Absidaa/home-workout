import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

function absBeginner() {
  const handleClick = (e, path) => {
    if (path === "/absInterStart") {
      console.log(`I clicked on it`);
    }
  };
  return (
    <div className={styles.bdy}>
      <div className={styles.bbdy}>
        <div className={styles.absb}>
          <Image
            alt="guy"
            src={"/absi.jpeg"}
            height={150}
            width={300}
            className={styles.im11}
          />
          <div className={styles.abs2}>ABS INTERMEDIATE</div>

          <Link href={"/"}>
            <button className={styles.back6}>
              <div>←</div>
            </button>
          </Link>
          <h4 className={styles.bgset5}>Set of workouts</h4>
          <hr className={styles.vrabi} />
        </div>
        <div className={styles.worksb} class="card">
          <h5 className={styles.time}>▼10 mins • 10 workouts</h5>
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
        <div className={styles.sec}> 00:20</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
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

export default absBeginner;
