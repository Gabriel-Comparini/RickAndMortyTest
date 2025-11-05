import { FlatList, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { ListStyle } from '../styles/styles';

export default function GeneralList({ api, navigation }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => { 
    fetch(api)
    .then(response => response.json())
    .then(json => {setData(json.results); setLoading(false);})
    .catch(err => {console.error("Erro ae: ", err); setLoading(false);});
  }, [api]);

  if (isLoading) return (
    <View style={ListStyle.list}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );

  return (
    <View style={ListStyle.list}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity style={ListStyle.item} onPress={() => navigation.navigate("cds")}>
              <Image source={{ uri: item.image}} style={{ width: 100, height: 100 }} />
              <Text style={ListStyle.text}>Nome: {item.name}</Text>
              <Text style={ListStyle.text}>Status: {item.status}</Text>
            </TouchableOpacity>
          )}
        />
    </View>
  );
}