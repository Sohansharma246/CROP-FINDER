import React, { useState } from 'react';
import parag from "../images/5048173.webp";  
import { Link } from 'react-router-dom';
import Axios from 'axios';
const Details = () => {
  const [formData, setFormData] = useState({
    farmerName: '',
    age: '',
    state: '',
    district: '',
    villageTown: '',
    cropName: '',
    cropType: '',
    temperature: '',
    soilType: '',
    waterAvailability: '',
    phonenumber: '',
    nutrientRequirements: '',
    growingSeason: '',
    soilPH: '',
    pesticides: ''
  });

  // Validation function to check if a string contains only non-numeric characters and does not start with a number
  const validateText = (fieldName, fieldValue) => {
    if (fieldValue.trim() === '') {
      alert(`Please enter ${fieldName.toLowerCase()}`);
      return false;
    }
    if (!/^\D+$/.test(fieldValue) || /^\d/.test(fieldValue)) {
      alert(`Please enter a valid ${fieldName.toLowerCase()} (should not start with a number and should not be entirely numeric)`);
      return false;
    }
    return true;
  };

  // Validation for all text fields in the form
  const validateForm = () => {
    if (!validateText("Farmer Name", formData.farmerName)) return false;
    if (!validateText("District", formData.district)) return false;
    if (!validateText("Village/Town", formData.villageTown)) return false;
    if (!validateText("Crop Name", formData.cropName)) return false;
   
    // Add validation for other text fields as needed
    return true; // All fields passed validation
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      Axios.post('http://localhost:3002/details', formData)
        .then((response) => {
          alert("Form submitted successfully");
          console.log(response);
        })
        .catch((error) => {
          alert("An error occurred while submitting the form");
          console.error(error);
        });
    }
  };

  return (
    <>
      <div>
      <nav className="navbar">
        <div className="ss">
          <Link className="first" to="/">
            <img className="img1" src={parag} alt="" /> CROP FINDER
          </Link>
        </div>
        <div className="ask">
          <Link to="/">Home</Link>
          <Link to="#">About us</Link>
          <Link to="/login" className="btn1">
            Log in
          </Link>
          <Link to="/signup" className="btn1">
            Sign up
          </Link>
        </div>
      </nav>
        <div className="det">
          <div>
            <form className="boss" onSubmit={handleSubmit}>
              <h2>Crop Information Form</h2>
              <div className="form-group">
                <label htmlFor="farmerName">Farmer Name:</label>
                <input type="text" id="farmerName" name="farmerName" placeholder="Enter farmer name" required className="the" value={formData.farmerName} onChange={(e) => setFormData({ ...formData, farmerName: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" placeholder="Enter age" required className="the" min="0" max="100" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="state">State:</label>
                <select id="state" name="state" required className="the" value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })}>
                  <option value="">Select state</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="district">District:</label>
                <input type="text" id="district" name="district" placeholder="Enter district" required className="the" value={formData.district} onChange={(e) => setFormData({ ...formData, district: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="villageTown">Village/Town:</label>
                <input type="text" id="villageTown" name="villageTown" placeholder="Enter village/town" required className="the" value={formData.villageTown} onChange={(e) => setFormData({ ...formData, villageTown: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="cropName">Crop Name:</label>
                <input type="text" id="cropName" name="cropName" placeholder="Enter crop name" required className="the" value={formData.cropName} onChange={(e) => setFormData({ ...formData, cropName: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="cropType">Crop Type:</label>
                <select id="cropType" name="cropType" required className="the" value={formData.cropType} onChange={(e) => setFormData({ ...formData, cropType: e.target.value })}>
                  <option value="">Select crop type</option>
                  <option value="Grains">Grains</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="Fruits">Fruits</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="growingSeason">Growing Season:</label>
                <select id="growingSeason" name="growingSeason" required className="the" value={formData.growingSeason} onChange={(e) => setFormData({ ...formData, growingSeason: e.target.value })}>
                  <option value="">Select growing season</option>
                  <option value="Summer">Summer</option>
                  <option value="Winter">Winter</option>
                  <option value="Rainy">Rainy</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="temperature">Temperature:</label>
                <input type="text" id="temperature" name="temperature" placeholder="Enter temperature information" required className="the" value={formData.temperature} onChange={(e) => setFormData({ ...formData, temperature: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="soilType">Soil type:</label>
                <select id="soilType" name="soilType" required className="the" value={formData.soilType} onChange={(e) => setFormData({ ...formData, soilType: e.target.value })}>
                  <option value="">Select soil type</option>
                  <option value="Sandy">Sandy Soil</option>
                  <option value="Clay">Clay Soil</option>
                  <option value="Silt">Silt Soil</option>
                  <option value="Loamy">Loamy Soil</option>
                  <option value="Peaty">Peaty Soil</option>
                  <option value="Chalky">Chalky Soil</option>
                  <option value="Silica">Silica Soil</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="soilPH">Soil pH:</label>
                <select id="soilPH" name="soilPH" required className="the" value={formData.soilPH} onChange={(e) => setFormData({ ...formData, soilPH: e.target.value })}>
                  <option value="">Select soil pH</option>
                  <option value="Acidic">Acidic (pH below 7)</option>
                  <option value="Neutral">Neutral (pH around 7)</option>
                  <option value="Alkaline">Alkaline (pH above 7)</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="waterAvailability">Availability of Water:</label>
                <select id="waterAvailability" name="waterAvailability" required className="the" value={formData.waterAvailability} onChange={(e) => setFormData({ ...formData, waterAvailability: e.target.value })}>
                  <option value="">Select availability</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="phonenumber">Phone:</label>
                <input type="tel" id="phonenumber" name="phonenumber" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="123-456-7890" required className="the" value={formData.phonenumber} onChange={(e) => setFormData({ ...formData, phonenumber: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="nutrientRequirements">Nutrient Requirements:</label>
                <select id="nutrientRequirements" name="nutrientRequirements" required className="the" value={formData.nutrientRequirements} onChange={(e) => setFormData({ ...formData, nutrientRequirements: e.target.value })}>
                  <option value="">Select nutrient requirements</option>
                  <option value="Nitrogen">Nitrogen (N)</option>
                  <option value="Phosphorus">Phosphorus (P)</option>
                  <option value="Potassium">Potassium (K)</option>
                  <option value="Calcium">Calcium (Ca)</option>
                  <option value="Magnesium">Magnesium (Mg)</option>
                  <option value="Sulfur">Sulfur (S)</option>
                  <option value="Micronutrients">Micronutrients</option>
                </select>
              </div>
              
             

              <div className="form-group full">
                <label htmlFor="pesticides">Types of Pesticides:</label>
                <textarea id="pesticides" name="pesticides" placeholder="Enter types of pesticides" value={formData.pesticides} onChange={(e) => setFormData({ ...formData, pesticides: e.target.value })}></textarea>
              </div>
              <button className="sbtn" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
