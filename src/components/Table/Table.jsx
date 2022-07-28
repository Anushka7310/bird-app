import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Table.css";
import Form from "../Form/Form";

const Table = () => {
  const url = "http://localhost:9000/birds";
  let getData;

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  getData = async () => {
    const response = await axios.get(url);
    console.log(response);
    setData(response.data);
  };

  const removeData = (id) => {
    axios.delete(`${url}/${id}`).then(() => {
      const del = data.filter((item) => id !== item._id);
      setData(del);
    });
  };
  const [edit, setEdit] = useState(false)
  const [value, setValue] = useState({});
  const [showForm, setShowForm] = useState(false);

  const editData = (id) => {
    const val = data.find((val) => val._id === id);
    console.log(val)
    setValue(val)
    setEdit(true)
    setShowForm(true)
  };

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
                <button className="button" onClick={() => editData(_id)}>
                  Edit
                </button>
              </td>
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
    <div className="container">
      <div className="table_header">
        <div className="table_title_container">
          <h2 id="title" className="table_title">
            Manage birds
          </h2>
          <div className="table_subtitle">
            Manage all species of birds and their information
          </div>
        </div>

        <button className="add_btn" onClick={() => setShowForm(true)}>
          + Add
        </button>
      </div>
      <hr />
      {showForm ? (
        <Form title="add" setShowForm={setShowForm} getData={getData} />
      ) : null}

      {showForm && edit ? (
        <Form title="edit" setShowForm={setShowForm} getData={getData} value={value} isEdit={true} />
      ) : null}

      <table id="birds">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </div>
  );
};
export default Table;
