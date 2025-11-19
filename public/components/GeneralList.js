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

  useEffect(() => {
    searchForData(true);
  }, [name]);

  const searchForData = async (reset = false) => {
    if (isLoading) return;
    if (!reset && !more) return;

    setLoading(true);

    let currentPage = 0;

    if (reset) {
      currentPage = 1;
    } else {
      currentPage = page;
    }

    try {
      let newItems = [];
      const response = await fetch(`${api}?page=${currentPage}&name=${name}`);
      const json = await response.json();

      if (Array.isArray(json.results)) {
        newItems = json.results
      } else {
        if (Array.isArray(json)) {
          newItems = json;
        } else {
          newItems = [];
        }
      }

      if (reset) {
        setData(newItems);
        setPage(2);
      } else {
        setData(prev => {
          const map = new Map();
          [...prev, ...newItems].forEach(item => map.set(item.id, item));
          return Array.from(map.values());
        });
        
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
      />
    </View>
  );
}
