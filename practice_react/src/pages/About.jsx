import aboutApi from "../api/aboutApi.json";
import "../App.css"
export const About = () => {
    return (
        <section className="section-about container">
            <h2 className="container-title">
                Here are some interesting Places in Madhya Pradesh
                <br />
                Madhya Pradesh
            </h2>
            <div className="gradient-cards">
                {aboutApi.map((abouts) => {
                    const { id, name, description, image, location, rating } = abouts;

                    return (
                        <div className="card" key={id}>
                            <div className="container-card bg-blue-box">
                                <img src={image} alt={name} className="card-image" />
                                <p className="card-title">{name}</p>
                                <p>
                                    <span className="card-description">Description: </span>
                                    {description}
                                </p>
                                <p>
                                    <span className="card-description">Location: </span>
                                    {location}
                                </p>
                                <p>
                                    <span className="card-description">Rating: </span>
                                    {rating} ★
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}