import Api from '../../core/utils/api';
import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, Image, ImageBackground } from 'react-native'
import Geolocation from '@react-native-community/geolocation';
import {API_KEY} from '../../core/utils/weatherAPI'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { weatherImage } from '../../components/weatherModel';

export default function MainScreen() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null as any);
  const [error, setError] = useState(null as any);
  const [city, setCity] = useState('');

  const fetchApi = async () => {
    try {
      setLoading(true);
      const apiData: any = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${API_KEY}&lang=vi`
      );
      setLoading(false);
      const fetchData: any = await apiData.json();
      setData(fetchData);
      console.log('data: ', data.main.temp);
      console.log('fetch Data: ', fetchData.main.temp);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchApi();
    // console.log('Data: ', Math.round(data.main.temp));
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, alignSelf: 'center' }}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    );
  }

  
  return (
    <ImageBackground 
      source={require(weatherImage((data.weather[0].id)/100))}
      resizeMode="cover"
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <ScrollView style={{ backgroundColor: 'cyan'}}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Input
            containerStyle={{ marginTop: 25 }}
            placeholder="Search"
            leftIconContainerStyle={{ marginRight: 5 }}
            onChangeText={(value) => setCity(value)}
          />
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <Text style={{ fontSize: 35 }}>{data.name}</Text>
          <Text style={{ fontSize: 25 }}>{data.weather[0].description}</Text>
          <Image
            resizeMode='cover'
            style={{ justifyContent: 'center', width: 120, height: 120 }}
            source={{
              uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            }}
          />
          <Text style={{ fontSize: 25 }}>{Math.round(data.main.temp)}</Text>
        </View>
      </ScrollView>
    </ImageBackground>
    
  );
  }
