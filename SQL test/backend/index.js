import express from "express"
import mysql from "mysql2"
import cors from "cors"
const app = express()
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"example@123",
    database:"crop_cultivation"
})

app.post('/signup',async(req,res) => {

    const  phone = req.body.phone;
    const  uname = req.body.uname;
    const  age = req.body.age;
    const  address = req.body.address;
    const  password = req.body.password;
    const  cpassword = req.body.cpassword;

    db.query("INSERT INTO registration (phone, name,age,address,password,cpassword) VALUES (?,?,?,?,?,?)",[phone,uname,age,address,password,cpassword], (err,result)=>{
        console.log(err);
    });
    
});

app.post('/login',(req,res)=>{
    
    const  address = req.body.address;
    const  password = req.body.password;

    db.query("SELECT * FROM registration WHERE address = ? AND password = ?",[address,password], (err,result)=>{
        if(err){
            return res.json("Error");
        }
        
        if(result.length > 0){
            return res.json("Success");
        }else{
            return res.json("Wrong combination");
        }
    });
});

app.post('/details', async (req, res) => {
    const farmerName = req.body.farmerName;
    const age = req.body.age;
    const state = req.body.state;
    const district = req.body.district;
    const villageTown = req.body.villageTown;
    const cropName = req.body.cropName;
    const cropType = req.body.cropType;
    const temperature = req.body.temperature;
    const soilType = req.body.soilType;
    const waterAvailability = req.body.waterAvailability;
    const phonenumber = req.body.phonenumber;
    const nutrientRequirements = req.body.nutrientRequirements;
    const growingSeason = req.body.growingSeason;
    const soilPH = req.body.soilPH;
    const pesticides = req.body.pesticides;

    db.query("INSERT INTO details (farmerName, age, state, district, villageTown, cropName, cropType, temperature, soilType, waterAvailability, phonenumber, nutrientRequirements, growingSeason, soilPH, pesticides) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
    [farmerName, age, state, district, villageTown, cropName, cropType, temperature, soilType, waterAvailability, phonenumber, nutrientRequirements, growingSeason, soilPH, pesticides], 
    (err, result) => {
        if (err) {
            console.error("Error occurred while inserting data into database:", err);
            return res.status(500).json({ message: "An error occurred while submitting the form" });
        }
        console.log("Form submitted successfully");
        return res.status(200).json({ message: "Form submitted successfully" });
    });
});
app.get('/details', (req, res) => {
    // MySQL query to fetch data from the details table
    const query = 'SELECT * FROM details';
  
    // Execute the query
    db.query(query, (error, results) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
  
      // Send the results as JSON response
      res.json(results);
    });
  });

app.listen(3002, ()=>{
    console.log("connected to backend");
})