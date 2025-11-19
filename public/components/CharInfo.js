import { View, Image, Text, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { ListStyle } from "../styles/styles";

export default function CharInfo ({ item }) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const opSizes = 15;

  useEffect(() => {
    console.log("URL recebida:", item);
    fetch(item)
    .then(res => res.json())
    .then(json => {setData(json);setLoading(false);})
    .catch(err => {console.error("Erro ae: ", err);setLoading(false);});
  }, [item]);

  if(isLoading) {
    return(
        <View>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
  }

  return(
    <View style={[ListStyle.item, {width: 350}]}>
        <Image source={{ uri: data.image}} style={{ width: 200, height: 200 }} />
        <Text style={[ListStyle.text, {fontSize: 20, marginTop:15, marginBottom:10, fontStyle: 'italic', fontWeight:'bold'}]}>{data.name}</Text>
        <Text style={[ListStyle.text, {fontSize: opSizes}]}>Status: {data.status}</Text>
        <Text style={[ListStyle.text, {fontSize: opSizes}]}>Espécie: {data.species}</Text>
        <Text style={[ListStyle.text, {fontSize: opSizes}]}>Genero: {data.gender}</Text>
        <Text style={[ListStyle.text, {fontSize: opSizes}]}>Origem: {data.origin.name}</Text>
        <Text style={[ListStyle.text, {fontSize: opSizes}]}>Loc. Atual: {data.location.name}</Text>
    </View>
  );
}