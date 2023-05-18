import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import games from "../../store/games";
import FullGameCard from "../../components/FullGameCard/FullGameCard";
import {observer} from "mobx-react-lite";
import {LoadingOutlined} from "@ant-design/icons";
import {Col, Row, Table, Typography} from "antd";

const {Title, Text} = Typography

const specsColumns = [
    {
        title: 'Устройство',
        dataIndex: 'device',
        key: 'device'
    },
    {
        title: 'Рекомендуемая модель',
        dataIndex: 'model',
        key: 'model'
    }
]

const FullGame = () => {
    const {slug} = useParams()

    useEffect(() => {
        if (slug) games.fetchFullGame(slug)

        return () => {
            games.setFullGameLoading(true)
        }
    }, [slug])

    return (
        <div>
            <div className="container">
                {games.isFullGameLoading ? (<>
                    <div className='loading-container'>
                        <LoadingOutlined className='loading'/>
                    </div>
                </>) : (<>
                    <FullGameCard
                        title={games.fullGame.title}
                        image={games.fullGame.shortImage}
                        protections={games.fullGame.protections}
                        hackedGroups={games.fullGame.hackedGroups}
                        releaseDate={games.fullGame.releaseDate}
                        crackDate={games.fullGame.crackDate}
                        metaScore={games.fullGame.mataScore}
                        userScore={games.fullGame.userScore}
                        readableStatus={games.fullGame.readableStatus}
                        status={games.fullGame.status}
                    />

                    <Row gutter={60} style={{marginTop: 60}}>
                        {games.fullGame.description ? (<>
                            <Col xs={24} md={12} style={{marginBottom: 60}}>
                                <Title level={3}>Описание</Title>
                                <Text type='secondary'>{games.fullGame.description}</Text>
                            </Col>
                        </>) : undefined}

                        {games.fullGame.specsInfo ? (<>
                            <Col xs={24} md={12}>
                                <Title level={3}>Характеристики</Title>
                                <Table
                                    columns={specsColumns}
                                    dataSource={
                                        games.fullGame.specsInfo.map((item, index) => {
                                            return {
                                                key: index,
                                                device: item.device,
                                                model: item.model
                                            }
                                        })
                                    }
                                    pagination={false}
                                    bordered
                                />
                            </Col>
                        </>) : undefined}
                    </Row>
                </>)}
            </div>
        </div>
    );
};

export default observer(FullGame);