import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../../../components/AdminSidebar";
import { categories, categoryDelete } from "../../../service/kelimeApiService";
import toast from "izitoast";

const CategoryHome = () => {
  const [categoryVal, setCategoryVal] = useState([]);
  useEffect(() => {
    categories()
      .then((res) => {
        setCategoryVal(res.data.data);
        console.log("categoriler", res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    categoryDelete(id)
      .then((res) => {
        console.log("categoryDelete", res);

        toast.success({
          title: " Categorisi Silindi",
          timeout: 2000,
          position: "center",
        });
        setCategoryVal((p) => [...p.filter((a) => a.id !== id)]); //TODO::silinen verinin statedende silinmesi için
      })
      .catch((err) => {
        console.log(err.request.status);
        if (err.request.status === 400) {
          toast.error({
            title: "Kategoriye ait Soru bulunmaktadır",
            position: "topCenter",
            timeout: 2500,
          });
        }
      });
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <AdminSidebar />
        </div>

        <div className="col-md-9">
          <table className="table table-striped  text-center">
            <thead className="table-warning ">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Kategori Adı</th>
                <th>Kategorideki Ürün Sayısı</th>
                <th></th>
                <th>
                  <Link className="btn btn-success " to="/category-create">
                    Ekle
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {categoryVal.map((category, index) => (
                <tr key={category.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{category.name}</td>
                  <td>{category.questions.length}</td>
                  <td>
                    <Link
                      className="btn btn-info"
                      to={"/category-update/" + category.id}
                    >
                      Düzenle
                    </Link>
                  </td>
                  <td>
                    <button
                      className=" btn-danger btn-sm"
                      onClick={() => handleDelete(category.id)}
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

export default CategoryHome;
