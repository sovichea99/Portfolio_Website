import React from 'react'
import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';

const TechIcon = ({model}) => {

  return (
   <img
      src={model.imgPath}
      alt={model.name}
      className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
    />
  )
}

export default TechIcon