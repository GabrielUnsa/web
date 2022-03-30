import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Container } from 'react-bootstrap';

const mapStyles = {
  width: '70%',
  height: '70%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Container> 
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: -1.2884,
              lng: 36.8233
            }
          }
        />
      </Container>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBJ7ol8aUfv-D1utdzErQCoxrCBBVEzJho'
})(MapContainer);
