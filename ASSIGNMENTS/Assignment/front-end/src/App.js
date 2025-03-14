import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './App.css';

function App() {
  const [overview, setOverview] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getOverview')
      .then(res => res.json())
      .then(data => setOverview(data))
      .catch(err => console.error(err));

    fetch('http://localhost:8000/getEdu')
      .then(res => res.json())
      .then(data => setEducation(data))
      .catch(err => console.error(err));

    fetch('http://localhost:8000/getExp')
      .then(res => res.json())
      .then(data => setExperience(data))
      .catch(err => console.error(err));

    fetch('http://localhost:8000/getSkills')
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <header>
        <h1>{overview.name}</h1>
        <p>
          {overview.phone} | {overview.email} | {overview.location}
        </p>
      </header>
      <Container>
        {/* Overview Section */}
        <section>
          <p>{overview.summary}</p>
        </section>

        {/* Education Section */}
        <section>
          <h2>Education</h2>
          {education.map((edu, index) => (
            <Card key={index}>
              <Card.Body>
                <Card.Title>{edu.institution}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {edu.location} | {edu.period}
                </Card.Subtitle>
                <Card.Text>
                  {edu.program || edu.degree}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </section>

        {/* Experience Section */}
        <section>
          <h2>Experience</h2>
          {experience.map((exp, index) => (
            <Card key={index}>
              <Card.Body>
                <Card.Title>{exp.title} - {exp.company}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {exp.location} | {exp.period}
                </Card.Subtitle>
                <Card.Text>{exp.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </section>

        {/* Skills Section */}
        <section>
          <h2>Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      </Container>
    </>
  );
}

export default App;
