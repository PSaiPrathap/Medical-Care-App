const express = require('express');
const connectDB = require('./db');
const itemModel=require("./model/Item")
const cors=require("cors")

const app = express();
//app.use(express.json())
app.use(cors())
connectDB();

app.get("/",async(req,res)=>{
    const response=await itemModel.find()
    //return res.json({items: response})
    return res.json(response)

})

// app.post("/appointments", async (req, res) => {
//   const appointment = req.body
//   try {
//     await db.collection("appointments").insertOne(appointment)
//     res.status(201).send({ message: "Appointment booked" })
//   } catch (err) {
//     res.status(500).send({ message: "Error saving appointment" })
//   }
// })

// const nodemailer = require('nodemailer')

// app.post("/appointments", async (req, res) => {
//   const { patientName, email, datetime, doctorId, doctorName } = req.body

//   if (!patientName || !email || !datetime || !doctorId) {
//     return res.status(400).send({ message: "Missing required fields" })
//   }

//   try {
//     // 1. Save the appointment to DB
//     await db.collection("appointments").insertOne({
//       patientName,
//       email,
//       datetime,
//       doctorId,
//       doctorName,
//       bookedAt: new Date()
//     })

//     // 2. Configure Nodemailer
//     const transporter = nodemailer.createTransport({
//       service: 'gmail', // You can use another like 'hotmail', 'outlook'
//       auth: {
//         user: 'saiprathapaitstpt.com',     // 🔒 replace with your email
//         pass: 'saiprathap'          // 🔐 use App Password (not your real password)
//       }
//     })

//     // 3. Email message setup
//     const mailOptions = {
//       from: 'saiprathapaitstpt.com',
//       to: email,
//       subject: `Appointment Confirmation with Dr. ${doctorName}`,
//       text: `
// Hello ${patientName},

// Your appointment with Dr. ${doctorName} has been successfully booked.

// 📅 Date & Time: ${new Date(datetime).toLocaleString()}
// 📍 Doctor ID: ${doctorId}

// If you need to reschedule, please contact our support team.

// Thank you,
// Team HealthCare
//       `
//     }

//     // 4. Send the email
//     await transporter.sendMail(mailOptions)

//     res.status(201).send({ message: "Appointment booked and email sent" })
//   } catch (err) {
//     console.error("Error booking appointment or sending email:", err)
//     res.status(500).send({ message: "Server error" })
//   }
// })



app.listen(5000, () => {
  console.log('Server started on port 5000');
});
