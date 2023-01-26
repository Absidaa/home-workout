import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function ArmInterMediate() {
  const handleClick = (e, path) => {
    if (path === "/armInterStart") {
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
              src={"/armi.jpeg"}
              height={155}
              width={310}
              className={styles.im}
            />
          </div>
          <div className={styles.abs4}>ARM INTERMEDIATE</div>

          <Link href={"/"}>
            <button className={styles.back8}>
              <div>←</div>
            </button>
          </Link>
          <h4 className={styles.bgset7}>Set of workouts</h4>
          <hr className={styles.vrabsb} />
        </div>
        <div className={styles.worksb} class="card">
          <h5 className={styles.time}>▼11 mins • 13 workouts</h5>
        </div>
        <hr className={styles.vr} />

        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/ArmCirclesGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.btwist}>ARM CIRCLES</div>
        <div className={styles.sec}> 00:30</div>
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
        <div className={styles.x}>x14</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/militaryPushUpGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>MILITARY PUSH-UPS</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/AlternatingHooksGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>ALTERNATING HOOKS</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/pushUpRotationGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>PUSH-UPS & ROTATION</div>
        <div className={styles.sec}>x12</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/skipWitouRopeGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>SKIP WITHOUT ROPE</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/PushUpGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.bleg}>PUSH-UPS</div>
        <div className={styles.sec}>X14</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/burpeeGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.bleg}>BURPBEES</div>
        <div className={styles.x}>X10</div>
        <hr className={styles.vrs} />

        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/amrScissorsGif.webp"
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
          src="/tricepsStretchLeftGif.png"
          height={80}
          width={80}
        />

        <div className={styles.jjak}>TRICEPS STRETCH LEFT</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/tricepStretchRightGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>TRICEPS STRETCH RIGHT</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/stbice.jpeg"
          height={80}
          width={80}
        />

        <div className={styles.jjak}>STANDING BICEPS STRETCH LEFT</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/stbice2.jpeg"
          height={80}
          width={80}
        />

        <div className={styles.jjak}>STANDING BICEPS STRETCH RIGHT</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />

        <Link href={"/ARMINTERMEDIATE/armInterStart"}>
          <button className={styles.btn}>
            <div onClick={(e) => handleClick(e, "armInterStart")}>START</div>
          </button>
        </Link>
      </div>
    </div>
  );
}
