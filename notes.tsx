/**
 * 
 * Para traçar uma rota entre um ponto de origem e destino e exibi-la em um mapa usando React Native, TypeScript e as bibliotecas react-native-maps e expo-location, você pode seguir os seguintes passos:

Instale as bibliotecas react-native-maps e expo-location usando o comando npm install react-native-maps expo-location.

Importe as bibliotecas MapView e Polyline do react-native-maps e Location do expo-location.
 */
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';


// Defina o estado para armazenar as coordenadas de origem e destino e o caminho entre eles.

interface MapState {
    origin?: Location.LocationObject;
    destination?: Location.LocationObject;
    route?: Location.LocationObject[];
  }
  
  const [mapState, setMapState] = useState<MapState>({});

// Crie uma função getDirections que usa a API do Google Maps Directions para obter as coordenadas de rota entre a origem e o destino.

async function getDirections(origin: Location.LocationObject, destination: Location.LocationObject) {
    const apiUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}&key=${API_KEY}`;
    const response = await fetch(apiUrl);
    const json = await response.json();
    const points = json.routes[0].overview_polyline.points;
    const route = Location.decodePolyline(points);
    return route;
  }

// Defina uma função getCurrentLocation que usa a biblioteca expo-location para obter as coordenadas atuais do dispositivo.

async function getCurrentLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }
  
    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    return { latitude, longitude };
  }

  
  //Crie uma função handleDirections que obtém as coordenadas de origem e destino e as coordenadas de rota entre eles.

  async function handleDirections() {
    const origin = await getCurrentLocation();
    const destination = { latitude: DESTINATION_LATITUDE, longitude: DESTINATION_LONGITUDE };
    const route = await getDirections(origin, destination);
    setMapState({ origin, destination, route });
  }

  
// Renderize um componente MapView com marcadores para a origem e o destino e uma Polyline para mostrar a rota entre eles.

return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{latitude: INITIAL_LATITUDE, longitude: INITIAL_LONGITUDE, latitudeDelta: 0.0922, longitudeDelta: 0.0421}}>
        {mapState.origin && <Marker coordinate={mapState.origin} />}
        {mapState.destination && <Marker coordinate={mapState.destination} />}
        {mapState.route && <Polyline coordinates={mapState.route} />}
      </MapView>
      <Button title="Get Directions" onPress={handleDirections} />
    </View>
  );

  /**
   * Lembre-se de que você precisa obter uma chave de API válida do Google Maps para usar a função getDirections. Substitua API_KEY pela sua chave de API.

Além disso, você precisa substituir as constantes INITIAL_LATITUDE, INITIAL_LONGITUDE, DESTINATION_LATITUDE e DESTINATION_LONGITUDE pelas coordenadas iniciais do mapa e de destino desejadas.

Por fim, você pode personalizar a aparência do mapa e dos marcadores ajustando as propriedades do MapView e do Marker.
   */