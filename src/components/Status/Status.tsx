import React, {FC} from 'react';
import {propsType} from "./type";
import {Col, Row, Typography} from "antd";
import {CheckCircleFilled, CloseCircleFilled, ClockCircleFilled} from '@ant-design/icons'
import s from './Status.module.scss'

const {Text} = Typography

const Status: FC<propsType> = ({status, text}) => {
    const icons = {
        cracked: <CheckCircleFilled className={s.cracked}/>,
        uncracked: <CloseCircleFilled className={s.uncracked}/>,
        unreleased: <ClockCircleFilled className={s.unreleased}/>
    }

    return (
        <Row wrap={false} gutter={7} className={s.status}>
            <Col className={s.icon}>
                {icons[status]}
            </Col>
            <Col className={s.text}>
                <Text className={s[status]}>{text}</Text>
            </Col>
        </Row>
    );
};

export default Status;