import { StyleSheet } from "react-native";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";

export default () => {
  function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
    console.log(status);
  }

  return (
    <>
      <Video
        style={StyleSheet.absoluteFill}
        resizeMode={ResizeMode.COVER}
        source={require("../../assets/screenvideo.mp4")}
        isLooping={false}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        shouldPlay={true}
      />
    </>
  );
};
