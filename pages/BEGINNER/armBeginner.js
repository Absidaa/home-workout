import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ArmBeginner() {
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
              style={{ borderRadius: "20px" }}
              alt="guy"
              src={"/ar.jpeg"}
              height={170}
              width={320}
              className={styles.im2}
            />
          </div>
          <div className={styles.arm}>ARM BEGINNER</div>
          <Link href={"/"}>
            <button className={styles.back}>
              <div>←</div>
            </button>
          </Link>
          <h4 className={styles.bgset} style={{ fontSize: "16px" }}>
            Set of workouts
          </h4>
          <hr className={styles.vrr} />
        </div>
        <div className={styles.worksb} class="card">
          <h5 className={styles.time}>▼14 mins • 16 workouts</h5>
        </div>
        <hr className={styles.vr} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/armraises.webp"
          height={80}
          width={80}
        />
        <div className={styles.barm}>ARM RAISES</div>
        <div className={styles.sec}> 00:30</div>
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
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/dips.jpg"
          height={80}
          width={80}
        />
        <div className={styles.barm}>TRICEPS DIPS</div>
        <div className={styles.x}>x10</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/acirc.webp"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>ARM CIRCLES CLOCKWISE</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/acirc.webp"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>ARM CIRCLES COUNTER CLOCKWISE</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/dups.jpg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>DIAMOND PUSH-UPS</div>
        <div className={styles.x}>x6</div>
        <hr className={styles.vrs} />
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
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />

        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/diaplak.png"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>DIAGONAL PLANK</div>
        <div className={styles.x}>x10</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/puch.png"
          height={80}
          width={80}
        />
        <div className={styles.bpun}>PUNCHES</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/pushu.png"
          height={80}
          width={80}
        />
        <div className={styles.bups}>PUSH-UPS</div>
        <div className={styles.x}>x10</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/wor.jpg"
          height={80}
          width={80}
        />
        <div className={styles.binch}>INCHWORMS</div>
        <div className={styles.x}>x8</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/walbox.webp"
          height={80}
          width={80}
        />
        <div className={styles.bwal}>WALL PUSH-UPS</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          alt="the pic of the greatest guy ever"
          src="/tsrelf2.jpeg"
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
          src="/tsrelf.jpeg"
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
          src="/stbice2.jpeg"
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
          src="/stbice.jpeg"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>STANDING BICEPS STRETCH RIGHT</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />
        <Link href={"/armBigStart"}>
          <button className={styles.btn}>
            <div onClick={(e) => handleClick(e, "absBigStart")}>START</div>
          </button>
        </Link>
      </div>
    </div>
  );
}
