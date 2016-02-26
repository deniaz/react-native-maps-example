/**
 * @flow
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator
} from 'react-native';

import OverviewMap from './OverviewMap';

class AroundMe extends Component {
  render() {
    <Navigator
      initialRoute={{name: 'Around Me', index: 0}}
      renderScene={(route, navigator) =>
        <OverviewMap
          name={route.name}
          onForward={() => {
            let nextItem = route.index + 1;
            navigator.push({
              name: 'Around Me',
              index: nextItem
            });
          }}
          onBack={() => {
            if (route.index > 0) {
              navigator.pop();
            }
          }}
         />
      }
     />
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('AroundMe', () => AroundMe);
