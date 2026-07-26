import "../styles/Tools.css";
import Tools from "../data/Tools";

function ToolsPage() {

  return (

    <section className="tools">

      <div className="tools-header">

        <h1>أدوات تساعدك على الدراسة</h1>

        <p>
          مجموعة من أفضل الأدوات والمنصات التي تساعد
          طلاب البكالوريا على الدراسة بذكاء وتنظيم.
        </p>

      </div>

      <div className="tools-grid">

        {Tools.map((tool) => {

          const Icon = tool.icon;

          return (

            <div className="tool-card" key={tool.id}>

              <Icon className="tool-icon" />

              <h2>{tool.title}</h2>

              <p>{tool.description}</p>

              <a
                href={tool.link}
                target="_blank"
                rel="noreferrer"
                className="tool-btn"
              >
                زيارة الموقع
              </a>

            </div>

          );

        })}

      </div>

    </section>

  );

}

export default ToolsPage;