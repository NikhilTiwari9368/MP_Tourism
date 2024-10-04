import React from 'react';
import "../App.css"; // Import the CSS file for styling

export const World = () => {
    return (
        <div className="madhya-pradesh">
            <div className="full-image">
                <img src="/tansen.webp" alt="Madhya Pradesh" />
            </div>

            <div className="content-section">
                <div className="content-left">
                    <img src="craft.webp" alt="Image 1" />
                </div>
                <div className="content-right">
                    <h2>About Madhya Pradesh</h2>
                    <p>
                        Madhya Pradesh is known for its rich heritage, historical monuments, and natural beauty.
                        It's home to some of India's most renowned national parks and wildlife sanctuaries.
                    </p>
                </div>
            </div>

            <div className="content-section">
                <div className="content-left">
                    <h2>Rich Culture</h2>
                    <p>
                        The culture of Madhya Pradesh is diverse, featuring traditional dances, music, and art forms.
                        Festivals celebrated here showcase the vibrant lifestyle of the people.
                    </p>
                </div>
                <div className="content-right">
                    <img src="stup.jpg" alt="Image 2" />
                </div>
            </div>

            <div className="content-section">
                <div className="content-left">
                    <img src="natinal_park.jpg" alt="Image 3" />
                </div>
                <div className="content-right">
                    <h2>National Parks</h2>
                    <p>
                        Madhya Pradesh is famous for its national parks such as Kanha and Bandhavgarh,
                        where you can see tigers, leopards, and a variety of other wildlife.
                    </p>
                </div>
            </div>

            <div className="content-section">
                <div className="content-left">
                    <h2>Historical Sites</h2>
                    <p>
                        From ancient temples to forts, Madhya Pradesh is home to several UNESCO World Heritage Sites.
                        Explore the beautiful architecture and learn about the rich history of the state.
                    </p>
                </div>
                <div className="content-right">
                    <img src="/patalpani.jpg" alt="Image 4" />
                </div>
            </div>
        </div>
    );
};