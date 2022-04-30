import React from 'react'

// Components
import { ContainerPhotos } from '../../Layout/ContainerPhotos/ContainerPhotos'
import { FormAddPhoto } from '../../Layout/FormAddPhoto/FormAddPhoto'

export const Home = () => {
  return (
    <div>
      <ContainerPhotos/>
      <FormAddPhoto/>
    </div>
  )
}
