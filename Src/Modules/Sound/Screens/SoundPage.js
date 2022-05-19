import React, { useState, useEffect } from "react";
import { Alert, Button, View, Text, FlatList } from "react-native";
import { BottomSheet, Input, ListItem } from "react-native-elements";
import GlobalStore from '../../Global/Store';

const SoundPage = () => {

  const [name, setName] = useState("")
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    GlobalStore.loadSurahDetail();
  }, [])

  const list = [
    {
      title: "Kapat",
      containerStyle: {
        backgroundColor: "red",
        titleStyle: { color: "white", },
      },
      onPress: () => setIsVisible(false),
    }
  ]

  return (
    <View>
      <Input
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)} />

      <Button title="Submit" onPress={() => setIsVisible(true)} />
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{ backgroundColor: "white" }}

      >
        <Text style={{ color: "black" }}>{GlobalStore.quranList.name}</Text>
        {
          list.map((item, key) => (
            <ListItem key={key} containerStyle={item.containerStyle} onPress={item.onPress}>
              <ListItem.Content>
                <ListItem.Title style={item.titleStyle}>{item.title}</ListItem.Title>
              </ListItem.Content>

            </ListItem>
          ))
        }

      </BottomSheet>
    </View>
  )
}
export default SoundPage;