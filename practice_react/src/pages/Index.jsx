import React from 'react';
import '../Index.css'; // Import the CSS file for styling

export const Index = () => {
    return (
        <div>
            <div className="container">
                <div className="image-options">
                    <h2>Explore MP Tourism</h2>
                    <div className="image-grid">
                        <img src="/khj.jpg" alt="Khajuraho Temple" />
                        <img src="/stup.jpg" alt="Sanchi Stupa" />
                        <img src="/bhed.jpg" alt="Bhedaghat Waterfalls" />
                    </div>
                </div>
                <div className="content">
                    <h1>Welcome to Madhya Pradesh Tourism</h1>
                    <p>
                        Madhya Pradesh, the heart of India, is known for its rich history, vibrant culture, and natural beauty.
                        Often referred to as the "Tiger State," it boasts an impressive array of wildlife, including the majestic Bengal tiger, found in the renowned Bandhavgarh and Kanha National Parks.
                        From magnificent palaces and temples to lush national parks and serene rivers, there's something for everyone.
                        Explore the state's popular destinations like Khajuraho, famous for its exquisite temples adorned with intricate erotic sculptures, and Sanchi, home to the world's oldest stone structures and stupas that reflect India's ancient heritage.
                    </p>

                    <p>
                        Experience the charm of Ujjain, one of the seven sacred cities of Hinduism, where the Kumbh Mela is celebrated, attracting millions of pilgrims.
                        The state is also renowned for its traditional arts and crafts, including handloom textiles, pottery, and tribal art, offering visitors unique shopping opportunities.
                        Don't miss the chance to indulge in the local cuisine, featuring delectable dishes like poha, jalebi, and bhutte ka kis, which showcase the region's culinary richness.
                    </p>

                    <p>
                        For adventure enthusiasts, the stunning landscapes of Pachmarhi, the only hill station in Madhya Pradesh, provide opportunities for trekking, camping, and exploring waterfalls.
                        Whether you're drawn to the historical significance of Gwalior Fort or the serene beauty of the Narmada River, Madhya Pradesh promises an unforgettable journey filled with diverse experiences and warm hospitality.
                        Embark on a journey through this enchanting state and discover its hidden treasures, rich traditions, and natural wonders that will leave you with lasting memories.
                    </p>

                </div>
            </div>
        </div>
    );
};