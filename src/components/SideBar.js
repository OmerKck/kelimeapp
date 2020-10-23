import React from "react";

const SideBar = ({ user }) => {
  if (!user.profile) {
    return null;
  }
  const { profile } = user;
  const {
    level,
    image,
    about,
    total_game,
    total_win,
    total_draw,
    score,
    gold,
  } = profile;
  return (
    <div>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body text-center">
                  <div>
                    <img
                      // src="https://img.icons8.com/bubbles/100/000000/administrator-male.png"
                      src={image}
                      width="100"
                      // height="100"
                      className="img-lg rounded-circle mb-4"
                      alt="profile image"
                    />
                    <h6 style={{ fontWeight: "bold" }}>Level {level}</h6>
                    <h3>{user.name}</h3>
                    <p className="text-muted mb-0"></p>
                  </div>
                  <p className="mt-2 card-text">{about}</p>{" "}
                  <button className="btn btn-info btn-sm mt-3 mb-4">
                    Düzenle
                  </button>
                  <div className="border-top pt-3">
                    <div className="row">
                      <div className="col-4">
                        <h6>{total_game}</h6>
                        <p>Oyun Sayısı</p>
                      </div>
                      <div className="col-4">
                        <h6>{total_win}</h6>
                        <p> Galibiyet</p>
                      </div>
                      <div className="col-4">
                        <h6>{total_draw}</h6>
                        <p>Beraberlik</p>
                      </div>
                      <div className="col-4">
                        <h6>{total_game - (total_win + total_draw)}</h6>
                        <p style={{ fontSize: 13 }}>Mağlubiyet</p>
                      </div>
                      <div className="col-4">
                        <h6>{score}</h6>
                        <p>Skor</p>
                      </div>
                      <div className="col-4">
                        <h6>{gold}</h6>
                        <p>Toplam Altın</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
