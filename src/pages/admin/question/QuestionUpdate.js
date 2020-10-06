import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  categories,
  questionGetById,
  questionUpdate,
} from "../../../service/kelimeApiService";
import toast from "izitoast";
const QuestionUpdate = () => {
  const [question, setQuestion] = useState("");
  const [categoryArr, setCategoryArr] = useState([]);
  const [answer, setAnswer] = useState("");
  const [values, setValues] = useState({
    content: "",
    category_id: 0,
    answers: [],
  });
  //TODO:güncellerken cevaplar eklenmiyor
  const { content, answers, category_id } = values;
  const id = window.location.pathname.split("/")[2];
  const history = useHistory();

  useEffect(() => {
    questionGetById(id)
      .then((res) => {
        console.log(res.data.data);
        setQuestion(res.data.data);
        setValues({
          content: res.data.data.content,
          category_id: res.data.data.category_id,
          answers: res.data.data.answers,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    categories()
      .then((res) => {
        setCategoryArr(res.data.data);
        console.log("category", res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleAddAnswer = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();

      if (content.trim() !== "" && category_id > 0) {
        console.log("categoryid", category_id);
        let tempAnswers = [...answers];

        if (answers.find((a) => a === answer) === undefined) {
          tempAnswers.push({ title: answer });
          setValues({ ...values, answers: tempAnswers });

          setAnswer("");
        } else {
          toast.warning({
            title: "Cevaplar aynı olamaz!",
            position: "topRight",
            timeout: 1500,
          });
        }
      }
    }
  };

  const deleteAnswer = (answer) => {
    let tempArr = answers;
    tempArr = tempArr.filter((a) => a !== answer);
    setValues((prev) => ({ ...prev, answers: tempArr }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("soru", question);
    console.log("cevaplar", answers);

    questionUpdate(id, content, category_id, answers)
      .then((res) => {
        console.log(res);
        toast.success({
          title: "Soru başarılı bir şekilde güncellenmiştir",
          position: "topCenter",
          timeout: 2000,
          onClosing: () => history.push("/question"),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-header text-center justify-content-between d-flex">
            <div className="text-center">Soru Güncelle</div>{" "}
            <Link className="btn btn-primary " to="/question">
              Geri
            </Link>
          </div>
          <div className="card-body">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group">
                <label htmlFor="">Soru</label>
                <input
                  type="text"
                  className="form-control"
                  name="QuestionName"
                  value={content}
                  onChange={(e) =>
                    setValues({ ...values, content: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Kategori </label>
                <select
                  name="category"
                  id="category"
                  onChange={(e) =>
                    setValues({ ...values, category_id: e.target.value })
                  }
                  value={category_id}
                  className="form-control"
                >
                  {/* <option value="">Kategori Seçiniz</option> */}
                  {categoryArr.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="">Cevap Ekle</label>
                <input
                  type="text"
                  className="form-control"
                  onKeyDown={(e) => handleAddAnswer(e)}
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                />
              </div>
              {answers.length > 0 && (
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Yanıt</th>
                      <th>-</th>
                    </tr>
                  </thead>
                  <tbody>
                    {answers.map((a, index) => (
                      <tr key={index}>
                        <td>{a.title}</td>
                        <td>
                          <button
                            type="button"
                            onClick={() => deleteAnswer(a)}
                            className="btn btn-sm btn-danger w-25"
                          >
                            Sil
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <div className="form-group">
                <button className="btn btn-success">Güncelle</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionUpdate;
