import React from "react";
import GameBodyContent from "../../components/GameComponents/GameBodyContent";
import GameHeader from "../../components/GameComponents/GameHeader";

const Game = () => {
  return (
    <div className="container  justify-content-center align-items-center ">
      {/* Game Header Box start */}
      <GameHeader /> {/* Game Header Box end */}
      {/* Game Content Box Start */}
      <GameBodyContent />
      {/* Game Content Box end */}
    </div>
  );
};

export default Game;
