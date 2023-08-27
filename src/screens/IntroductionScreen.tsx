import { useEffect } from 'react';
import { ScrollView, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import useTime from '../hooks/useTime';
import { NavigationProps } from '../routes/RouteDefinitions';

export default function IntroductionScreen() {
    const navigation = useNavigation<NavigationProps>();
    const { getCurrentTime } = useTime();
    useEffect(() => {
        const time = getCurrentTime();
        
        if (time) {
            Alert.alert(time.toISOString());
        }
    })
    
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <Text style={styles.title}>
                I4.0 Experiment
            </Text>
            <Text style={styles.body}>
                In this experiment you will be asked to complete a set of missions.{`\n\n`}

                In the beginning of the experiment, you will be assigned a home station where you must wait for a 
                mission.{`\n\n`}

                When a new mission is ready for you, the mission tasks and a button will appear on your screen. 
                When you are ready to start the mission, press the button.{`\n\n`}

                Each time you complete a task in a mission, make sure you press the button to record that the task has
                been completed.{`\n\n`}

                When a mission has been completed, you will be asked to return to your home station, where you will wait
                for the next mission.{`\n\n`}

                The experiment is expected to take 1 hour.{`\n\n`}

                Press the button below, when you are at your home station and you are ready to start.{`\n\n`}
            </Text>
            <Button 
                text={'Start Experiment'}
                onPress={() => navigation.navigate('WaitingScreen')}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        textAlign: 'center',
        marginVertical: 20
    },
    body: {
        fontSize: 18,
        paddingHorizontal: 12,
        textAlign: 'justify',
        lineHeight: 24
    }
});
