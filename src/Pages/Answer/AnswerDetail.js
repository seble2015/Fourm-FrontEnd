import React from "react";
import { CgProfile } from "react-icons/cg";

function AnswerDetail({ answer }) {
  return (
    <div className="header_question">
      <div className="question_user" style={{ textAlign: "center" }}>
        <CgProfile style={{ width: "90%", height: "80%" }} />
        <span>{answer ? answer.user_name : "Unknown User"} </span>
      </div>
      <div className="question_title" style={{ height: "80%" }}>
        <div> {answer ? answer.answer : "New Answer"}</div>
      </div>
    </div>
  );
}

export default AnswerDetail;

// <span>{answer ? answer.user_name : "Unknown User"} </span>

// determines whether the answer object has a user_name property or not.
//         If it does, the user_name value is displayed in a span element. If the
//         answer object does not have a user_name property, the string "Unknown
//         User" is displayed instead.


//    <div> {answer ? answer.answer : "New Answer"}</div>

// If the answer object is not null or undefined (i.e. answer is truthy), then it displays the answer.answer property, which is the actual answer text. If the answer object is null or undefined (i.e. answer is falsy), then it displays the string "New Answer".


