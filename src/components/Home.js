import { Link } from "react-router-dom";
// import LanderPageImage from "../img/Snake Lander Image.jpg";

const Home = () => {
  return (
    <>
      <div className="relative top-[10%] text-8xl  text-white tracking-widest text-center p-4">
        Snake-Game
      </div>
      <Link
        to="game"
        className="enter-game absolute bottom-1/2 left-10 ring-4 ring-white px-8 py-4 rounded-xl text-xl z-10 text-white flex  items-center space-x-4 md:text-3xl md:left-40"
      >
        <div className="font-bold">Enter</div>
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </Link>

      <div className=" absolute bottom-10 left-10 text-white max-w-xl  text-sm space-y-4 p-4 md:left-44 md:text-lg">
        <h1 className="py-4 text-center text-3xl font-bold">How To Play :-</h1>
        <div className="space-y-2 space-x-4">
          <h5>There are only two rules you must follow when playing:</h5>
          <ul className="list-disc">
            <li>Don't hit a wall and don't bite your own tail.</li>
            <li>
              Crashing into a wall or your tail will end the game immediately.
            </li>
          </ul>
        </div>
        <p>
          Your high score is calculated based on the number of squares you added
          to the snake. You win the game when there is no more room for your
          snake to grow.
        </p>
      </div>
    </>
  );
};

export default Home;
