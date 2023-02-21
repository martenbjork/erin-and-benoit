import Image from "next/image";
import theMorningAfter from "./the-morning-after.svg";
import styles from "../styles/TheMorningAfter.module.scss";

export default function TheMorningAfter() {
  return (
    <div className={styles.TheMorningAfter}>
      <Image src={theMorningAfter} alt="The Morning After" />

      <p>
        Thanks so much for travelling to our wedding! We hope you can join us
        for a cup of coffee, and some pastries.
      </p>

      <p>9-11am</p>

      <p>
        Holiday Inn Gatineau
        <br />7 Bd du Casino, Gatineau, QC
      </p>

      <p>
        <a href="https://forms.gle/7Uo9Rw1iEhwLGbfw7">RVSP</a>
      </p>

      <p>Follow signs for Erin & Benoit</p>
    </div>
  );
}
