import ResourceCard from "../components/ResourceCard";
import resources from "../data/resources";

import "../styles/Resources.css";

function Resources() {

    return (

        <section className="resources-page">

            <div className="resources-header">

                <h1>
                    وسائل الدراسة
                </h1>

                <p>
                    اختر الوسيلة التي تريد استخدامها لمساعدتك في الدراسة.
                </p>

            </div>

            <div className="resources-grid">

                {

                    resources.map((resource,index)=>(

                        <ResourceCard
                            key={index}
                            resource={resource}
                        />

                    ))

                }

            </div>

        </section>

    );

}

export default Resources;