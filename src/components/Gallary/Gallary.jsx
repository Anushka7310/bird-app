import React, { useState, useEffect } from "react";
import "./Gallary.css";
import ActionAreaCard from "../Cards/Cards";
import axios from "axios";
function Gallary() {
  const url = "http://localhost:9000/birds";
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(url);
    setData(response.data);
  };
  return (
    <div className="gallary_container">
      <div className="gallary_heading">Gallary</div>
      <hr />
      <div className="gallary_cards">
        {data?.map(
          ({
            _id,
            commonName,
            scientificName,
            order,
            spottedAt,
            spottedLocation,
          }) => (
            <ActionAreaCard
              key={_id}
              commonName={commonName}
              scientificName={scientificName}
              order={order}
              spottedAt={spottedAt}
              spottedLocation={spottedLocation}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Gallary;
