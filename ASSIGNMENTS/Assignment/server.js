const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());

// Overview information
const overview = {
  name: "Kelvin Mamode Ovbije",
  phone: "437-665-0178",
  email: "kelvin1.ovbije1@gmail.com",
  location: "Brampton, ON",
  summary: "Versatile and diligent general laborer with a strong work ethic and years of experience. Demonstrated ability to perform a wide range of physical tasks—from heavy lifting to manual labor—with precision and efficiency. Excellent communication and teamwork skills, with a commitment to maintaining a clean and organized work environment. Seeking to bring my skills and dedication to a dynamic team."
};

// Education details
const education = [
  {
    institution: "Humber College Institute of Technology and Advanced Learning",
    location: "Toronto",
    program: "Computer Programming",
    period: "Jan. 2024 - Present"
  },
  {
    institution: "University Of Benin",
    location: "Nigeria",
    degree: "Bachelors Degree in Computer Science",
    period: "Oct 2003"
  },
  {
    institution: "University Of Benin",
    location: "Nigeria",
    degree: "Diploma in Data Processing (DDP)",
    period: "June 1997"
  }
];

// Professional experience
const experience = [
  {
    title: "Factory Worker - Casual",
    company: "SodaStream",
    location: "Mississauga, ON",
    period: "Sept 2023 - Present",
    description: "Directed by agency to work in diverse company environments on a casual shift basis. Operated machinery and equipment used in the production process, monitored machines to ensure efficiency, received/unloaded and stored raw materials, and transported/distributed materials throughout plant and warehouse."
  },
  {
    title: "Factory Worker - Casual",
    company: "Bloomstar Bouquet",
    location: "Mississauga, ON",
    period: "Sept 2023 - Present",
    description: "Received and inspected incoming floral shipments for quality and freshness. Prepared flowers by removing leaves, thorns, and damaged petals, ensured proper hydration, tracked floral inventory, and applied decorative elements to enhance product presentation."
  },
  {
    title: "Warehouse Stocker, Packer, and Loader - Casual",
    company: "GUS Design Group",
    location: "Mississauga, ON",
    period: "Sept 2023 - Present",
    description: "Received incoming furniture shipments and verified item accuracy. Conducted visual inspections, prepared items for shipment by securely packing, applied appropriate labels and documentation, loaded furniture safely onto trucks, and handled returned/damaged items."
  },
  {
    title: "System Analyst",
    company: "Perception Design Engineers & Builders Limited",
    location: "Lagos, Nigeria",
    period: "2019 - 2023",
    description: "Created detailed system specifications, including workflows and data models. Oversaw system implementations and enhancements, provided ongoing user support, implemented updates and patches, and conducted analysis to identify areas for improvement."
  }
];

// Skills array
const skills = [
  "Time Management",
  "Detail-Oriented",
  "Organizational Skills",
  "Effective Communication",
  "Interpersonal Skills",
  "Problem Solving",
  "Technical Skills",
  "Teamwork",
  "Physical Stamina",
  "Customer Service",
  "Warehouse Experience",
  "Computer Proficiency",
  "Active Listening",
  "Leadership",
  "Prioritization"
];

// Endpoints to return data
app.get('/getOverview', (req, res) => {
  res.json(overview);
});

app.get('/getEdu', (req, res) => {
  res.json(education);
});

app.get('/getExp', (req, res) => {
  res.json(experience);
});

app.get('/getSkills', (req, res) => {
  res.json(skills);
});

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
