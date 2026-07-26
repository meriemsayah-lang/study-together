import "../styles/ResourceCard.css";

function ResourceCard({
    resource,
    data
}) {

    return (

        <div className="resource-card">

            <div className="resource-icon">

                {resource.icon}

            </div>

            <h2>

                {resource.title}

            </h2>

            {

                resource.name === "Drive" &&

                <a
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-btn"
                >

                    {resource.buttonText}

                </a>

            }

            {

                resource.name === "Youtube" &&

                <a
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-btn"
                >

                    {data.name}

                </a>

            }

            {

                resource.name === "Advice" &&

                <div className="advice">

                    <h3>{data.title}</h3>

                    <p>{data.content}</p>

                </div>

            }

        </div>

    );

}

export default ResourceCard;