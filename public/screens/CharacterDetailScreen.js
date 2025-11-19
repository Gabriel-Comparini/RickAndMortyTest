import { TouchableOpacity, View, Image } from 'react-native';

import { CDSStyles } from "../styles/styles.js";
import CharInfo from '../components/CharInfo.js';

export default function CharactersDetailScreen({ navigation, route }) {
    const { pers } = route.params;
    return(
        <View style={CDSStyles.container}>
            <TouchableOpacity style={CDSStyles.btn} onPress={() => navigation.goBack()}>
                <Image source={require('../styles/icons/back-arrow-svgrepo-com.png')} style={{width: '100%', height: '100%'}} />
            </TouchableOpacity>
            <CharInfo item={pers} />
        </View>
    );
}