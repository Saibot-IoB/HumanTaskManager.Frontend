import { Text, View } from 'react-native';
import PreventBackNavigationModal from '../components/PreventBackNavigationModal';

export default function WaitingScreen() {
    
    return (
        <>
            <PreventBackNavigationModal/>
            <View>
                <Text>
                    Waiting Screen
                </Text>
            </View>
        </>
    )
}