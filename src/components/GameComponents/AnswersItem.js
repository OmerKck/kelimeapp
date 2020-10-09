import React from "react";

const AnswersItem = ({ answer, index }) => {
  return (
    <div 
      style={{
        fontFamily: "cursive",
        border: "1px solid gray",
        backgroundColor: "#F8EFBA",
        Width: "50%",
        textAlign: "center",
        borderRadius: 10,
        color: "black",
        marginTop: 20,
        overflow: "hidden",
        float: index % 2 === 0 ? "left" : "right",
      }}
    >
      <div className=" d-flex justify-content-around align-items-center">
        <img
          src="https://img.icons8.com/bubbles/100/000000/administrator-male.png"
          className="img-lg rounded-circle mb-2"
          alt="profile"
          style={{ width: 50 }}
        />
        {answer.title}

        <i
          className={`fa d-inline-flex bg-${
            answer.status ? "success fa-check" : "danger fa-times"
          } `}
          aria-hidden="true"
        ></i>
      </div>
    </div>
  );
};

export default AnswersItem;
