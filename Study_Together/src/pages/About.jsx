import "../styles/About.css";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaEye,
  FaBullseye,
  FaBook,
  FaRocket,

} from "react-icons/fa";
function About() {
  return (
    <section className="about">

      {/* Hero */}
      <div className="about-hero">

        <h1>من نحن</h1>

        <p>
          منصة تعليمية مجانية تهدف إلى مساعدة طلاب البكالوريا
          للوصول إلى أفضل الموارد التعليمية في مكان واحد.
        </p>

      </div>

      {/* About Platform */}
      <div className="about-section">

        <h2>📚 Study Together</h2>

        <p>
          تم إنشاء Study Together لتوفير بيئة تعليمية بسيطة ومنظمة،
          تضم الدروس، والملخصات، والكتب، والامتحانات السابقة،
          حتى يتمكن الطالب من التركيز على الدراسة بدلًا من البحث
          عن المصادر في أماكن مختلفة.
        </p>

      </div>

      {/* Mission & Vision */}

      <div className="about-grid">

        <div className="about-card">

          <FaBullseye className="icon"/>

          <h3>رسالة المنصة</h3>

          <p>
            تقديم محتوى تعليمي مجاني ومنظم يساعد
            طلاب البكالوريا على تحقيق أفضل النتائج.
          </p>

        </div>

        <div className="about-card">

          <FaEye className="icon"/>

          <h3>رؤيتنا</h3>

          <p>
            أن تصبح Study Together منصة تعليمية
            يعتمد عليها كل طالب في الجزائر.
          </p>

        </div>

      </div>

      {/* About Me */}

      <div className="creator">

        <FaGraduationCap className="creator-icon"/>

        <div>

          <h2>عن المطورة</h2>

          <p>

            أنا <strong>مريم سايح</strong>، طالبة في المدرسة الوطنية العليا
            للذكاء الاصطناعي (ENSIA)، وحصلت على معدل
            <strong> 18.68 </strong>
            في شهادة البكالوريا. أنشأت هذه المنصة لمشاركة الموارد التي تمنيت
            وجودها أثناء رحلتي مع البكالوريا، وأطمح إلى تطويرها باستمرار
            لتساعد أكبر عدد ممكن من الطلاب.

          </p>

        </div>

      </div>

      {/* Values */}

      <div className="values">

        <h2>قيم المنصة</h2>

        <div className="values-grid">

          <div>
            <FaLaptopCode className="value-icon"/>
            <h4>سهولة الاستخدام</h4>
          </div>

          <div>
            <FaGraduationCap className="value-icon"/>
            <h4>تعليم مجاني</h4>
          </div>

          <div>
          <FaBook className="value-icon" />
         
            <h4>موارد موثوقة</h4>
          </div>

          <div>
            <FaRocket className="value-icon" /> 
            <h4>تطوير مستمر</h4>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;