import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import './Header.css'

export function Header() {
  return (
    <section className="container">
      <section className="left-section">
        <h2>Easywrites</h2>
      </section>
      <section className="middle-section">
        <button>+ New Note</button>
      </section>
      <section className="right-section">
        <button>
          <FontAwesomeIcon icon={faGear} /> Settings
        </button>
      </section>
    </section>
  );
}
