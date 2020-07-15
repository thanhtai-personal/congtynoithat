import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const GoogleMapComponent = (props: any) => {
  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 10.811828, lng: 106.713898 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: 10.811828, lng: 106.713898 }} />}, 
    </GoogleMap>
  )
}

export default withScriptjs(withGoogleMap(GoogleMapComponent))