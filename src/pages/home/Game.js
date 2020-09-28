import React, { useEffect, useState } from "react";
import { questions } from "../../data";
import toast from "izitoast";
import { useHistory } from "react-router-dom";

const Game = () => {
  const [user, setuser] = useState("");
  const [qIndex, setQIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answerArr, setAnswerArr] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const [botTest, setBotTest] = useState([]);
  const [puan, setPuan] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if (localStorage.user) {
      setuser(JSON.parse(localStorage.user));
      if (qIndex === questions.length) {
        toast.info({
          title: "Sorular Bitti",
          position: "center",
          onClosing: function () {
            setIsDisabled(true);
            history.push("/");
          },
        });
      }
    }
  }, [qIndex, history]);

  const handleSubmit = (e) => {
    // console.log("answer", answerArr.length);
    // console.log("bot", botTest.length);
    //TODO:Tek dizi answer
    //TODO:dogru cevaplar uzerıne kurulacak
    if (
      answerArr.length + botTest.length !==
      questions[qIndex].answers.length
    ) {
      if (answer === "") {
        toast.warning({
          title: "Cevap Boş olamaz !",
          position: "center",
          timeout: 2000,
        });
      } else {
        //TODO:spread operation
        setAnswerArr((p) => [...p, answer]);
        bot();
        setAnswer("");
      }
    } else {
      toast.question({
        timeout: 10000,
        close: false,
        overlay: true,
        displayMode: "once",
        id: "question",
        zindex: 999,
        // title: "Hey",
        title: "Hey  " + user.name,
        message: "Sonraki Soruya geçmek ister misiniz ?",
        position: "center",
        buttons: [
          [
            "<button><b>Evet</b></button>",
            function (instance, toast) {
              instance.hide({ transitionOut: "fadeOut" }, toast, "button");
              if (qIndex !== questions.length) {
                setQIndex((prev) => prev + 1);
                setAnswer("");
              } else {
                console.log("alert");
              }
              setIsDisabled(false);
            },
            true,
          ],
          [
            "<button>Hayır</button>",
            function (instance, toast) {
              instance.hide({ transitionOut: "fadeOut" }, toast, "button");
              //TODO:loading ekranı

              history.push("/");
            },
          ],
        ],
        onClosing: function (instance, toast, closedBy) {
          console.info("Closing | closedBy: " + closedBy);
        },
        onClosed: function (instance, toast, closedBy) {
          console.info("Closed | closedBy: " + closedBy);
          console.log(instance);
        },
      });
      //stateki gerçek kullanıcın cevaplar dizisini temizlemek için
      setAnswerArr([]);
      //stateki botun cevaplar dizisini temizlemek için
      setBotTest([]);

      setPuan(0);
      //state butonun disabled özelligini açmak için
      setIsDisabled(true);
    }
    console.log("answerArr", answerArr);
  };

  const bot = () => {
    const tempArr = [...questions[qIndex].answers, "deneme", "armut"];

    let deneme = tempArr[Math.floor(Math.random() * tempArr.length)];

    setBotTest((p) => [...p, deneme]);
    console.log("bot", botTest);
  };
  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div className="row ">
        {/* Game Header Box start */}
        <div
          className="col-md-12 d-flex justify-content-between align-center "
          style={{ backgroundColor: "#22a6b3" }}
        >
          <div className="col-md-6 d-flex justify-content-center align-center userCol">
            {" "}
            <div>{puan}</div>
            <div
              className="rounded-circle  userImage"
              style={{ width: 100, height: 100, backgroundColor: "orange" }}
            >
              <img
                src="https://img.icons8.com/bubbles/100/000000/administrator-male.png"
                className="img-lg rounded-circle mb-2"
                alt="profile image"
              />
            </div>
            <div className="d-flex justify-content-center align-items-center ml-3 text-center ">
              <label
                style={{
                  backgroundColor: "#d1d8e0",
                  minWidth: 100,
                  minHeight: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  borderRadius: 10,
                }}
              >
                {user.name}
              </label>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center align-center">
            <div className="d-flex justify-content-center align-items-center mr-3">
              <label
                style={{
                  backgroundColor: "#d1d8e0",
                  minWidth: 100,
                  minHeight: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  borderRadius: 10,
                }}
              >
                Random Kullanıcı name
              </label>
            </div>
            <div
              className="rounded-circle userImage"
              style={{ width: 100, height: 100, backgroundColor: "orange" }}
            >
              <img
                src="https://img.icons8.com/bubbles/100/000000/indian-lady.png"
                className="img-lg rounded-circle mb-2"
                alt="profile image"
              />
            </div>
          </div>
        </div>
        {/* Game Header Box end */}
        {/* Game Content Box Start */}
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
          {qIndex !== questions.length ? questions[qIndex].title : <div></div>}
        </div>
        <div
          className="col-md-12 questionBody justify-content-between "
          style={{
            backgroundColor: "#dff9fb",
            minHeight: 300,
            borderRadius: 10,
            display: "flex",
          }}
        >
          <ul>
            {answerArr.map((answer, index) => (
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
                {questions[qIndex].answers.find(
                  (a) => a.toLocaleLowerCase() === answer.toLocaleLowerCase()
                ) === answer ? (
                  <div className="justify-content-around d-flex align-items-center">
                    <img
                      src="https://img.icons8.com/bubbles/100/000000/administrator-male.png"
                      className="img-lg rounded-circle mb-2"
                      alt="profile image"
                      style={{ width: 50 }}
                    />
                    {answer}

                    <i
                      className="fa fa-check d-inline-flex bg-success "
                      aria-hidden="true"
                    ></i>
                  </div>
                ) : (
                  <div className="justify-content-around d-flex align-items-center">
                    <img
                      src="https://img.icons8.com/bubbles/100/000000/administrator-male.png"
                      className="img-lg rounded-circle mb-2"
                      alt="profile image"
                      width="50"
                    />
                    <div
                      style={{ textDecoration: "line-through", color: "red" }}
                    >
                      {answer}
                    </div>
                    <i
                      className="fa fa-times d-inline-flex bg-danger "
                      aria-hidden="true"
                    ></i>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <ul>
            {botTest.map((bot, index) => (
              <li
                style={{
                  fontFamily: "cursive",
                  border: "1px solid gray",
                  backgroundColor: "#F8EFBA",
                  maxWidth: "100%",
                  textAlign: "center",
                  borderRadius: 10,
                  color: "black",
                  marginTop: 40,
                  minWidth: 200,
                }}
                key={index}
              >
                {questions[qIndex].answers.find(
                  (a) => a.toLocaleLowerCase() === bot.toLocaleLowerCase()
                ) === bot ? (
                  <div className="justify-content-around d-flex align-items-center">
                    <img
                      src="https://img.icons8.com/bubbles/100/000000/indian-lady.png"
                      className="img-lg rounded-circle mb-2"
                      alt="profile image"
                      width="50"
                    />
                    {bot}
                    <i
                      className="fa fa-check d-inline-flex bg-success  justify-content-around"
                      aria-hidden="true"
                    ></i>
                  </div>
                ) : (
                  <div className="justify-content-around d-flex align-items-center">
                    <img
                      src="https://img.icons8.com/bubbles/100/000000/indian-lady.png"
                      className="img-lg rounded-circle mb-2"
                      alt="profile image"
                      width="50"
                    />
                    {bot}
                    <i
                      className="fa fa-times d-inline-flex bg-danger "
                      style={{ textDecoration: "line-through", color: "red" }}
                      aria-hidden="true"
                    ></i>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div></div>
        <div
          className="col-md-12 questionBodyInput justify-content-center align-items-center d-flex"
          style={{ margin: 0, padding: 0 }}
        >
          <input
            type="text"
            name="answerInput"
            placeholder="Cevap Giriniz"
            className="col-md-10 text-center"
            onChange={(e) => setAnswer(e.target.value)}
            value={answer}
            autoComplete="off"
            disabled={isDisabled}
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
            disabled={isDisabled}
          >
            Cevapla
          </button>
        </div>
        {/* Game Content Box end */}
      </div>
    </div>
  );
};

export default Game;
