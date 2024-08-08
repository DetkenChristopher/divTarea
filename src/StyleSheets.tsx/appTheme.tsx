import { StyleSheet } from "react-native";
import { IMPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../common/constantColors";

export const styles=StyleSheet.create({
globaltitle:{
    color:'white',
    fontSize:25,
    paddingHorizontal:30,
    paddingVertical:30
},
ContentBody:{
    backgroundColor:SECUNDARY_COLOR,
    borderTopLeftRadius:30,
borderTopRightRadius:30,
paddingHorizontal:30,
paddingTop:40,
},
titleBody:{
    fontSize:17,
    fontWeight:'bold',
    color:'black'
},
DescriptionBody:{
    fontSize:18,

},
imputText:{
    backgroundColor:SECUNDARY_COLOR,
    paddingHorizontal:20,
    paddingVertical:20,
    borderRadius:10
},
button:{
    backgroundColor:'red',
    paddingVertical:20
},
    contentimput:{
        borderRadius:30,
        gap:20,
        marginTop:30
    },
    buttonText:{
        
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        width: '100%',
        paddingHorizontal: 10,
      },
      result: {
        marginTop: 20,
        fontSize: 18,
      },
      inputfield: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        width: '100%',
        paddingHorizontal: 10,
      },
});
