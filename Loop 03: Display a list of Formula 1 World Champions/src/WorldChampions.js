import React from "react";

function WorldChampions(props) {
  return (
    <div>
      {props.drivers
        .filter(driver => (driver.isWorldChampion ? true : false))
        .map(driver => (
          <label key={driver.name}>
            <br />
            {driver.name} {driver.isWorldChampion}
          </label>
        ))}
    </div>
  );
}

export default WorldChampions;
