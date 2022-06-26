import React, {FC} from 'react';
import {propsType} from "./type";
import {Card, Col, Row, Statistic, Typography} from "antd";
import s from './FullGameCard.module.scss'
import Status from "../Status/Status";

const {Title} = Typography

const FullGameCard: FC<propsType> = ({title, image, status, readableStatus, metaScore, userScore, crackDate, releaseDate, protections, hackedGroups}) => {
    return (
        <Card className={s.fullgame}>
            <Row>
                <Col className={s.image} xs={24} sm={3}>
                    <img src={image} alt=''/>
                </Col>
                <Col xs={24} sm={19} className={s.content}>
                    <Row gutter={15} align='middle' className={s.title}>
                        <Col>
                            <Title level={4}>{title}</Title>
                        </Col>
                        <Col>
                            <Status status={status} text={readableStatus}/>
                        </Col>
                    </Row>

                    <Row gutter={30} className={s.description}>
                        <Col xs={24} sm={12} lg={6}>
                            <Statistic
                                title='Дата релиза'
                                value={releaseDate}
                            />
                        </Col>
                        <Col xs={24} sm={12} lg={6}>
                            <Statistic
                                title='Защита'
                                value={protections.join(', ')}
                                valueStyle={{textTransform: 'capitalize'}}
                            />
                        </Col>

                        {status === 'cracked' ? (<>
                            <Col xs={24} sm={12} lg={6}>
                                <Statistic
                                    title='Кем взломана'
                                    value={hackedGroups.join(', ')}
                                    valueStyle={{textTransform: 'capitalize'}}
                                />
                            </Col>
                            <Col xs={24} sm={12} lg={6}>
                                <Statistic
                                    title='Дата взлома'
                                    value={crackDate || ''}
                                />
                            </Col>
                        </>) : undefined}

                        {metaScore !== null ? (<>
                            <Col xs={24} sm={12} lg={6}>
                                <Statistic
                                    title='Metascore'
                                    value={metaScore}
                                />
                            </Col>
                        </>) : undefined}

                        {userScore !== null ? (<>
                            <Col xs={24} sm={12} lg={6}>
                                <Statistic
                                    title='Userscore'
                                    value={userScore}
                                />
                            </Col>
                        </>) : undefined}
                    </Row>
                </Col>
            </Row>
        </Card>
    );
};

export default FullGameCard;