import Button from "@/components/atoms/Button";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main} style={{ backgroundColor: "#000" }}>
      <Button text="Hossam" />

      <Button text="Sherif" variant="secondary" />

      <Button text="Hossam" />
    </main>
  );
}
