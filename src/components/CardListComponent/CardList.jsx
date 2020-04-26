import React from "react";
import Card from "../CardComponent/Card";
import "./cardlist.css";

const CardList = ({ countries }) => {
  const cardComponent = countries.map((country, i) => {
    return (
      <Card
        key={i}
        country={countries[i].country}
        cases={countries[i].cases}
        todaysCases={countries[i].todayCases}
        deaths={countries[i].deaths}
        todaysDeaths={countries[i].todayDeaths}
        recovered={countries[i].recovered}
        critical={countries[i].critical}
      />
    );
  });

  return <div className="grid mt5">{cardComponent}</div>;
};

export default CardList;
