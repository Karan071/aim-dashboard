import { Routes, Route } from "react-router-dom";
import Login from "@/pages/Login";
import Layout from "./layout/Layout";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "@/components/theme-provider";
import { Provider } from "react-redux";
import store from "@/store/index";
import LandingPage from "./pages/Landing";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<Login />} />
          <Route
            path="/desk/*"
            element={
              <Layout>
                <AppRoutes />
              </Layout>
            }
          />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}
