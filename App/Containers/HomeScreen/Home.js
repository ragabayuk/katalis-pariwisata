import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import images from '../../Themes/Images';

// Styles

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Boy',
      day: 'Senin',
      date: '07 September 1998',
      search: '',
    };
  }
  
  render () {
    return (
      <View style={{flex: 1, backgroundColor: '#f4f4f4',}}>
        <View style={styles.header}>
          <View style={{flex:1, height: 30, backgroundColor: 'white', borderRadius: 8, paddingVertical: 10, marginHorizontal: 10, justifyContent:'center', alignSelf: 'center'}}>
            <TextInput style={{ height:'100%',}}
                        reference={input => {
                        this.search = input;
                        }}
                        value={this.state.search}
                        onChangeText={search => this.setState({search})}/>
          </View>
            <View style={{flex:0.25, backgroundColor: 'yellow'}} >
              <Image source={images.threeDot} />
            </View>
            <View style={{flex:0.25, backgroundColor: 'red'}} >
              <Image source={images.threeDot} />
            </View>
        </View>

        <View style={{height:100, backgroundColor:'#ffffff', marginHorizontal: 10, marginVertical: 10, borderRadius: 8}}>

        </View>

        <View style={{height:250, flexDirection:'row'}}>
          <ScrollView
            horizontal={true}
            style={{ marginHorizontal: 10, marginVertical: 10, borderRadius: 8, }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>

            <View style={{height:200, width:300, backgroundColor:'blue', marginHorizontal: 10, marginVertical: 10, borderRadius: 8}}>

            </View>
            <View style={{height:200, width:300, backgroundColor:'yellow', marginHorizontal: 10, marginVertical: 10, borderRadius: 8}}>

            </View>
          </ScrollView>
        </View>
        
        <View style={{height:220, backgroundColor:'#ffffff', marginHorizontal: 10, marginVertical: 10, borderRadius: 8}}>
          <View style={{flex: 0.5,  flexDirection:'row', alignItems:'center'}}>
            <View style={{backgroundColor:'pink', borderRadius:50, height:75, width:75, marginHorizontal:8}}></View>
            <View style={{backgroundColor:'purple', borderRadius:50, height:75, width:75, marginHorizontal:8}}></View>
            <View style={{backgroundColor:'black', borderRadius:50, height:75, width:75, marginHorizontal:8}}></View>
            <View style={{backgroundColor:'green', borderRadius:50, height:75, width:75, marginHorizontal:8}}></View>
          </View>
          <View style={{flex: 0.5,  flexDirection:'row', alignItems:'center'}}>
            <View style={{backgroundColor:'green', borderRadius:50, height:75, width:75, marginHorizontal:8}}></View>
            <View style={{backgroundColor:'black', borderRadius:50, height:75, width:75, marginHorizontal:8}}></View>
            <View style={{backgroundColor:'purple', borderRadius:50, height:75, width:75, marginHorizontal:8}}></View>
            <View style={{backgroundColor:'pink', borderRadius:50, height:75, width:75, marginHorizontal:8}}></View>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 50, backgroundColor: '#0466c7', justifyContent:'center', flexDirection: 'row'
  },
});

export default Home