import { FlatList, Text, View, Image, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import { ListStyle } from '../styles/styles';

export default function GeneralList({ api, navigation }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [more, setMore] = useState(true);

  useEffect(() => {
    searchForData(true);
  }, [api]);

  const searchForData = async (reset = false) => {
    if (isLoading || !more) return;

    setLoading(true);

    const currentPage = reset ? 1 : page;

    try {
      const response = await fetch(`${api}?page=${currentPage}&name=${name}`);
      const json = await response.json();
      const newItems = Array.isArray(json.results) ? json.results : Array.isArray(json) ? json : [];

      if (reset) {
        setData(newItems);
        setPage(2);
      } else {
        setData(prev => [...prev, ...newItems]);
        setPage(prev => prev + 1);
      }

      if (newItems.length === 0) {
        setMore(false);
      }

    } catch (err) {
      console.error("Deu Ruim", err);
    }

    setLoading(false);
    setInitialLoading(false);
  };

  const specSearch = (text) => {
    setName(text);
    setMore(true);
    setPage(1);
    searchForData(true);
  };

  if (initialLoading)
    return (
      <View style={ListStyle.list}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );

  return (
    <View style={ListStyle.list}>
      
      <TextInput
        placeholder="Procure pelo nome..."
        onChangeText={specSearch}
        value={name}
      />

      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={ListStyle.item}
            onPress={() => navigation.navigate("cds", { pers: `${api}/${item.id}` })}
          >
            <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
            <Text style={ListStyle.text}>Nome: {item.name}</Text>
            <Text style={ListStyle.text}>Status: {item.status}</Text>
            <Text style={ListStyle.text}>Espécie: {item.species}</Text>
          </TouchableOpacity>
        )}

        onEndReached={() => searchForData(false)}

        ListFooterComponent={() => {
          if (isLoading) {
            <View style={ListStyle.list}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          }
        }}
      />

    </View>
  );
}
