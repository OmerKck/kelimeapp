import React, { useEffect, useState } from "react";
import {
  categoryGetByid,
  categoryUpdate,
} from "../../../service/kelimeApiService";
import toast from "izitoast";
import { useHistory } from "react-router-dom";
const CategoryUpdate = () => {
  const [name, setName] = useState("");
  const id = window.location.pathname.split("/")[2];
  const history = useHistory();
  useEffect(() => {
    categoryGetByid(id)
      .then((res) => {
        setName(res.data.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      toast.warning({
        title: "Kategori ad alanı boş olamaz",
        position: "topRight",
      });
    }

    categoryUpdate(id, name)
      .then((res) => {
        toast.success({
          title: res.data.data.name + " Kategorisi Güncellendi",
          position: "topCenter",
          timeout: 2000,
          onClosing: function () {
            history.push("/category");
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header text-center justify-content-between d-flex">
          <div className="text-center">Kategori Güncelle</div>{" "}
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
              <button className="btn btn-success">Güncelle</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryUpdate;
