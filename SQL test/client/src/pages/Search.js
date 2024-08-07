// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import parag from "../images/5048173.webp";

// const Search = () => {
//     useEffect(() => {
//         const handleInputChange = () => {
//             const searchInput = document.getElementById('searchInput').value.toLowerCase();
//             const blocks = document.querySelectorAll('.block');

//             blocks.forEach(block => {
//                 const state = block.querySelector('.block-item:nth-child(3)').textContent.toLowerCase();
//                 const district = block.querySelector('.block-item:nth-child(4)').textContent.toLowerCase();
//                 const town = block.querySelector('.block-item:nth-child(5)').textContent.toLowerCase();

//                 if (state.includes(searchInput) || district.includes(searchInput) || town.includes(searchInput)) {
//                     block.style.display = 'block';
//                 } else {
//                     block.style.display = 'none';
//                 }
//             });
//         };

//         const searchInput = document.getElementById('searchInput');
//         if (searchInput) {
//             searchInput.addEventListener('input', handleInputChange);
//         }

//         return () => {
//             if (searchInput) {
//                 searchInput.removeEventListener('input', handleInputChange);
//             }
//         };
//     }, []);

//     return (
//         <>
//             <nav className="navbar">
//                 <div className="ss">
//                     <a className="first" href="/">
//                         <img className="img1" src={parag} alt="" /> CROP FINDER
//                     </a>
//                 </div>
//                 <div className="ask">
//                     <Link to="/">Home</Link>
//                     <Link to="#">About us</Link>
//                     <Link to="/login" className="btn1">
//                         Log in
//                     </Link>
//                     <Link to="/signup" className="btn1">
//                         Sign up
//                     </Link>
//                 </div>
//             </nav>
//             <div>
//                 <h1 className="SH1">TO SEARCH WHICH CROP IS BEST FOR YOUR LOCATION PLEASE ENTER THE STATE/DISTRICT/TOWN/VILLAGE</h1>
//             </div>
//             <div>
//                 <form className="se">
//                     <input id="searchInput" className="si" type="search" placeholder="ENTER LOCATION STATE/DISTRICT/TOWN/VILLAGE" />
//                     <button className="sb" type="submit">Search</button>
//                 </form>
//             </div>
//             <div className="block-container">
//                 <div className="block">
//                     <div className="block-item">Farmer Name: John Doe</div>
//                     <div className="block-item">Age: 40</div>
//                     <div className="block-item">State: mp</div>
//                     <div className="block-item">District: Los Angeles</div>
//                     <div className="block-item">Village/Town: yhjgf</div>
//                     <div className="block-item">Crop Name: Corn</div>
//                     <div className="block-item">Crop Type: Hybrid</div>
//                     <div className="block-item">Growing Season: Summer</div>
//                     <div className="block-item">Temperature: 25°C</div>
//                     <div className="block-item">Soil Type: Clay</div>
//                     <div className="block-item">Soil pH: 6.5</div>
//                     <div className="block-item">Availability of Water: High</div>
//                     <div className="block-item">Types of Pesticides: Organic</div>
//                     <div className="block-item">Nutrient Requirements: Balanced</div>
//                     <div className="block-item">Phone: 123-456-7890</div>
//                 </div>
//                 <div className="block">
//                     <div className="block-item">Farmer Name: John Doe</div>
//                     <div className="block-item">Age: 40</div>
//                     <div className="block-item">State: up</div>
//                     <div className="block-item">District: Los Angeles</div>
//                     <div className="block-item">Village/Town: iiijj</div>
//                     <div className="block-item">Crop Name: Corn</div>
//                     <div className="block-item">Crop Type: Hybrid</div>
//                     <div className="block-item">Growing Season: Summer</div>
//                     <div className="block-item">Temperature: 25°C</div>
//                     <div className="block-item">Soil Type: Clay</div>
//                     <div className="block-item">Soil pH: 6.5</div>
//                     <div className="block-item">Availability of Water: High</div>
//                     <div className="block-item">Types of Pesticides: Organic</div>
//                     <div className="block-item">Nutrient Requirements: Balanced</div>
//                     <div className="block-item">Phone: 123-456-7890</div>
//                 </div>
//                 <div className="block">
//                     <div className="block-item">Farmer Name: John Doe</div>
//                     <div className="block-item">Age: 40</div>
//                     <div className="block-item">State: mp</div>
//                     <div className="block-item">District: Los Angeles</div>
//                     <div className="block-item">Village/Town: nnnnn</div>
//                     <div className="block-item">Crop Name: Corn</div>
//                     <div className="block-item">Crop Type: Hybrid</div>
//                     <div className="block-item">Growing Season: Summer</div>
//                     <div className="block-item">Temperature: 25°C</div>
//                     <div className="block-item">Soil Type: Clay</div>
//                     <div className="block-item">Soil pH: 6.5</div>
//                     <div className="block-item">Availability of Water: High</div>
//                     <div className="block-item">Types of Pesticides: Organic</div>
//                     <div className="block-item">Nutrient Requirements: Balanced</div>
//                     <div className="block-item">Phone: 123-456-7890</div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Search;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import parag from "../images/5048173.webp";

const Search = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3002/details')
            .then(response => {
                setData(response.data);
            })
            .catch(error => console.error("Error occurred while fetching data:", error));
    }, []);

    const handleInputChange = (e) => {
        const searchInput = e.target.value.toLowerCase();
        const blocks = document.querySelectorAll('.block');

        blocks.forEach(block => {
            const state = block.querySelector('.block-item:nth-child(3)').textContent.toLowerCase();
            const district = block.querySelector('.block-item:nth-child(4)').textContent.toLowerCase();
            const town = block.querySelector('.block-item:nth-child(5)').textContent.toLowerCase();

            if (state.includes(searchInput) || district.includes(searchInput) || town.includes(searchInput)) {
                block.style.display = 'block';
            } else {
                block.style.display = 'none';
            }
        });
    };

    return (
        <>
            <nav className="navbar">
                <div className="ss">
                    <a className="first" href="/">
                        <img className="img1" src={parag} alt="" /> CROP FINDER
                    </a>
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
            <div>
                <h1 className="SH1">TO SEARCH WHICH CROP IS BEST FOR YOUR LOCATION PLEASE ENTER THE STATE/DISTRICT/TOWN/VILLAGE</h1>
            </div>
            <div>
                <form className="se">
                    <input id="searchInput" className="si" type="search" placeholder="ENTER LOCATION STATE/DISTRICT/TOWN/VILLAGE" onChange={handleInputChange} />
                    <button className="sb" type="submit">Search</button>
                </form>
            </div>
            <div className="block-container">
                {data.map((entry, index) => (
                    <div className="block" key={index}>
                        <div className="block-item">Farmer Name: {entry.farmerName}</div>
                        <div className="block-item">Age: {entry.age}</div>
                        <div className="block-item">State: {entry.state}</div>
                        <div className="block-item">District: {entry.district}</div>
                        <div className="block-item">Village/Town: {entry.villageTown}</div>
                        <div className="block-item">Crop Name: {entry.cropName}</div>
                        <div className="block-item">Crop Type: {entry.cropType}</div>
                        <div className="block-item">Growing Season: {entry.growingSeason}</div>
                        <div className="block-item">Temperature: {entry.temperature}°C</div>
                        <div className="block-item">Soil Type: {entry.soilType}</div>
                        <div className="block-item">Soil pH: {entry.soilPH}</div>
                        <div className="block-item">Availability of Water: {entry.waterAvailability}</div>
                        <div className="block-item">Types of Pesticides: {entry.pesticides}</div>
                        <div className="block-item">Nutrient Requirements: {entry.nutrientRequirements}</div>
                        <div className="block-item">Phone: {entry.phonenumber}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Search;
