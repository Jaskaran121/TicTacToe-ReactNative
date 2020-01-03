import React ,{useState} from 'react';
import { View, Text,TouchableOpacity,Modal,TouchableHighlight,Alert} from 'react-native';

const ModalComponent = () => {
    const [visible, setVisiblity] = useState(false);
    return (
        <View style={{marginTop: 22}}>
        <Modal
          animationType="fade"
          transparent={false}
          visible={visible}
        >
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                    setVisiblity(!visible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            setVisiblity(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
      );
}
 
export default ModalComponent;