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
          colorBgBase: '#F3F3F3',
          borderRadius: 50
        },
        components: {
          Layout: {
            siderBg: '#6D0A0A',
            headerBg: 'white',
            bodyBg: 'white'
          },
          Menu: {
            darkItemBg: '#6D0A0A',
            darkItemSelectedBg: 'rgba(0, 0, 0, 0.6)',
            darkSubMenuItemBg: '#6D0A0A',
            darkPopupBg: '#6D0A0A'
          }
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
