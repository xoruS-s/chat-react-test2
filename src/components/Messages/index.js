import React from "react";
import PropTypes from "prop-types";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import classNames from "classnames";

import { Message } from "../index";
import "./Messages.scss";
const antIcon = ( <LoadingOutlined style={{ fontSize: 35, color: '#007fff', fontWeight: 700 }} spin />);

const Messages = ({ blockRef, isLoading, items }) => {
    // return (
    //     <div>
    //         {items.map(item => (
    //             <Message {...item} />
    //         ))}
    //     </div>
    // )
    return (
        <div ref={blockRef} className={classNames("messages", {"messages--loading": isLoading})}>
            {/*<Spin indicator={antIcon} tip={"Загрузка сообщений"} />*/}
            {
                (isLoading && items) ?
                    (<Spin className={"messages--loading-spin"} indicator={antIcon} tip={"Загрузка сообщений"}/>)
                    :
                    (items.map(item => <Message key={item._id} {...item} />))
            }
        </div>
    )
};


Messages.propTypes = {
  items: PropTypes.array
};

export default Messages;