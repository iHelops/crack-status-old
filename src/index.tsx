import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import 'antd/dist/antd.dark.min.css'
import './main.scss';
import {ConfigProvider, theme} from 'antd'
import ru_Ru from 'antd/lib/locale/ru_RU'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <ConfigProvider
        locale={ru_Ru}
        theme={{
            algorithm: theme.darkAlgorithm,
        }}
    >
        <App/>
    </ConfigProvider>
);
