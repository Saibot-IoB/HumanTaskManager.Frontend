import { useEffect, useState } from 'react';
import { BackHandler, Modal, Text, StyleSheet, Pressable, Alert, View } from 'react-native';
import Button from './Button';

export default function PreventBackNavigationModal() {
    const [modalVisible, setModalVisible] = useState(false);
    
    // Disable Android back button
    useEffect(() => {
        const backAction = () => {
            setModalVisible(true);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);
    
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>
                            You can't navigate back right now
                        </Text>
                        <Text style={styles.modalText}>
                            Please don't exit the application before the experiment has finished.
                        </Text>
                        <Button onPress={() => setModalVisible(!modalVisible)} text={'OK'} style={{ width: 200}} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalTitle: {
        fontSize: 20,
        marginBottom: 15,
        textAlign: 'center',    
    },
    modalText: {
        marginBottom: 15,
        fontSize: 16,
        textAlign: 'justify',
    },
});