import { View } from 'react-native';
import { CLSStyles } from "../styles/styles.js";
import GeneralList from "../components/GeneralList.js";

export default function CharactersListScreen({ navigation }) {
    return(
        <View style={CLSStyles.container}>
            <GeneralList api={"https://rickandmortyapi.com/api/character"} navigation={navigation} />
        </View>
    );
}