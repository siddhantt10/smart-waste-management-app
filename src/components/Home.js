/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from "react";
import "./Home.css"; // Import your CSS file for styling

const Home = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const content = [
    // Add your content here (text, elements, etc.)
    {
      title: "Welcome!",
      description: `In our fast-paced, urbanized world, the need for more efficient waste management is undeniable. Our Smart Waste Management System is the answer to this growing concern. This innovative system monitors fill levels, communicates in real-time, and ensures prompt waste collection. It even protects stray animals, safeguarding the well-being of our furry friends. Our project's aim is simple: cleaner, healthier, and more sustainable communities.
      Join us on this transformative journey to revolutionize the way we manage waste. We're not just optimizing waste collection; we're fostering a sense of community responsibility and environmental stewardship. By embracing this smart solution, we're creating a cleaner, safer, and more eco-conscious world for future generations. Welcome to a smarter, cleaner, and more sustainable future.`,
      className: "welcome-background",
    },
    {
      title: "About Us",
      description: "Learn more about our company and what we do.",
      className: "about-background",
    },
    {
      title: " Thankyou",
      description:
        "Turning waste into opportunity, our Smart Waste Management System not only helps cleaning up our communities but paves the way for a cleaner, greener, and more connected future. Together, we are raising the standard for sustainable living and creating a world where innovation meets responsibility",
      className: "thank-background",
    },
    // ... Add more content as needed
  ];

  const handleNextContent = () => {
    setCurrentContent((prevContent) =>
      prevContent === content.length - 1 ? 0 : prevContent + 1
    );
  };

  const handlePrevContent = () => {
    setCurrentContent((prevContent) =>
      prevContent === 0 ? content.length - 1 : prevContent - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextContent();
    }, 3000); // Change 5000 to adjust autoplay interval (in milliseconds)

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run effect only once on component mount

  return (
    <div className="home-container">
      <div className="content-container  ${content[currentContent].className}">
        <h1 className="content-title">{content[currentContent].title}</h1>
        <p className="content-description">
          {content[currentContent].description}
        </p>
      </div>
      <div className="button-container">
        <button className="prev-btn" onClick={handlePrevContent}>
          Previous
        </button>
        <button className="next-btn" onClick={handleNextContent}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
