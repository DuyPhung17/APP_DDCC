import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView , TextInput, TouchableOpacity} from 'react-native'; 
import logo from '../assets/logo.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from 'react-native-dropdown-picker';

const Camera = ()=>{
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Cam1', value: 'cam1'},
        {label: 'Cam2', value: 'cam2'}
    ]);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.pickCam}>
                <Icon name="camera-off" color="white" size={50} />
                <Text style={{color:'white'}}>Mở Camera</Text>
            </TouchableOpacity>
            <View style={styles.controlView} >
                <DropDownPicker
                    style={styles.listPicker}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="Chọn Camera"
                />
                {/* <TouchableOpacity style={styles.btn}>
                    <Text style={{color:'white', marginTop:10}}>Mở Camera</Text>
                </TouchableOpacity> */}
            </View>

                <Text>Thêm Camera</Text>
                <ScrollView style={styles.form}>
                    <Text>Tên Camera</Text>
                    <TextInput style={styles.input} placeholder={"Tên Camera"}/>
                    <Text>RTSP</Text>
                    <TextInput style={styles.input} placeholder={"RTSP"} secureTextEntry={true}/>
                    <Text>URL</Text>
                    <TextInput style={styles.input} placeholder={"URL"} secureTextEntry={true}/>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{color:'white'}}>Thêm mới</Text>
                    </TouchableOpacity>
                </ScrollView>

        </View>
    )
}

export default Camera

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#fff',
    },  
    pickCam: {
        width: '90%',
        aspectRatio:1.5,
        margin: 10,
        backgroundColor: '#2b2b2b',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    controlView:{
        width: '90%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listPicker:{
        width: 200,
        marginBottom: 20
    },
    btn: {
        width: 100,
        height: 50,
        marginTop:5,
        borderRadius: 5,
        backgroundColor: '#8340bd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
    },
    input: {
        width: '70%',
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 7,
        marginTop: 5,
        marginBottom: 10,
        paddingLeft: 20,
        color: 'black',
        fontSize: 13,
    },
});