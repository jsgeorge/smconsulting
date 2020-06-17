import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AdminServiceForm = ({ match }) => {
  let id;
  if (match) id = match.params.id;
  const [edited, setEdited] = useState({
    name: "",
    desc: "",
    longdesc: "",
  });
  const [error, setError] = useState("");
  // const fetchData = async () => {
  //   // try {
  //   await axios
  //     .get(`/services/id?id=${id}`)
  //     .then((res) => {
  //       setEdited(res.data[0]);
  //       console.log(res.data[0]);
  //     })
  //     .catch((err) => {
  //       setError("Error cannont retrieve project services.Network propblem");
  //       console.log(err);
  //     });
  // };
  useEffect(() => {
    //fetchData();
  }, []);

  const handleChange = (e) => {
    setEdited({ ...edited, [e.target.name]: e.target.value });
  };
  if (error) return <div>{error}</div>;
  return (
    <div>
      <h3>Edit Service</h3>
      <input
        name="name"
        type="text"
        value={edited.name}
        onChange={handleChange}
      />
      <textarea
        type="text"
        name="desc"
        value={edited.desc}
        onChange={handleChange}
        rows={5}
      />
      <textarea
        type="text"
        name="longdesc"
        value={edited.longdesc}
        onChange={handleChange}
        rows={5}
      />
    </div>
  );
};

export default AdminServiceForm;
