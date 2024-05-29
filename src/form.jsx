import React, { useState, useEffect } from "react";

const Form = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [stateOptions, setStateOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);

  useEffect(() => {
    if (country === "India") {
      setStateOptions(["Tamilnadu", "Kerala", "Karnataka"]);
    } else if (country === "Pakistan") {
      setStateOptions(["Karachi"]);
    } else if (country === "Srilanka") {
      setStateOptions(["Northern Srilanka"]);
    } else {
      setStateOptions([]);
    }
  }, [country]);

  useEffect(() => {
    if (state === "Tamilnadu") {
      setCityOptions(["Chennai", "Madurai", "Coimbatore"]);
    } else if (state === "Kerala") {
      setCityOptions(["Kochi", "Thiruvandrom"]);
    } else if (state === "Karnataka") {
      setCityOptions(["Bangalore", "Mangalore"]);
    } else if (state === "Karachi") {
      setCityOptions(["Karachi"]);
    } else if (state === "Northern Srilanka") {
      setCityOptions(["Dumbela"]);
    } else {
      setCityOptions([]);
    }
  }, [state]);

  return (
    <div>
      <h2>Select Options</h2>
      <div>
        <label>Country:</label>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Srilanka">Srilanka</option>
        </select>
      </div>
      <div>
        <label>State:</label>
        <select value={state} onChange={(e) => setState(e.target.value)}>
          <option value="">Select State</option>
          {stateOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label>City:</label>
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Select City</option>
          {cityOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <h3>{country ? `Country: ${country}` : "Select Country"} -&gt; {state ? `State: ${state}` : "Select State"} -&gt; {city ? `City: ${city}` : "Select City"}</h3>
    </div>
  );
};

export default Form;