import "./App.css";
import { useEffect } from "react";
import { socket } from "./socket";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProgress, downloadStatus } from "./redux/actions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    socket.on("message", (msg) => {
      if(msg.convertedSize && msg.totalSize){
        dispatch(setProgress(msg));
      }
    });
    socket.on("end", (msg) => {
      console.log("Video Download Complete");
      if (msg.type === "finished") {
        dispatch(
          setProgress({
            currentSize: 100,
            totalSize: 100,
          })
        );
        dispatch(downloadStatus(false));
      }
    });
  }, [socket]);
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
