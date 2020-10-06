import React from "react";
import AdminSidebar from "../../components/AdminSidebar";

const AdminHome = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <AdminSidebar />
        </div>
        <div className="col-md-9"> Admin Home İstatistik</div>
      </div>
    </div>
  );
};

export default AdminHome;
