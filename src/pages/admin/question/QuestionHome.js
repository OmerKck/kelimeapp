import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../../../components/AdminSidebar";
import {
  questionDelete,
  getQuestions,
} from "../../../service/kelimeApiService";
import toast from "izitoast";
const QuestionHome = () => {
  const [questionsValues, setQuestionsValues] = useState([]);

  useEffect(() => {
    getQuestions()
      .then((res) => {
        console.log(res);
        setQuestionsValues(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    questionDelete(id)
      .then((res) => {
        toast.warning({
          title: "Soru silindi",
          position: "topCenter",
          timeout: 2000,
        });
        setQuestionsValues((p) => [...p.filter((q) => q.id !== id)]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <AdminSidebar />
        </div>
        <div className="col-md-9">
          <table className="table table-hover ">
            <thead className="table-warning">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Soru</th>
                <th scope="col">Kategorisi</th>
                <th scope="col">Cevap Sayısı</th>
                <th>
                  <Link className="btn btn-success " to="/question-create">
                    Ekle
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {questionsValues.map((quesiton, i) => (
                <tr key={quesiton.id}>
                  <th scope="row">{i + 1}</th>
                  <td>{quesiton.content}</td>
                  <td>{quesiton.category.name}</td>
                  <td>{quesiton.answers.length}</td>
                  <td>
                    <Link
                      className="btn btn-info"
                      to={"/question-update/" + quesiton.id}
                    >
                      Düzenle
                    </Link>
                    <button
                      className="btn btn-danger btn-sm text-center"
                      style={{ width: 40 }}
                      onClick={() => handleDelete(quesiton.id)}
                    >
                      Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuestionHome;
