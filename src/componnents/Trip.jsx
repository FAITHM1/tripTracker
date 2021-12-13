import { Link } from "react-router-dom";
function Trip({ trip }) {
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
    <div className="divTrip">
      <div className="trips">
        <Link to={`/trips/${trip.id}`}>{tripType(trip.type)}</Link>

        <Link to={`/trips/${trip.id}`}>
          <h2> {trip.place}</h2>
        </Link>
        <h3>{date}</h3>
      </div>

      <div className="line"></div>
    </div>
  );
}
export default Trip;
