import { useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Alltrips from "./pages/Alltrips";
import Form from "./pages/Form";
import Singletrip from "./pages/Singletrip";
import Header from "./componnents/Header";
import Home from "./pages/Home";
function App() {
  const url = "https://fmtrackerbackend.herokuapp.com/trips/";
  // trip state
  const [trips, setTrips] = useState([]);
  //function
  const navigate = useNavigate();
  const getTrips = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTrips(data);
  };
  useEffect(() => {
    getTrips();
  }, []);
  const nullTrip = {
    place: "",
    description: "",
    goingWith: "",
    tripNotes: "",
    type: "",
    date: "",
    complete: "",
  };
  const [targetTrip, setTargetTrip] = useState(nullTrip);
  // const addTrips = async (newTrip) => {
  //   await fetch(url, {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newTrip),
  //   });
  //   getTrips();
  // };
  const addTrips = async (newTrip) => {
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTrip),
    });
    getTrips();
  };
  const getTargetTrip = (trip) => {
    setTargetTrip(trip);
    navigate("/edit");
  };
  const updateTrip = async (trip) => {
    await fetch(url + trip.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trip),
    });
    getTrips();
  };
  const deleteTrips = async (trip) => {
    await fetch(url + trip.id, {
      method: "delete",
    });
    getTrips();
    navigate("/trips");
  };
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/trips" element={<Alltrips trips={trips} />} />
          <Route
            path="/trips/:id"
            element={
              <Singletrip
                trips={trips}
                edit={getTargetTrip}
                deleteTrip={deleteTrips}
              />
            }
          />
          <Route
            path="/new"
            element={
              <Form
                initialTrip={nullTrip}
                handleSubmit={addTrips}
                buttonLabel="Create Trip"
              />
            }
          />
          <Route
            path="/edit"
            element={
              <Form
                initialTrip={targetTrip}
                handleSubmit={updateTrip}
                buttonLabel="update trip"
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
