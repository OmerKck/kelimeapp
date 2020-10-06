import React, { useState } from "react";
import toast from "izitoast";
import { categoryCreate } from "../../../service/kelimeApiService";
import { Link, useHistory } from "react-router-dom";

const QuestionCreate = () => {
  const [name, setName] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      toast.warning({
        title: "Kategori ad alanı boş olamaz",
        position: "topRight",
      });
    }
    categoryCreate(name)
      .then((res) => {
        console.log(res.data.data.name);
        toast.success({
          title: res.data.data.name + " Kategorisi Eklendi",
          position: "topCenter",
          timeout: 2000,
          onClosing: function () {
            history.push("/category");
          },
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-header text-center justify-content-between d-flex">
          <div className="text-center">Kategori Ekle</div>{" "}
          <Link className="btn btn-primary " to="/category">
            Geri
          </Link>
        </div>
        <div className="card-body">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <label htmlFor="">Kategori Adı</label>
              <input
                type="text"
                className="form-control"
                name="categoryName"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-success">Ekle</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuestionCreate;
