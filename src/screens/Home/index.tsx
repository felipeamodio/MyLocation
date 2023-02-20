import React, { useEffect, useState, useRef } from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import {
    requestForegroundPermissionsAsync, 
    getCurrentPositionAsync,
    LocationObject,
    watchPositionAsync,    
    LocationAccuracy
} from 'expo-location';

import {styles} from './styles';

export default function Home(){
    const [location, setLocation] = useState<LocationObject | null>(null);

    //map reference to follow the route
    const mapRef = useRef<MapView>(null);

    //make sure you get the user's location 
    async function requestLocationPermissions() {
        const {granted} = await requestForegroundPermissionsAsync();

        if(granted){
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);
        }
    }

    //when render the interface we will call the function
    useEffect(() => {
        requestLocationPermissions();
    }, []);

    //watch when location changes
    useEffect(() => {
        watchPositionAsync({
            accuracy: LocationAccuracy.Highest,
            timeInterval: 1000,
            distanceInterval: 1
        }, (response) => {
            setLocation(response);
            mapRef.current?.animateCamera({
                pitch: 20,
                center: response.coords
            })
        })
    }, [])

    return(
        <View style={styles.container}>
            { location &&
                <MapView 
                style={styles.map}
                ref={mapRef}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
            >
                <Marker 
                    coordinate={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude, 
                    }}
                />
            </MapView>
            }
        </View>
    )
}