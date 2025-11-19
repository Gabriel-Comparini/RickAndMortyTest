import { TouchableOpacity, View, Image, ImageBackground } from 'react-native';

import { CDSStyles } from "../styles/styles.js";
import CharInfo from '../components/CharInfo.js';

export default function CharactersDetailScreen({ navigation, route }) {
    const { pers } = route.params;
    return(
        <ImageBackground source={require('../styles/icons/rickwall2.webp')} style={CDSStyles.container}>
            <TouchableOpacity style={CDSStyles.btn} onPress={() => navigation.goBack()}>
                <Image source={require('../styles/icons/back-arrow-svgrepo-com.png')} style={{width: '90%', height: '90%'}} />
            </TouchableOpacity>
            <CharInfo item={pers} />
        </ImageBackground>
    );
}