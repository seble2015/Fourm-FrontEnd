import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import QuestionDetail from "../Question/QuestionDetail";
import Axios from "../../axios";
import "./home.css";
import { FaUserPlus } from "react-icons/fa";

// Defining the Home component
const Home = () => {
  // Initializing state variables using hooks
  const [userData] = useContext(UserContext); // Initializing userData state variable using useContext hook
  const [questions, setQuestions] = useState([]); // Initializing questions state variable using useState hook
  const navigate = useNavigate(); // Initializing navigate function using useNavigate hook
  const axios = Axios(); // Initializing an instance of the axios library
  const [search, setSearcher] = useState(""); // Initializing search state variable using useState hook
  const [filterData, setFilterData] = useState([]); // Initializing filterData state variable using useState hook

  // Effect hook to load questions when component mounts
  useEffect(() => {
    if (!userData.user) { // If user is not logged in, navigate to login page
      navigate("/login");
    } else { // Otherwise, load questions
      loadQuestions();
    }
  }, [userData.user]); // Only run the effect if the userData.user state variable changes

  // Function to load questions
  async function loadQuestions() {
    const response = await axios.get(
      "/api/question/getquestions",
      userData.config
    );
    setQuestions(response.data?.data);
  }

  // Function to handle click event when "Ask Question" button is clicked
  const handleClick = () => {
    navigate("/newquestion");
  };

  // Effect hook to filter questions based on search term
  useEffect(() => {
    setFilterData(
      questions.filter((q) =>
        q.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, questions]); // Only run the effect if the search or questions state variables change

  // Rendering the Home component
  return (
    <section className="container">
      <div className="header_row">
        <button className="blue_button" onClick={handleClick}>
          Ask Question
        </button>
        <h1 className="header_border">
          <FaUserPlus /> Welcome: {userData.user?.display_name}
        </h1>
      </div>
      <div
        className="search"
        style={{
          borderBottom: "0.1px solid",
          height: "50px",
          borderRadius: "50px",
          paddingTop: "0.1%",
          paddingRight: "0.1%",
          paddingBottom: "0.1%",
          marginBottom: "0.5%",
        }}
      >
        <h2>Questions</h2>
        <input
          className="search_bar"
          type="text"
          placeholder="Search......"
          onChange={(e) => {
            setSearcher(e.target.value);
          }}
        />
      </div>
      <div>
        {filterData.length === 0 ? ( // If no results found, display "No Result Found" message
          <div>No Result Found</div>
        ) : (
          filterData.map((quest, index) => { // Otherwise, map over filtered data and render each question using the QuestionDetail component
            return <QuestionDetail question={quest} key={index} />;
          })
        )}
      </div>
    </section>
  );
};


export default Home;