import React, {useState} from "react";
import {StyleSheet, View, FlatList, Dimensions} from "react-native";
import {posts} from "./fixture/posts";
import Post from "./components/Post";

const App = () => {
  let [data] = useState(posts)
  let [page, setPage] = useState(0)


  let onScrollEnd = (e) => {
    let contentOffset = e.nativeEvent.contentOffset;
    let viewSize = e.nativeEvent.layoutMeasurement;
    let pageNum = Math.floor(contentOffset.y / viewSize.height);
    setPage(pageNum);
  }

  return (
    <View>
      <FlatList
        data={data}
        onMomentumScrollEnd={onScrollEnd}

        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item, index}) => <Post item={item} play={page===index}/>}
        showsVerticalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});
