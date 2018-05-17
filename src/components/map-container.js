import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

export class MapContainer extends React.Component {

	render() {
		return (
			<Map google={this.props.google} 
			centerAroundCurrentLocation={true}>
			</Map>
			)
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyC51icrR_Nln9zxdfp80cxqDDSEyHzDRz8'
})(MapContainer)