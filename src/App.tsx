import { HomePage, BandPage, LoginPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useUserDataStore } from "./stores";

const App = () => {
  const { isLogin } = useUserDataStore();
  return (
    <Routes>
      {isLogin && (
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="bands/:id" element={<BandPage />} />
        </>
      )}
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
