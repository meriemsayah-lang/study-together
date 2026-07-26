import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <h2>Study Together | لندرس معًا</h2>

        <p>
          منصة مجانية لمساعدة طلاب البكالوريا على التعلم والوصول إلى أفضل النتائج.
        </p>

      </div>

      <ul className="footer-links">

        <li><Link to="/">الرئيسية</Link></li>
        <li><Link to="/subjects">المواد</Link></li>
        <li><Link to="/resources">الوسائل</Link></li>
        <li><Link to="/about">من نحن</Link></li>
        <li><Link to="/contact">اتصل بنا</Link></li>

      </ul>

      <div className="footer-bottom">

        <p>© 2026 Study Together. جميع الحقوق محفوظة.</p>

      </div>

    </footer>
  );
}

export default Footer;