import styles from './DownloadCta.module.css';

export default function DownloadCta() {
  return (
    <section className={styles.cta} id="download">
      <h2>Get the App Now</h2>
      <p>Download on iOS or Android and join millions of users.</p>
      <div className={styles.buttons}>
        <button>App Store</button>
        <button>Google Play</button>
      </div>
    </section>
  );
}
