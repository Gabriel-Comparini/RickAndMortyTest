import { View, Image, TextInput } from 'react-native';
import { CLSStyles } from "../styles/styles.js";
import GeneralList from "../components/GeneralList.js";

export default function CharactersListScreen({ navigation }) {
    return(
        <View style={CLSStyles.container}>
            <Image source={require('../styles/icons/Rick_and_Morty.png')} style={{ width: 350, height: 100 }} />
            <GeneralList api={"https://rickandmortyapi.com/api/character"} navigation={navigation} />
        </View>
    );
}