import React from 'react';
import {useTranslation} from "react-i18next";

const HomePage: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div>
            <h1>Home Page</h1>
            <p>{t('homePageWelcome')}</p>
        </div>
    );
};

export default HomePage;
