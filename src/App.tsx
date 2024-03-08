import React from 'react';
import './App.css';
import teamsData from './CollegeBasketballTeams.json';

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Heading() {
  return <h1>March Madness NCAA Basketball</h1>;
}

class Team extends React.Component<TeamProps> {
  render() {
    const { school, name, city, state } = this.props;

    return (
      <div className="card">
        <h2>{school}</h2>
        <p>Mascot: {name}</p>
        <p>
          Location: {city}, {state}
        </p>
      </div>
    );
  }
}

const TeamList = () => {
  return (
    <div>
      {teamsData.teams.map((team, index) => (
        <Team key={index} {...team} />
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Heading />
      <TeamList />
    </div>
  );
}

export default App;
