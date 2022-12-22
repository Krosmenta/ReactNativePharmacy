import React, { useState, useEffect } from "react";
import { Linking } from 'react-native';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { pharmacy_style } from "./styles/pages_styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Surface } from "react-native-paper";

var done = false;
function App() {
  const [pharmacies, setPharmacies] = useState({});
  useEffect(() => {
    fetchData();
  });
  async function fetchData() {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        //console.log(JSON.parse(this.responseText).data);
        setPharmacies(JSON.parse(this.responseText).data);
        done = true;
      }
    });

                                  xhr.open("GET", "https://www.nosyapi.com/apiv2/pharmacy?city=edirne");
                                  xhr.setRequestHeader("Content-Type", "application/json");
                                  xhr.setRequestHeader("Authorization", "Bearer dL5kGnD4l1Q6Id97y3r5o9GRWhuLG5HeYZE2DVBkhGGXd70qgWPWCoa3JaZe");
    
    if(!done){
      console.log("api request!");
      xhr.send(data);
    }
    
  }
  
  const renderPharmacy = ({ item }) => (
        
    <View style={pharmacy_style.arkaplan}>

      <View style={pharmacy_style.container}>
          <Text style={pharmacy_style.title_name}> {item.EczaneAdi} </Text>
          <Text style={pharmacy_style.title_ilce}> {item.ilce} </Text>
          <View style={pharmacy_style.icons2}>
                  <Icon name="map-marker" size={25} color='red'/>
                  <Text style={pharmacy_style.icons3}>{item.Adresi}</Text>
          </View>
          <View style={pharmacy_style.icons2}>
                  <Icon name="phone" size={22} color='red'/>
                  <Text style={pharmacy_style.icons3}>{item.Telefon}</Text>
          </View>

                      <View style={pharmacy_style.container2}>
                  
                          <TouchableOpacity style={pharmacy_style.icons} onPress={()=>Linking.openURL(`tel:${item.Telefon}`)}>
                            <Text style={pharmacy_style.yol}>  Arama  </Text>
                            <Icon name="phone" size={17} color='red' />
                          </TouchableOpacity> 
                    
                          <TouchableOpacity style={pharmacy_style.icons} onPress={()=>Linking.openURL("https://www.google.com/maps/search/?api=1&query="+item.latitude+","+item.  longitude)}>
                            <Text style={pharmacy_style.yol}>  Haritada Göster </Text>
                            <Icon name="map" size={15} color='red' />
                          </TouchableOpacity> 

                          <TouchableOpacity style={pharmacy_style.icons} onPress={()=>Linking.openURL("https://www.google.com/maps/dir/?api=1&destination="+item.latitude+","+item.  longitude)}>
                            <Text style={pharmacy_style.yol}>  Yol Tarifi </Text>
                            <Icon name="map-marker" size={17} color='red' />
                          </TouchableOpacity> 

                      </View> 
           </View>
    </View>
    
  );
  return (
    <View>
      <FlatList
        data={pharmacies}
        renderItem={renderPharmacy}
        keyExtractor={()=>Math.random().toString()}
      />
    </View>
  );
}
export default App;