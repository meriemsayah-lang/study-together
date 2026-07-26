import "../styles/Hero.css";
import Image from "../assets/image.png";
import {Link} from "react-router-dom"

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-text">

          <span className="hero-badge">
            🇩🇿 منصة مجانية لطلاب البكالوريا
          </span>

          <h1>
            كل ما تحتاجه
            <span> للنجاح في البكالوريا </span>
            في مكان واحد
          </h1>

          <p>
            نوفر لك الدروس، الملخصات، الكتب، الامتحانات السابقة،
            وأفضل القنوات التعليمية لمساعدتك على تحقيق أفضل النتائج.
          </p>

          <div className="hero-buttons">
            <Link to="/Subjects" className="primary-btn">
              ابدأ الدراسة
            </Link>

            <Link to="/About" className="secondary-btn">
              تعرف علينا
            </Link>
          </div>

        </div>

        <div className="hero-image">

          <img src={Image} alt="Students studying" />

        </div>
        

      </div>

    </section>
  );
}

export default Hero;