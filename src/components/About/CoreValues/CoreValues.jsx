
import React from 'react';
import vision from "../../../assets/services/SSSE27.jpg" 
import mission from "../../../assets/services/SSSE21.jpg" 
import core from "../../../assets/services/SSSE22.jpg" 
import purpose from "../../../assets/services/SSSE23.jpg"
 import strategy from "../../../assets/services/SSSE25.jpg"
 import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faRocket, faDiamond, faBullseye, faChartLine } from '@fortawesome/free-solid-svg-icons';
import CoreHero from './CoreHero';
import CoreText from './CoreText';

const CoreValues = () => {
    const values = [
        { id: 1, name: 'VISION', icon: faEye, imageSrc: vision },
        { id: 2, name: 'MISSION', icon: faRocket, imageSrc: mission },
        { id: 3, name: 'CORE VALUES', icon: faDiamond, imageSrc: core },
        { id: 4, name: 'PURPOSE', icon: faBullseye, imageSrc: purpose },
        { id: 5, name: 'STRATEGY', icon: faChartLine, imageSrc: strategy },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    return (
        <>
        <CoreHero/>
        <CoreText/>
        <motion.div
            className="bg-gradient-to-r from-gray-100 to-gray-200 p-8 rounded-none shadow-lg"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {values.map((value) => (
                    <motion.div
                        key={value.id}
                        className="bg-white rounded-none 
                        md:h-[300px]
                        shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl
                        hover:bg-amber-500 hover:text-white text-zinc-950"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="relative h-40">
                            <img
                                src={value.imageSrc}
                                alt={value.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-55 flex items-center justify-center">
                                <FontAwesomeIcon
                                    icon={value.icon}
                                    className="text-amber-500 text-4xl"
                                />
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold  mb-2">
                                {value.name}
                            </h3>
                            <p className="text-sm ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
        </>
    );
};

export default CoreValues;