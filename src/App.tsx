import React, { useState } from "react";
import "./App.css";
import "nes.css/css/nes.min.css";

const categories = [
  "Biler",
  "Frukt og grønnsaker",
  "Drinks",
  "Kjente personer",
  "Dyr",
  "Steder",
  "Farger",
];

const team1Name = "Insert team name 1 in code";
const team2Name = "Insert team name 2 in code";
interface Buttons {
  100: boolean;
  200: boolean;
  300: boolean;
  400: boolean;
  500: boolean;
  600: boolean;
}
const points = [100, 200, 300, 400, 500, 600];
const styling = [
  "is-normal",
  "is-success",
  "is-success",
  "is-primary",
  "is-warning",
  "is-error",
];

function App() {
  const [team1, setTeam1] = useState(0);
  const [team2, setTeam2] = useState(0);

  const [isTeam1, setIsTeam1] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);

  const [point, setPoint] = useState(0);

  const PopUp = (prop: { p: number }) => {
    const { p } = prop;
    const onClickTeam1 = () => {
      setTeam1(team1 + p);
      setShowPopUp(false);
      setIsTeam1(!isTeam1);
    };

    const onClickTeam2 = () => {
      setTeam2(team2 + p);
      setShowPopUp(false);
      setIsTeam1(!isTeam1);
    };

    const onClickWrong = () => {
      setShowPopUp(false);
      setIsTeam1(!isTeam1);
    };

    return (
      <div>
        <b onClick={onClickTeam1} className="nes-btn is-success">
          Team {team1Name} got it
        </b>
        <b onClick={onClickTeam2} className="nes-btn is-primary">
          Team {team2Name} got it
        </b>
        <b onClick={onClickWrong} className="nes-btn is-error">
          Nobody got it
        </b>
      </div>
    );
  };

  return (
    <div className="App">
      <div className="text">
        It is Team {isTeam1 ? team1Name : team2Name}s turn
      </div>
      <div className="text">
        Team {team1Name}s points: {team1}
      </div>
      <div className="text">
        Team {team2Name}s points: {team2}
      </div>
      <div className="Flex">
        {categories.map((c) => {
          return (
            <div className="Margin">
              <div className="nes-container with-title">
                <h3 className="titles">{c}</h3>
                <div className="FlexColumn">
                  {points.map((p, i) => {
                    const onClick = () => {
                      setShowPopUp(true);
                      setPoint(p);
                    };
                    return <Button onClick={onClick} point={p} index={i} />;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {showPopUp && <PopUp p={point} />}
    </div>
  );
}

export default App;

interface ButtonProps {
  onClick: () => void;
  point: number;
  index: number;
}

const Button = (props: ButtonProps) => {
  const { onClick, point, index } = props;
  const [isDisabled, setIsDisabled] = useState(false);

  const buttonStyling = isDisabled
    ? "nes-btn is-disabled"
    : `nes-btn ${styling[index]}`;
  const onButton = () => {
    if (!isDisabled) {
      onClick();
    }
    setIsDisabled(true);
  };
  return (
    <b onClick={onButton} className={buttonStyling}>
      {point}
    </b>
  );
};
