import { FlatList, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { React, useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppContext } from '../Component/GlobalVariables';

export function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchwords, setSearchWords] = useState([]);



    function Search() {
        let API = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`
        fetch(API)
            .then(response => response.json())
            .then((result) => {
                console.log(result[0])
                // console.log(result[0].meanings[0].definitions[0])
                setSearchWords(result);
            })

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.view}>
                    <Text style={[styles.input, { marginVertical: 10, }]}>Dictionary</Text>
                    <TextInput
                        placeholder="Enter word to search"
                        style={styles.search}
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                    />
                    <TouchableOpacity onPress={Search} style={styles.btn}>
                        <Text style={{ fontSize: 18 }}>Search</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={searchwords}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ padding: 5, marginTop: 15, borderRadius: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: "bold", borderBottomWidth: 0.5, borderBottomColor: "black", }}>Word: {item.word}</Text>
                                <Text style={{ fontSize: 19, fontWeight: "bold", marginVertical: 10 }}>Pronunciation: {item.phonetic}</Text>
                                <Text style={{ fontSize: 17, }}>Antonyms: {item.meanings[0].antonyms.join(', ')}</Text>
                                <Text style={{ fontSize: 17, marginTop: 5 }}>Synonyms: {item.meanings[0].synonyms.join(', ')}</Text>
                                <Text style={{ fontSize: 15, fontWeight: "bold", marginVertical: 10 }}>Meaning</Text>
                                {item.meanings[0].definitions.map((definition, index) => (
                                    <Text key={index} style={{ fontSize: 18 }}>
                                     {index + 1}. {item.meanings[0].partOfSpeech}:  {definition.definition}
                                    </Text>
                                ))}
                                {/* <Text style={{fontSize:18,}}>{item.meanings[0].partOfSpeech}: {item.meanings[0].definitions[0].definition}</Text> */}
                            </View>

                        )
                    }}
                    key={({ item }) => { item }}
                />

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 10,
    },
    input: {
        textAlign: "center",
        fontSize: 25,
    },
    search: {
        padding: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "lightblue",
        borderRadius: 10,
        fontSize: 18,
        marginVertical: 10,
    },
    btn: {
        backgroundColor: "lightblue",
        borderWidth: 1, borderColor: "black",
        borderRadius: 15,
        padding: 10,
        alignSelf: "center",
        paddingHorizontal: 15
    },
    view: {
        justifyContent: "center"
    }
})