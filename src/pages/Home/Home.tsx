import React, {useEffect} from 'react';
import GameCard from "../../components/GameCard/GameCard";
import {Col, Row, Typography} from "antd";
import games from "../../store/games";
import {observer} from "mobx-react-lite";
import {LoadingOutlined} from '@ant-design/icons';
import s from './Home.module.scss'

const {Title} = Typography

const Home = () => {
    useEffect(() => {
        games.fetchHotGames()

        return () => {
            games.setHotGamesLoading(true)
        }
    }, [])

    return (
        <div className={s.home}>
            <div className="container">
                <div className={s.chapter}>
                    <Title level={3}>Популярные игры</Title>
                    <Row wrap gutter={30}>
                        {games.isHotGamesLoading ? (<>
                            <div className='loading-container'>
                                <LoadingOutlined className='loading'/>
                            </div>
                        </>) : (<>
                            {games.hotGames.map(item => (
                                <Col xs={24} sm={12} lg={8} xl={6} key={item.id} className={s.card}>
                                    <GameCard
                                        title={item.title}
                                        status={item.status}
                                        image={item.shortImage}
                                        readableStatus={item.readableStatus}
                                        slug={item.slug}
                                    />
                                </Col>
                            ))}
                        </>)}
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default observer(Home);