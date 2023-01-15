import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

function absBeginner() {
  const handleClick = (e, path) => {
    if (path === "/armInterStart") {
      console.log(`I clicked on it`);
    }
  };
  return (
    <div className={styles.bdy}>
      <div className={styles.bbdy}>
        <div className={styles.absb}>
          <Image
            alt="guy"
            src={"/armi.jpeg"}
            height={150}
            width={270}
            className={styles.im7}
          />
          <div className={styles.abs4}>ARM INTERMEDIATE</div>

          <Link href={"/"}>
            <button className={styles.back8}>
              <div>←</div>
            </button>
          </Link>
          <h4 className={styles.bgset7}>Set of workouts</h4>
          <hr className={styles.vrarm} />
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
          src="/jupjak.jpeg"
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
          src="/crun.jpeg"
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
          src="/rutwist.png"
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
          src="/moclim.jpg"
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
          src="/htouch.jpg"
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
          src="/lraise.jpg"
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
          src="/plak.jpeg"
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
        <div className={styles.bleg}>BURPBEES</div>
        <div className={styles.x}>X10</div>
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
        <div className={styles.jjak}>ARM SCISSORS</div>
        <div className={styles.sec}>00:30</div>
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

        <div className={styles.jjak}>TRICEPS STRETCH LEFT</div>
        <div className={styles.sec}>00:30</div>
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
        <div className={styles.jjak}>TRICEPS STRETCH RIGHT</div>
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

        <div className={styles.jjak}>STANDING BICEPS STRETCH LEFT</div>
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

        <div className={styles.jjak}>STANDING BICEPS STRETCH RIGHT</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />

        <Link href={"/armInterStart"}>
          <button className={styles.btn}>
            <div onClick={(e) => handleClick(e, "armInterStart")}>START</div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default absBeginner;
