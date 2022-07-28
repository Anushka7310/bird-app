import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Table.css";

const URL = "http://localhost:9000/birds";

function useAPi(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(url);
    console.log(response)
    setData(response.data);
  };

  const removeData = (id) => {
    axios.delete(`${url}/${id}`).then(() => {
      const del = data.filter((item) => id !== item._id);
      setData(del);
    });
  };

  return { data, removeData };
}

const Table = () => {
  const { data, removeData } = useAPi(URL);

  const renderHeader = () => {
    let headerElement = [
      "NAME",
      "SPOTTED AT",
      "LAST SPOTTED DATE",
      "CONSERVATION STATUS",
      "SCIENTIFIC NAME",
    ];

    return headerElement.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  };

  const renderBody = () => {
    return (
      data &&
      data.map(
        ({
          _id,
          commonName,
          scientificName,
          order,
          spottedAt,
          spottedLocation,
        }) => {
          return (
            <tr key={_id}>
              <td>{commonName}</td>
              <td>{spottedAt}</td>
              <td>{spottedLocation}</td>
              <td>{order}</td>
              <td>{scientificName}</td>
              <td className="operation">
                <button className="button" onClick={() => removeData(_id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        }
      )
    );
  };

  return (
    <>
      <h1 id="title">Manage birds</h1>
      <table id="birds">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </>
  );
};
export default Table;