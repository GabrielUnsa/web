import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Container } from 'react-bootstrap';
import { MdPlace } from 'react-icons/md';

const LocationPin = () => (
  <div>
    <MdPlace size={30}/>
  </div>
);

class Maps extends Component {
  static defaultProps = {
    center: {
      lat: -24.790334,
      lng: -65.419584
    },
    zoom: 45
  };

  render() {
    return (
      <div id="ubicacion">
        <Container>
          <br />
          <br />
          <br />
          <h1 className="display-4"> Ubicacion </h1>
          <br />
          <div style={{ height: '60vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyA6MosHXa9ZfAHyhSa8nRS9pydTVEU6pZ4' }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <LocationPin
                lat={ -24.789794 }
                lng={ -65.419761 }
              />
            </GoogleMapReact>
          </div>
        </Container>
      </div>
   );
  }
}

export default Maps;
