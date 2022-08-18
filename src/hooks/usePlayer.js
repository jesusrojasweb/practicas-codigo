import { useEffect, useState } from "react";

const usePlayer = (positions) => {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    const grid = new Array(positions);

    for (let i = 0; i < positions; i++) {
      grid[i] = new Array(positions);
    }

    for (let i = 0; i < positions; i++) {
      for (let j = 0; j < positions; j++) {
        grid[i][j] = 0;
      }
    }

    setPlayer(grid);
  }, [positions]);

  return [player, setPlayer];
};

export default usePlayer;
