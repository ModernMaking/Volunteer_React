import React from 'react';
import { YMaps, Map, Placemark, GeoObject } from 'react-yandex-maps';

const mapState = { center: [55.76, 37.64], zoom: 12 };

const placemarks = {'1':[55.76, 37.64]}

class MapBasics extends React.Component {
  state = { showMap: true };

  toggleMap() {
    const { showMap } = this.state;
    this.setState({ showMap: !showMap });
  }

  render() {
    const { showMap } = this.state;

    return (
      <YMaps>
        <div id="map-basics">
          {showMap &&
            // When initializing the map, you must specify
            // its center and the zoom factor.
            <Map state={mapState}>
                

        <GeoObject
        // The geometry description.
        geometry={{
          type: 'Point',
          coordinates: [55.762, 37.65],
        }}
        // Properties.
        properties={{
          // The placemark content.
          iconContent: 'Волонтер в библиотеку',
          hintContent: 'Ну давай уже тащи',
        }}
        // Options.
        options={{
          // The placemark's icon will stretch to fit its contents.
          preset: 'islands#blackStretchyIcon',
          // The placemark can be moved.
          //draggable: true,
        }}
      />


<GeoObject
        // The geometry description.
        geometry={{
          type: 'Point',
          coordinates: [55.749, 37.63],
        }}
        // Properties.
        properties={{
          // The placemark content.
          iconContent: 'Аниматор',
          hintContent: 'Ну давай уже тащи',
        }}
        // Options.
        options={{
          // The placemark's icon will stretch to fit its contents.
          preset: 'islands#blackStretchyIcon',
          // The placemark can be moved.
          //draggable: true,
        }}
      />


                </Map>}

          {/* To destroy it, just unmount component */}
          <button onClick={() => this.toggleMap()}>
            {showMap ? 'Delete map' : 'Show map'}
          </button>
        </div>
      </YMaps>
    );
  }
}

export default MapBasics;
