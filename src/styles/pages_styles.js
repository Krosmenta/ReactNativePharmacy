import { StyleSheet } from "react-native";

const pharmacy_style = StyleSheet.create({
    header:{
      flex:1,
      padding:22,
      margin: 5,

      justifyContent:'space-around',

},

  container: {
    flex:1,
    padding:5,
    backgroundColor:'white',
    borderColor: "black",
    margin: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    
  },
  container2: {  //iconlar bölümünü hizalamak icin 2. container actım
    flex:1,
    padding:5,
    margin: 5,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    flexDirection:'row',
    justifyContent:'space-around',
    
  },
  icons: {
    color: "red",
    textAlign: "center",
    padding:6,
    backgroundColor:'white',
    borderWidth: 2,
    borderColor: "red",
    flexDirection:'row-reverse',
    borderRadius: 22,
    fontWeight: "bold"
    
    
  },
  title_name: {
    color: "#E11507",
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    margin:5,
  },
  title_ilce: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
  },
 
  adresi: {
    fontSize: 14,
    margin:5,
    
  },
  arkaplan: {
    backgroundColor:'#dfdfdf',
  },
  yol:{
    fontWeight:'bold',
    color:'red',
  },
  icons2:{
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center"
    
  },
  icons3:{
    paddingLeft:16,
    fontSize: 14,
    color: "black"
  },
  
});

export { pharmacy_style };