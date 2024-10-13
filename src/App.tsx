import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import AuthRoutes from "./routes/AuthRoutes";

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#6D0A0A',
          colorBgContainer: 'none',
        },
      }}
    >
      <BrowserRouter>
        <AuthRoutes />
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
