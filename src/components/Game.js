import { useEffect, useState } from "react";

const Game = () => {
  const GRID_SIZE = 20;

  const [food, setFood] = useState({ x: -1, y: -1 });
  const [snake, setSnake] = useState([
    { x: GRID_SIZE / 2, y: GRID_SIZE / 2 },
    { x: GRID_SIZE / 2, y: GRID_SIZE / 2 + 1 },
  ]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [direction, setDirection] = useState("UP");

  //Generate random cell
  const generateRandomCell = () => {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  };

  useEffect(() => {
    setFood(generateRandomCell());
  }, []);

  const handleControl = (e) => {
    // console.log(e.key);
    // eslint-disable-next-line default-case
    switch (e.key) {
      case "ArrowUp":
        if (direction !== "DOWN") setDirection("UP");
        break;
      case "ArrowDown":
        if (direction !== "UP") setDirection("DOWN");
        break;
      case "ArrowLeft":
        if (direction !== "RIGHT") setDirection("LEFT");
        break;
      case "ArrowRight":
        if (direction !== "LEFT") setDirection("RIGHT");
        break;
    }
  };

  const ateFood = (newSnake) => {
    setFood(generateRandomCell());
    setSnake(newSnake);
    // console.log(newSnake);
    setScore((prevstate) => prevstate + 1);
  };

  const updateGame = () => {
    // if it collide with grid walls
    if (
      snake[0].x < 0 ||
      snake[0].y < 0 ||
      snake[0].x >= 20 ||
      snake[0].y >= 20
    ) {
      setGameOver(true);
      return;
    }

    //Move snake

    let newSnake = [...snake];
    if (direction === "UP") {
      newSnake.unshift({ x: snake[0].x, y: snake[0].y - 1 });
    }
    if (direction === "DOWN") {
      newSnake.unshift({ x: snake[0].x, y: snake[0].y + 1 });
    }
    if (direction === "LEFT") {
      newSnake.unshift({ x: snake[0].x - 1, y: snake[0].y });
    }
    if (direction === "RIGHT") {
      newSnake.unshift({ x: snake[0].x + 1, y: snake[0].y });
    }
    // if snake it food
    if (food.x === newSnake[0].x && food.y === newSnake[0].y) {
      ateFood(newSnake);
    } else {
      // withOut Ate
      newSnake.pop();
      setSnake(newSnake);
    }
  };

  useEffect(() => {
    console.log("render");
    document.addEventListener("keydown", handleControl);
    return () => document.removeEventListener("keydown", handleControl);
  });

  useEffect(() => {
    if (!gameOver) {
      const moveSnake = setInterval(updateGame, 200);
      return () => clearInterval(moveSnake);
    }
  });

  const renderCell = () => {
    const cells = [];
    for (let row = 0; row < GRID_SIZE; row++) {
      for (let col = 0; col < GRID_SIZE; col++) {
        let Class = " cell";
        const isFood = food.x === col && food.y === row;
        if (isFood) Class += " food";
        const isSnake = snake.some(
          (segment) => segment.x === col && segment.y === row
        );
        if (isSnake) {
          Class += " snake";
        }
        cells.push(<div key={`${col}-${row}`} className={Class}></div>);
      }
    }
    return cells;
  };

  return (
    <div className=" h-screen flex flex-col  space-y-10 justify-center items-center">
      <div className="text-white text-4xl">Score :{score}</div>
      <div className="game-board">{renderCell()}</div>
    </div>
  );
};

export default Game;
