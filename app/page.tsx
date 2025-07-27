import Header from '../components/Header/Header';
import FeatureCard from '../components/FeatureCard/FeatureCard';
import DownloadCta from '../components/DownloadCta/DownloadCta';
import { features } from '../data/features';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main>
      <Header />
      <section className={styles.features} id="features">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </section>
      <DownloadCta />
    </main>
  );
}
