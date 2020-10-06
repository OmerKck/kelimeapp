import React, { useEffect, useState } from "react";
import { getQuestions } from "../../service/kelimeApiService";
import { motion } from "framer-motion";
const GameBodyContent = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [loading, setIsLoading] = useState(false);

  const [tempAnswers, setTempAnswers] = useState([]);

  const [state, setState] = useState({
    questions: [],
    questionIndex: 114,
    answers: [],
  });
  const { questions, questionIndex, answers } = state;

  useEffect(() => {
    getQuestions().then((res) => {
      setState((prev) => ({ ...prev, questions: res.data.data }));
    });
  }, []);

  const addAnswer = (ans) => {
    const status = isTrue(ans) === undefined ? false : true;
    const temp = [...answers];
    console.log("ANS", answers);
    temp.push({ title: ans, status });
    setState((prev) => ({
      ...prev,
      answers: temp,
    }));

    console.log("TEMP", temp);
    setTempAnswers(temp);
    console.log("stateAnswer", answers);
    console.log("tempAnswers", tempAnswers);
  };
  const handleSubmit = () => {
    addAnswer(userAnswer);
    setUserAnswer("");
    setIsLoading(true);
    botPlay();
  };
  const isTrue = (ans) => {
    return questions[questionIndex].answers.find(
      (answer) => answer.title === ans
    );
  };
  const botPlay = () => {
    setIsLoading(false);
    const tempArr = [
      "asdasd",
      "qwqeqewq",
      "wqqeqweqwe",
      "eqwewqeqeq",
      "qweqweqeqw",
      "sdfsfs",
      "eeqweqeqwer",
    ];
    questions[questionIndex].answers.forEach((q) => {
      tempArr.push(q.title);
    });

    const botAnswer = tempArr[Math.floor(Math.random() * tempArr.length)];
    console.log("BOTAnswers", botAnswer);
    addAnswer(botAnswer);
  };

  return (
    <div>
      {/* Game Question Box start */}
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
      {/* Game Question Box End */}

      {/* Game Body Question Answer start */}
      <div
        className="row"
        style={{
          backgroundColor: "#dff9fb",
          minHeight: 300,
          borderRadius: 10,
          display: "flex",
        }}
      >
        <div
          className="col-md-5 questionBody justify-content-between "
          style={{
            backgroundColor: "#dff9fb",
            minHeight: 300,
            borderRadius: 10,
            display: "flex",
          }}
        >
          <div className="col-md-2 justify-content-between ">
            {loading && (
              <div>
                <img
                  src="https://i.pinimg.com/originals/71/94/64/719464cf88c8e2ef95107b96f5adf2d3.gif"
                  width="50"
                  alt=""
                />
              </div>
            )}
          </div>

          <ul>
            {answers.map((answer, index) => (
              <li
                style={{
                  fontFamily: "cursive",
                  border: "1px solid gray",
                  backgroundColor: "#F8EFBA",
                  maxWidth: "100%",
                  textAlign: "center",
                  borderRadius: 10,
                  color: "black",
                  marginTop: 20,
                  minWidth: 300,
                }}
                key={index}
              >
                <div className=" d-flex justify-content-around align-items-center">
                  <img
                    src="https://img.icons8.com/bubbles/100/000000/administrator-male.png"
                    className="img-lg rounded-circle mb-2"
                    alt="profile image"
                    style={{ width: 50 }}
                  />
                  {answer.title}

                  <i
                    className={`fa d-inline-flex bg-${
                      answer.status ? "success fa-check" : "danger fa-trash"
                    } `}
                    aria-hidden="true"
                  ></i>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row">
        <div
          className="col-md-12 questionBodyInput justify-content-center align-items-center d-flex"
          style={{ margin: 0, padding: 0 }}
        >
          <input
            type="text"
            name="answerInput"
            placeholder="Cevap Giriniz"
            className="col-md-10 text-center"
            onChange={(e) => setUserAnswer(e.target.value)}
            value={userAnswer}
            autoComplete="off"
            //disabled={userAnswer == ""}
          />

          <button
            className="btn btn-success col-md-2 m-0 p-0 "
            style={{
              height: "100%",
              padding: "0 !important",
              borderRadius: 10,
            }}
            name="cevaplaButon"
            onClick={(e) => handleSubmit(e)}
            // disabled={isDisabled}
          >
            Cevapla
          </button>
        </div>
      </div>
      {/* Game Body Question Answer end */}
    </div>
  );
};

export default GameBodyContent;
