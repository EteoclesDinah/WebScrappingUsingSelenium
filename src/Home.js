import React from "react";
import './App.css';

const Home = () => {
    return(
        <div className="container">
            <div className="homeDescription">
                <h1>Your Go-To Web Scrapping tool!!</h1>
                <p>Want to extract web content seamlessly?</p>
                <p>Look no Further!</p>
                <p>Harness the power of web scraping to collect data efficiently.<br /> Whether you're gathering information for research,<br />
                 monitoring trends, or compiling useful resources, <br />our tool simplifies the process for you.</p>

            </div>

            <div className="scrappingContent"></div>
        </div>
    );
};

export default Home;