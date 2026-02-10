import React from 'react'
import ProjectHero from './ProjectHero'
import ProjectText from './ProjectText'

import ongoing1 from "../../assets/services/SSSE9.jpg"
import ongoing2 from "../../assets/services/SSSE8.jpg"
import ongoing3 from "../../assets/services/SSSE7.jpg"
import ongoing4 from "../../assets/services/SSSE6.jpg"
import ongoing5 from "../../assets/services/SSSE5.jpg"

import completed1 from "../../assets/services/SSSE1.jpg"
import completed2 from "../../assets/services/SSSE11.jpg"
import completed3 from "../../assets/services/SSSE2.jpg" 
import completed4 from "../../assets/services/SSSE12.jpg" 
import completed5 from "../../assets/services/SSSE10.jpg" 
import completed6 from "../../assets/services/SSSE14.png" 
import completed7 from "../../assets/services/SSSE15.jpg" 
import completed8 from "../../assets/services/SSSE16.jpg" 

export default function ProjectBody() {
  const projects = [
    { id: 1, name: 'Century Ethos', location: 'Bangalore, Karnataka', image: ongoing1, status: 'Ongoing' },
    { id: 2, name: 'Brigade Buena Vista', location: 'Bangalore, Karnataka', image: ongoing2, status: 'Ongoing' },
    { id: 3, name: 'Regent Hirise Residential Tower', location: 'Kolkata, West Bengal', image: ongoing3, status: 'Ongoing' },
    { id: 4, name: 'Brigade Xanadu', location: 'Chennai, Tamil Nadu', image: ongoing4, status: 'Ongoing' },
    { id: 5, name: 'Project E', location: 'Location E', image: ongoing5, status: 'Ongoing' },
    { id: 6, name: 'Project G', location: 'Location G', image: completed1, status: 'Completed' },
    { id: 7, name: 'Project H', location: 'Location H', image: completed2, status: 'Completed' },
    { id: 8, name: 'Project I', location: 'Location I', image: completed3, status: 'Completed' },
    { id: 9, name: 'Project J', location: 'Location J', image: completed4, status: 'Completed' },
    { id: 10, name: 'Project K', location: 'Location K', image: completed5, status: 'Completed' },
    { id: 11, name: 'Project L', location: 'Location L', image: completed6, status: 'Completed' },
    { id: 12, name: 'Project M', location: 'Location M', image: completed7, status: 'Completed' },
    { id: 13, name: 'Project N', location: 'Location N', image: completed8, status: 'Completed' },
  ]

  const ongoingProjects = projects.filter((project) => project.status === 'Ongoing')
  const completedProjects = projects.filter((project) => project.status === 'Completed')

  return (
    <>
      <ProjectHero />
      <ProjectText />
      <section className="py-12 bg-zinc-50 text-gray-500">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Ongoing Projects */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center">
              Ongoing Projects
            </h2>
          </div>
          <ul className="space-y-8 mt-8">
            {ongoingProjects.map((project) => (
              <li
                key={project.id}
                className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full md:w-60 h-60 object-cover"
                />
                <div className="p-6 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">{project.name}</h3>
                  <p className="text-sm md:text-base text-gray-600">{project.location}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Completed Projects */}
          <div className="bg-green-100 p-6 rounded-lg shadow-md mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 text-center">
              Completed Projects
            </h2>
          </div>
          <ul className="space-y-8 mt-8">
            {completedProjects.map((project) => (
              <li
                key={project.id}
                className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full md:w-60 h-60 object-cover"
                />
                <div className="p-6 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">{project.name}</h3>
                  <p className="text-sm md:text-base text-gray-600">{project.location}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
