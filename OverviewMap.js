/**
 * @flow
 */
'use strict';

import React, {
 Component,
 MapView,
 StyleSheet,
 Text,
 View
} from 'react-native';

class OverviewMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      annotations: [
        {
          longitude: 8.81,
          latitude: 47.22,
          title: 'HSR!',
          subtitle: 'here we go',
          tintColor: MapView.PinColors.PURPLE
        }
      ]
    };
  }

 render() {
   return (
     <View style={styles.container}>
      <MapView
        region={{longitude: 8.81, latitude: 47.22, longitudeDelta: 5, latitudeDelta: 5}}
        style={styles.map}
        annotations={this.state.annotations}
        overlays={[{
          coordinates: [{
            latitude: 47.22, longitude: 8.81
          }, {
            latitude: 45.13, longitude: -94.48
          }, {
            latitude: 39.27, longitude: -83.25
          }, {
            latitude: 32.47, longitude: -107.85
          }],
          strokeColor: '#f007',
          lineWidth: 3,
        }]}
      />
     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
 },
 map: {
   flex: 1,
 },
});

module.exports.title = 'A Fullscreen Map';
module.exports = OverviewMap;
