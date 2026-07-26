import SubjectCard from "../components/SubjectCard";
import SubjectList from "../data/SubjectList";

import "../styles/Subjects.css";

function Subjects() {

    return (

        <section className="subjects-page">

            <h1 className="page-title">
                جميع المواد
            </h1>

            <div className="subjects-grid">

                {SubjectList.map(subject => (

                    <SubjectCard
                        key={subject.id}
                        subject={subject}
                    />

                ))}

            </div>

        </section>

    );

}

export default Subjects;