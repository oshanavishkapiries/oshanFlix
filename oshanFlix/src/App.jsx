import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import router from "./data/routers";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { screen_change } from "./redux/actions/controllerActions";
import detectScreenSize from "./utils/detectScreenSize";
import { Footer } from "./components";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(screen_change(detectScreenSize()));
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {router.map((item, index) => (
            <Route key={index} path={item.path} element={<item.component />} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
