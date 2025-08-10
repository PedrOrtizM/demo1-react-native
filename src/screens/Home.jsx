import { View } from 'react-native'
import { Hero } from "../components/Hero"
import { CustomCarousel } from "../components/Carousel"
import { getCities } from '../services/CityService'
import { useEffect, useState } from 'react'

export const Home = () => {

  const [cities, setCities] = useState([])
  useEffect(() => {
    getCities().then(setCities), []
  })

  return (
    <View>
      <Hero title="MyTinerary" subTitle="Your perfect trip, just a click away." />
      <CustomCarousel cities={cities} />
    </View>
  )
}
