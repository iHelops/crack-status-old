import React, {FC} from 'react';
import s from './SearchItem.module.scss'
import {Col, Row, Typography} from "antd";
import {propsType} from "./type";
import Status from "../Status/Status";

const {Text} = Typography

const SearchItem: FC<propsType> = ({title, status,readableStatus,image}) => {
    return (
        <Row className={s.item} wrap={false}>
            <Col className={s.image} xs={4}>
                <img src={image} alt=''/>
            </Col>
            <Col className={s.description} xs={20}>
                <Text strong className={s.title}>{title}</Text>
                <Status status={status} text={readableStatus}/>
            </Col>
        </Row>
    );
};

export default SearchItem;