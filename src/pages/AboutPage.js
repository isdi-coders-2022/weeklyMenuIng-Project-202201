import Infoblock from "../components/Infoblock/Infoblock";
import "./AboutPage.css";
import logo from "./logo.svg";
import githubLogo from "./github-logo.png";

const AboutPage = () => {
  return (
    <>
      <main className="main">
        <Infoblock text="About" />
        <div className="about-main">
          <img src={logo} alt="My Weekly Menu Logo" className="page-logo" />
          <div className="about-container">
            <span className="about-names">
              <ul>
                <li>Alberto Vidal</li>
                <li>Berenguer Pou</li>
                <li>Albert Domínguez</li>
              </ul>
            </span>
            <span className="about-repo">
              CHECK OUR REPO AT
              <a href="https://github.com/isdi-coders-2022/weeklyMenuIng-Project-202201">
                <img
                  className="github-logo"
                  src={githubLogo}
                  alt="GitHub Logo"
                />
              </a>
            </span>
          </div>
        </div>
      </main>
    </>
  );
};
export default AboutPage;
