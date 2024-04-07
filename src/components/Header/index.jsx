import React, { useState } from 'react'
import Address from '../../assets/images/header/map_icn.png'
import Email from '../../assets/images/header/email_icn.png'
import Phone from '../../assets/images/header/phone_icn.png'
import Facebook from '../../assets/images/header/facebook_icn.png'
import Twitter from '../../assets/images/header/tw_icn.png'
import Whatsapp from '../../assets/images/header/whatsapp_icn.png'
import Linkedin from '../../assets/images/header/linkedin_icn.png'
import Youtube from '../../assets/images/header/youtube_icn.png'
import Logo from '../../assets/images/header/skillgro_lg.png'
import IconAndInfo from './components/IconAndInfo'

import { AutoComplete, Input, Col, Row, Button, Tooltip } from 'antd';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;
const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

export default function Header() {
  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };
  const onSelect = (value) => {
    console.log('onSelect', value);
  };
  return (
    <div className='header'>
      <div className="header-top bg-header-top-bg text-text-white">
        <div className="container flex place-content-between mx-auto">
          <div className="top-left flex flex-nowrap">
            <IconAndInfo image={Address} alt="Address" text="589 5th Ave, NY 10024, USA" />
            <IconAndInfo image={Email} alt="Email" text="info@skillgrodemo.com" />
          </div>
          <div className="top-right flex flex-nowrap">
            <IconAndInfo image={Phone} alt="Phone" text="Call us: +123 599 8989" />
            <div className='flex flex-nowrap items-center'>
              <span className='mr-1 text-[#8a899c]'>Follow Us On: </span>
              <ul className='list-none flex flex-nowrap items-center'>
                <li className='mr-3'><span><img src={Facebook} alt="Facebook" /></span></li>
                <li className='mr-3'><span><img src={Twitter} alt="Twitter" /></span></li>
                <li className='mr-3'><span><img src={Whatsapp} alt="Whatsapp" /></span></li>
                <li className='mr-3'><span><img src={Linkedin} alt="Linkedin" /></span></li>
                <li><span><img src={Youtube} alt="Youtube" /></span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Row>
        <Col span={6}>
          <img src={Logo} alt="logo" />
        </Col>
        <Col span={12}>
          <AutoComplete
            popupMatchSelectWidth={252}
            style={{
              width: '100%',
            }}
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
            size="large"
          >
            <Input.Search size="large" placeholder="Search..." enterButton />
          </AutoComplete>
        </Col>
        <Col span={6}>
          <Tooltip title="Wishes list">
            <Button shape="circle" icon={<HeartOutlined />} />
          </Tooltip>
          <Tooltip title="Shopping cart">
            <Button shape="circle" icon={<ShoppingCartOutlined />} />
          </Tooltip>
        </Col>
      </Row>
    </div>
  )
}
