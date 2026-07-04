import styles from "./Welcome.module.css";

export function Welcome() {
  const cards = [
    {
      id: 1,
      icon: "shield_lock",
      title: "End-to-end local",
      text: `Your data won't touch the servers. Heck, we don't even have servers!`,
    },
    {
      id: 1,
      icon: "auto_awesome",
      title: "Local-First AI",
      text: "Intelligent categorization and search running entirely on your CPU.",
    },
    {
      id: 3,
      icon: "database",
      title: "SQLite Powered",
      text: "Industry standard storage that belongs to you. Export anytime.",
    },
  ];

  return (
    <>
      <section className={styles.welcomeContainer}>
        <section className={styles.firstMessage}>
          <span className={`material-symbols-outlined ${styles.brain}`}>
            psychology
          </span>
          <h1>
            EasyWrites - Your private,
            <br /> auto-organizing brain.
          </h1>
          <p>
            <strong>Zero-Server Guarantee.</strong> Your notes are stored
            strictly on this device. No trackers. No cloud leaks. Completely
            free.
          </p>
        </section>
        <button className={styles.welcomeBtn}>
          Enter my Workspace{" "}
          <span class="material-symbols-outlined">arrow_forward</span>
        </button>
      </section>
      <section className={styles.cards}>
        {cards.map((card) => {
          return (
            <div className={styles.card}>
              <span className="material-symbols-outlined material-symbols-outlined-filled">
                {card.icon}
              </span>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}
