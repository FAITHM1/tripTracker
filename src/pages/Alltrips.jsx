import Trip from "../componnents/Trip";
function Alltrips({ trips }) {
  return <div className="allTrips">{trips.map((trip) => {
    return <Trip key={trip.id} trip={trip} />;
  }) }</div> 
}
export default Alltrips;
