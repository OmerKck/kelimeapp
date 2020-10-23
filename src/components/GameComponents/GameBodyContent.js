import React, { useEffect, useState } from "react";
import { showQuestionToast, ShowWarning } from "../../helpers/toast";
import { getQuestions } from "../../service/kelimeApiService";
import AnswersItem from "./AnswersItem";
import GameQuestion from "./GameQuestion";

const GameBodyContent = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [loading, setIsLoading] = useState(false);

  const [state, setState] = useState({
    questions: [],
    questionIndex: 114,
    answers: [],
  });
  const { questions, questionIndex, answers } = state;

  useEffect(() => {
    getQuestions().then((res) => {
      console.log("answerlar", res.data.data[106].answers);
      setState((prev) => ({ ...prev, questions: res.data.data }));
    });
  }, []);

  const addAnswer = (ans) => {
    let duplicate = false;
    const exist = answers.find((f) => f.title === ans);

    if (exist && exist.status) {
      ShowWarning("Cevap daha önce verildi !", "center");
      duplicate = true;
    } else {
      const status = isTrue(ans) === undefined ? false : true;

      setState((prev) => ({
        ...prev,
        answers: [...prev.answers, { title: ans, status }],
      }));
      // console.log(answers);
      const trueAnswer = answers.filter((a) => a.status).length;

      //TODO:Sorunun cevapları yoksa state'i arttırma !

      if (trueAnswer >= questions[questionIndex].answers.length) {
        if (questionIndex < questions.length - 1) {
          showQuestionToast(
            "Hey",
            "Sonraki soruya gecmek ister misiniz ?",
            "center",
            handleToastQuestion,
            "/"
          );
        } else {
          alert("method soru bitti");
        }
      }
    }
    return duplicate;
  };
  const handleSubmit = () => {
    if (userAnswer.trim() === "") {
      ShowWarning("Cevap boş geçilemez !", "topRight");
      return;
    }
    setUserAnswer("");
    const check = addAnswer(userAnswer);
    if (!check) {
      setIsLoading(true);
      botPlay();
    }
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

    addAnswer(botAnswer);
  };

  const handleToastQuestion = () => {
    // console.log("cevaplar", questions[questionIndex].answers.length);
    console.log("deneme", questions[questionIndex + 1].answers.length);
    
    setState((prev) => ({
      ...prev,
      questionIndex: prev.questionIndex + 1,
      answers: [],
    }));
    // do {
    //   setState((prev) => ({
    //     ...prev,
    //     questionIndex: prev.questionIndex + 1,
    //     answers: [],
    //   }));
    //   console.log("qi", questionIndex);
    // } while (questions[questionIndex].answers.length !== 0);

    // while (questions[questionIndex + 1].answers.length === 0) {
    //   setState((prev) => ({
    //     ...prev,
    //     questionIndex: prev.questionIndex + 1,
    //     answers: [],
    //   }));
    //   console.log("qi", questionIndex);
    // }
  };

  return (
    <div>
      {/* Game Question Box start */}
      <GameQuestion questions={questions} questionIndex={questionIndex} />
      {/* Game Question Box End */}
      {/* Game Body Question Answer start */}

      {/**TODO:Component olacak ve scroll koyulacak asagı kayması için */}
      <div
        className="row flex-2  justify-content-between "
        style={{
          backgroundColor: "#dff9fb",
          minHeight: 300,
          borderRadius: 10,
          flexFlow: "row wrap",
        }}
      >
        {answers.map((answer, index) => (
          <div
            key={index}
            className=" d-flex  h-100 w-100 flex-wrap"
            style={{
              justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
              margin: 10,
            }}
          >
            <AnswersItem key={index} answer={answer} index={index} />
          </div>
        ))}
      </div>

      {/*input and button */}
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
