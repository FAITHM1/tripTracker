import { Link, useParams } from "react-router-dom";

function Singletrip({ trips, edit, deleteTrip }) {
  const params = useParams();
  const id = parseInt(params.id);
  const trip = trips.find((t) => t.id === id);
  console.log(trip);
  const tripType = (trip) => {
    if (trip === "Aborad") {
      return <i class="fas fa-suitcase"></i>;
    } else if (trip === "Roadtrip") {
      return <i class="fas fa-road"></i>;
    } else if (trip === "Camping") {
      return <i class="fas fa-campground"></i>;
    } else if (trip === "Cruise") {
      return <i class="fas fa-anchor"></i>;
    } else if (trip === "City") {
      return <i class="fas fa-city"></i>;
    } else if (trip === "Sight seeing") {
      return <i class="fas fa-binoculars"></i>;
    } else {
      <i class="fas fa-suitcase"></i>;
    }
  };
  const date = trip.date.split("-").reverse().join("/");
  return (
    <div className="singleTrip">
      <Link to="/trips">
        <i class="fas fa-arrow-circle-left"></i>
      </Link>
      <div className="display">
        <div>
          <h2>
            <span>{trip?.place}</span> trip
          </h2>
          <h3>
            type:{" "}
            <span>
              {trip?.type} {tripType(trip.type)}
            </span>
          </h3>
          <h3>
            day: <small>{date}</small>
          </h3>
          <p>{trip?.description}</p>
        </div>
        <aside>
          <div>
            <h2>coming along</h2>
            <ul>
              <li>{trip?.goingWith}</li>
            </ul>
          </div>
          <div>
            <h2>Notes</h2>
            <p>{trip?.tripNotes}</p>
          </div>
        </aside>
      </div>
      <div className="btn">
        <button onClick={() => edit(trip)}>
          <i class="fas fa-edit"></i>
        </button>
        <button onClick={() => deleteTrip(trip)}>
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
}
export default Singletrip;
