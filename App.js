import React, {useEffect, useState} from "react";
import {StyleSheet, View, Image, Text, FlatList} from "react-native";
import axios from "axios";


const App = () => {
  let [url] = useState('https://jsonplaceholder.typicode.com/photos?_limit=5&_page=')
  let [page, setPage] = useState(0)
  let [data, setData] = useState([])
  let [refreshing, setRefreshing] = useState(false)

  useEffect(async () => {
    await initData()
  }, [])

  const initData = async () => {
    try {
      let axiosConfig = {
        url: url+page,
        method: 'get'
      }
      let res = await axios(axiosConfig)
      setData(res.data)
      setPage(page+1)
    } catch (e) {
      console.error(e)
    }
  }

  const addData = async () => {
    try {
      let axiosConfig = {
        url: url+page,
        method: 'get'
      }
      let res = await axios(axiosConfig)
      setData(data.concat(res.data))
      setPage(page+1)
    } catch (e) {
      console.error(e)
    }
  }

  const renderItem =  ({item, index}) => {
    return <View style={{borderBottomWidth: 1, marginTop: index===0? 0: 20}}>
      <Image source={{uri: item.url}} style={{height: 200}}/>
      <Text>{item.title}</Text>
    </View>
  }

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => 'key'+index}
        renderItem={renderItem}
        onEndReached={addData}
        onEndReachedThreshold={0.8}
        refreshing={refreshing}
        onRefresh={initData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});

export default App;