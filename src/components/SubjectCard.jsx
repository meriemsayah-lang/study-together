import { Link } from "react-router-dom";
import "../styles/SubjectCard.css";

function SubjectCard({ subject }) {

    return (

        <div className="subject-card">

            <div className="subject-icon">
                {subject.icon}
            </div>

            <h2>{subject.title}</h2>

            <p>{subject.description}</p>

            <Link
                to={`/Subjects/${subject.id}`}
                className="subject-btn"
            >
                ابدأ الدراسة →
            </Link>

        </div>

    );

}

export default SubjectCard;