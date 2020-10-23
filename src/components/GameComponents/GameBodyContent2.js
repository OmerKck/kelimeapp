// import React, { useEffect, useState } from "react";
// import { showQuestionToast } from "../../helpers/toast";
// import { getQuestions } from "../../service/kelimeApiService";
// import AnswersItem from "./AnswersItem";
// import GameQuestion from "./GameQuestion";

// const GameBodyContent = () => {
//   const [userAnswer, setUserAnswer] = useState("");
//   const [loading, setIsLoading] = useState(false);

//   const [state, setState] = useState({
//     questions: [],
//     questionIndex: 114,
//     answers: [],
//   });
//   const { questions, questionIndex, answers } = state;

//   useEffect(() => {
//     getQuestions().then((res) => {
//       console.log("answerlar", res.data.data[106].answers);
//       setState((prev) => ({ ...prev, questions: res.data.data }));
//     });
//   }, []);

//   const addAnswer = (ans) => {
//     const exist = answers.find((f) => f.title === ans);

//     if (exist && exist.status) {
//       alert("Aynı cevap yazılamaz.");
//     } else {
//       const status = isTrue(ans) === undefined ? false : true;

//       setState((prev) => ({
//         ...prev,
//         answers: [...prev.answers, { title: ans, status }],
//       }));

//       const trueAnswer = answers.filter((a) => a.status).length;
//       console.log("trueanswer", trueAnswer);
//       console.log(
//         "find message",
//         answers.find((f) => f.title === ans)
//       );

//       if (trueAnswer === questions[questionIndex].answers.length) {
//         alert("cevap bitti");
//         showQuestionToast(
//           "Hey",
//           "Sonraki soruya gecmek ister misiniz ?",
//           null,
//           handleToastQuestion(),
//           null
//         );
//       }
//     }
//   };
//   const handleSubmit = () => {
//     if (userAnswer.trim() === "") {
//       alert("Boş Geçilemez.");
//       return;
//     }
//     addAnswer(userAnswer);
//     setUserAnswer("");
//     setIsLoading(true);
//     botPlay();
//   };
//   const isTrue = (ans) => {
//     return questions[questionIndex].answers.find(
//       (answer) => answer.title === ans
//     );
//   };
//   const botPlay = () => {
//     setIsLoading(false);
//     const tempArr = [
//       "asdasd",
//       "qwqeqewq",
//       "wqqeqweqwe",
//       "eqwewqeqeq",
//       "qweqweqeqw",
//       "sdfsfs",
//       "eeqweqeqwer",
//     ];
//     questions[questionIndex].answers.forEach((q) => {
//       tempArr.push(q.title);
//     });

//     const botAnswer = tempArr[Math.floor(Math.random() * tempArr.length)];

//     addAnswer(botAnswer);
//   };

//   const handleToastQuestion = () => {
//     if (questionIndex < questions.length - 1) {
//       //state((prev) => prev + 1);
//       setState((prev) => ({ ...prev, questionIndex: prev.questionIndex + 1 }));
//       // setAnswer("");
//     } else {
//       alert("method soru bitti");
//     }
//   };
//   return (
//     <div>
//       {/* Game Question Box start */}
//       <GameQuestion questions={questions} questionIndex={questionIndex} />
//       {/* Game Question Box End */}

//       {/* Game Body Question Answer start */}

//       <div
//         className="row"
//         style={{
//           backgroundColor: "#dff9fb",
//           minHeight: 300,
//           borderRadius: 10,
//           display: "flex",
//         }}
//       >
//         <div
//           className="col-md-12 questionBody justify-content-between "
//           style={{
//             backgroundColor: "#dff9fb",

//             borderRadius: 10,
//           }}
//         >
//           {/* <div className="col-md-2 justify-content-between ">
//           {loading && (
//             <div>
//               <img
//                 src="https://i.pinimg.com/originals/71/94/64/719464cf88c8e2ef95107b96f5adf2d3.gif"
//                 width="50"
//                 alt=""
//               />
//             </div>
//           )}
//         </div> */}

//           {answers.map((answer, index) => (
//             <AnswersItem key={index} answer={answer} index={index} />
//           ))}
//         </div>
//       </div>
//       <div className="row">
//         <div
//           className="col-md-12 questionBodyInput justify-content-center align-items-center d-flex"
//           style={{ margin: 0, padding: 0 }}
//         >
//           <input
//             type="text"
//             name="answerInput"
//             placeholder="Cevap Giriniz"
//             className="col-md-10 text-center"
//             onChange={(e) => setUserAnswer(e.target.value)}
//             value={userAnswer}
//             autoComplete="off"
//             //disabled={userAnswer == ""}
//           />

//           <button
//             className="btn btn-success col-md-2 m-0 p-0 "
//             style={{
//               height: "100%",
//               padding: "0 !important",
//               borderRadius: 10,
//             }}
//             name="cevaplaButon"
//             onClick={(e) => handleSubmit(e)}
//             // disabled={isDisabled}
//           >
//             Cevapla
//           </button>
//         </div>
//       </div>
//       {/* Game Body Question Answer end */}
//     </div>
//   );
// };

// export default GameBodyContent;
