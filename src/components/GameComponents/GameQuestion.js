import React from "react";

const GameQuestion = ({ questions, questionIndex }) => {
  return (
    <div className="row">
      <div
        className="col-md-12 text-center mt-1 mb-1 questionHeader align-items-center d-flex justify-content-center "
        style={{
          backgroundColor: "#576574",
          fontSize: 20,
          height: 50,
          color: "whitesmoke",
          fontWeight: "bold",
        }}
      >
        {questions.length > 0 ? questions[questionIndex].content : null}
      </div>
    </div>
  );
};

export default GameQuestion;
