import { useParams } from "react-router-dom";
import SubjectList from "../data/SubjectList";
import SubjectsData from "../data/SubjectsData";
import ResourceList from "../data/ResourceList";

import ResourceCard from "../components/ResourceCard";

import "../styles/SubjectDetails.css";

function SubjectDetails() {

    const { id } = useParams();

    const subject = SubjectList.find(
        item => item.id === id
    );

    const data = SubjectsData[id];

    if (!subject || !data) {

        return <h1>المادة غير موجودة</h1>;

    }

    return (

        <section className="subject-details">

            <div className="subject-header">

                <div className="subject-icon">

                    {subject.icon}

                </div>

                <h1>

                    {subject.title}

                </h1>

                <p>

                    {subject.description}

                </p>

            </div>

            {

                ResourceList.map(resource => (

                    <section
                        key={resource.name}
                        className="resource-section"
                    >

                        <h2>

                            {resource.icon} {resource.title}

                        </h2>

                        <div className="resource-grid">

                            {

                                resource.name === "Drive" &&

                                data.Drive.map((item,index)=>(

                                    <ResourceCard
                                        key={index}
                                        resource={resource}
                                        data={item}
                                    />

                                ))

                            }

                            {

                                resource.name === "Youtube" &&

                                data.youtubeChannels.map((item,index)=>(

                                    <ResourceCard
                                        key={index}
                                        resource={resource}
                                        data={item}
                                    />

                                ))

                            }

                            {

                                resource.name === "Advice" &&

                                data.advices.map((item,index)=>(

                                    <ResourceCard
                                        key={index}
                                        resource={resource}
                                        data={item}
                                    />

                                ))

                            }

                        </div>

                    </section>

                ))

            }

        </section>

    );

}

export default SubjectDetails;