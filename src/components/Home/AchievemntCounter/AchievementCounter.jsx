import React, { useEffect, useState } from 'react';
import { FaUsers, FaBuilding, FaMapMarkerAlt, FaProjectDiagram } from 'react-icons/fa';

const AchievementCounter = () => {
  const [employees, setEmployees] = useState(0);
  const [projects, setProjects] = useState(0);
  const [builtArea, setBuiltArea] = useState(0);
  const [ongoingProjects, setOngoingProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmployees((prev) => (prev < 150 ? prev + 5 : 150));
      setProjects((prev) => (prev < 300 ? prev + 2 : 300));
      setBuiltArea((prev) => (prev < 50 ? prev + 0.1 : 50));
      setOngoingProjects((prev) => (prev < 15 ? prev + 1 : 15));
      setClients((prev) => (prev < 123 ? prev + 1 : 123));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-10">
      <div className="max-w-screen-xl mx-auto text-center">
      <div className="flex items-center justify-center mb-12 px-32">
        <div className="flex-grow border-t w-[70px] border-black"></div>
        <h1 className="text-4xl md:text-2xl font-semibold text-center mx-4 text-amber-500">
          GROUP HIGHLIGHTS
        </h1>
        <div className="flex-grow border-t w-[70px] border-black"></div>
      </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="text-center">
            <FaUsers className="text-6xl text-amber-600 mx-auto" />
            <p className="text-4xl font-normal">{employees}</p>
            <p className="text-amber-600">No of Employees</p>
          </div>
          <div className="text-center">
            <FaBuilding className="text-6xl text-amber-600 mx-auto" />
            <p className="text-4xl font-normal">{projects}</p>
            <p className="text-amber-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <FaMapMarkerAlt className="text-6xl text-amber-600 mx-auto" />
            <p className="text-4xl font-normal">{builtArea.toFixed(1)}</p>
            <p className="text-amber-600">Mill Sq.Ft of Successfully completed Built Up Area</p>
          </div>
          <div className="text-center">
            <FaProjectDiagram className="text-6xl text-amber-600 mx-auto" />
            <p className="text-4xl font-normal">{ongoingProjects}</p>
            <p className="text-amber-600">Ongoing Projects</p>
          </div>
          <div className="text-center">
            <FaUsers className="text-6xl text-amber-600 mx-auto" />
            <p className="text-4xl font-normal">{clients}</p>
            <p className="text-amber-600">No of Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementCounter;
