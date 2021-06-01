import React, { useState, useEffect, Fragment } from "react"
import { StyleSheet, View, Text,TouchableOpacity, ImageBackground} from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign';

function useQuote() {
	const [quote, setQuote] = useState(null)

	useEffect(() => {
		updateQuote()
	}, [])

	function updateQuote() {
		fetch("http://192.168.1.26:3000/posts")
			.then((response) => response.json())
			.then((quotes) => {
				const randomIndex = Math.floor(Math.random() * quotes.length)
				setQuote(quotes[randomIndex])
			})
	}

	return { quote, updateQuote }
}

function dislike(){
  alert('Nous ferons de sortes que vous aimeriez toutes les citations la prochaine fois ❤️')

}

function share(){
  alert('Share it with love - NSK ❤️ ')

}

export default function App() {

  
	const { quote, updateQuote } = useQuote()

  

	return (
    
		<View style={styles.container}>

      
        <View style={[styles.header]} >
        
        <Text style={styles.headerText}>Wolof Ndiaye</Text>

        </View>

          <View style={styles.cardBody}>

            

        {quote && (
                          <Fragment>
                            <Text style={styles.quoteText}>{quote.message}</Text>
                            <Text style={styles.quoteAuthor}> - {quote.author}</Text>
                            
                          </Fragment>
                        )}

          </View>
                            <View  style={styles.flex}> 
                            
                            <TouchableOpacity onPress={updateQuote}>
                          <Text><AntDesign style={styles.icon} name="heart" size={50} color="white"/></Text>
                           </TouchableOpacity>
                          
                            
                            
                            <View style={{ width: 50, height: 50}}>

                              
                            </View>
                                
                                        <TouchableOpacity onPress={dislike}>
                                        <Text><AntDesign name="dislike1" size={50} color="white"/></Text>
                                        </TouchableOpacity>

                                        <View style={{ width: 50, height: 50}}>

                              
                            </View>            

                                        <TouchableOpacity onPress={share}>
                                        <Text><AntDesign name="sharealt" size={50} color="white"/></Text>
                                        </TouchableOpacity>


                            </View>
          
    </View>






	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:"brown",
		alignItems: "center",
		justifyContent: "center",
		padding: 25,
	},
	quoteText: {
		
		fontSize: 48,
    paddingTop:50,
    paddingRight:5,
    paddingLeft:30,
    alignItems: "stretch",

    
    
	},
	quoteAuthor: {
		fontSize: 20,
		marginTop: 400,
    fontWeight:"600",
    paddingLeft:20,
    color:"gray",
    position:"absolute",
	},
 
 
 
  flex:{
  flexDirection:'row',
  justifyContent:'space-around',
  
 },
  

    cardBody: {
    
      backgroundColor: 'whitesmoke',
      marginTop: 20,
      marginLeft:10,
      marginRight:10,
      borderBottomRightRadius: 25,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      borderBottomLeftRadius: 25,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 4,
      position:'absolute',
      width:350,
      marginTop:440,
      height:442,
      
      
    },  
    headerText: {
      fontSize: 26,
      textAlign: "center",
      margin: 10,
      color: 'white',
      fontWeight: "900",
      paddingBottom:600
    },

    icon:{
    
    },
})