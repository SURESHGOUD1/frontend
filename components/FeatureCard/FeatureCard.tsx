import styles from './FeatureCard.module.css';

type Props = {
  icon: string;
  title: string;
  desc: string;
};

export default function FeatureCard({ icon, title, desc }: Props) {
  return (
    <div className={styles.card}>
      <img src={icon} alt="" />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
