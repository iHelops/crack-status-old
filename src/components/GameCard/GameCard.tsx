import React, {FC} from 'react';
import {Card, Typography} from "antd";
import {propsType} from "./type";
import s from './GameCard.module.scss'
import Status from "../Status/Status";
import {Link} from "react-router-dom";

const {Title} = Typography

const GameCard: FC<propsType> = ({title, status, readableStatus, image, slug}) => {
    return (
        <Link to={'/game/' + slug}>
            <Card
                cover={
                    <img src={image} alt='' className={s[status]}/>
                }
                className={s.card}
            >
                <Title level={5}>{title}</Title>
                <Status status={status} text={readableStatus}/>
            </Card>
        </Link>
    );
};

export default GameCard;