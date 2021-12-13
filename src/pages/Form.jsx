import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form({ initialTrip, handleSubmit, buttonLabel }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialTrip);
  //handlechange
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmission = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    navigate("/trips");
  };
  return (
    <form className="form" onSubmit={handleSubmission}>
      <label htmlFor="where you are going ">
        Where are you going:
        <input
          type="text"
          onChange={handleChange}
          value={formData.place}
          name="place"
        />
      </label>
      <label htmlFor="description ">
        Description:
        <input
          type="text"
          onChange={handleChange}
          value={formData.description}
          name="description"
        />
      </label>
      <label htmlFor="description ">
        Who's going:
        <input
          type="text"
          onChange={handleChange}
          value={formData.goingWith}
          name="goingWith"
        />
      </label>
      <label htmlFor="trip notes">
        Notes:
        <input
          type="text"
          onChange={handleChange}
          value={formData.tripNotes}
          name="tripNotes"
        />
      </label>
      <label htmlFor="type">
        type of trip:
        <select name="type" onChange={handleChange} value={formData.type}>
          <option value="Aborad">Aborad</option>
          <option value="Roadtrip">Roadtrip</option>
          <option value="Camping">Camping</option>
          <option value="Cruise">Cruise</option>
          <option value="City">City</option>
          <option value="Sightseeing">Sight seeing</option>
        </select>
      </label>
      <label htmlFor="date of trip">
        when:
        <input
          type="date"
          name="date"
          onChange={handleChange}
          value={formData.date}
        />
      </label>
      <label htmlFor="completed">
        completed?
        <select
          name="complete"
          onChange={handleChange}
          value={formData.complete}
        >
          <option value={true}>true</option>
          <option value={false}>false</option>
        </select>
      </label>

      <input type="submit" value={buttonLabel} />
    </form>
  );
}

export default Form;
