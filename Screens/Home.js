import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { React, useState } from 'react'

export function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.view}>
                    <Text style={[styles.input, { marginVertical: 10 }]}>Dictionary</Text>
                    <TextInput
                        placeholder="Enter word to search"
                        style={styles.search}
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                    />
                    <TouchableOpacity
                        style={styles.btn}
                    >
                        <Text style={{ fontSize: 18 }}>Search</Text>
                    </TouchableOpacity>
                </View>
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
        fontFamily: 'ABeeZee_400Regular',
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
    view:{
    justifyContent:"center"
    }
})