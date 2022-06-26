import React, {useState} from 'react';
import s from './Header.module.scss'
import {AutoComplete, Col, Row, Input} from "antd";
import logo from '../../assets/logo.svg'
import {observer} from "mobx-react-lite";
import {Link, useNavigate} from "react-router-dom";
import {SearchOutlined} from '@ant-design/icons'
import search from "../../store/search";
import SearchItem from "../SearchItem/SearchItem";

const Header = () => {
    const navigate = useNavigate()
    const [searchTimer, setSearchTimer] = useState<any>(null)

    const onSearch = (value: string) => {
        if (searchTimer) clearTimeout(searchTimer)

        setSearchTimer(
            setTimeout(() => {
                search.fetchSearch(value)
            }, 500)
        )
    }

    const onSelect = (value: string) => {
        search.fetchSearch(value)
        navigate('/game/' + search.getSlug(value))
    }

    const searchResult = () => {
        return search.search.map(item => {
            return {
                value: item.title,
                label: <SearchItem
                    title={item.title}
                    status={item.status}
                    readableStatus={item.readableStatus}
                    image={item.fullImage}
                />
            }
        })
    }

    return (
        <div className={s.header}>
            <div className="container">
                <Row justify='space-between' align='middle'>
                    <Col>
                        <Link to='/'>
                            <img src={logo} alt='CRACK STATUS'/>
                        </Link>
                    </Col>
                    <Col xs={12} sm={6}>
                        <AutoComplete
                            style={{width: '100%'}}
                            options={searchResult()}
                            onSearch={onSearch}
                            onSelect={onSelect}
                        >
                            <Input
                                size="large"
                                placeholder="Найти игру"
                                bordered={false}
                                prefix={<SearchOutlined style={{paddingRight: 10}}/>}
                            />
                        </AutoComplete>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default observer(Header);