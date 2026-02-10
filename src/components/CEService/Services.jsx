import React from 'react'
import ExcavationServices from '../Services/ExcavationServices/ExcavationServices'
import DemolitionDismantle from '../Services/DemolitionDismantle/DemolitionDismantle'
import SitePreparations from '../Services/SitePreparations/SitePreparations'

const Services = () => {
  return (
    <>
    <ExcavationServices/>
    <DemolitionDismantle/>
    <SitePreparations/>
    </>
  )
}

export default Services