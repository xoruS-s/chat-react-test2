import React from 'react';
import './Home.scss';
// import Message from "../../components/Message";
import { Status, ChatInput } from "../../components";
import { Dialogs, Messages } from "../../containers";
// import dialogsJson from "../../dialogs";
import { TeamOutlined, FormOutlined, SearchOutlined } from "@ant-design/icons";

const Home = () => {
    return (
        <section className={"home"}>
            <div className="chat">
                <div className="chat__sidebar">
                    <div className="chat__sidebar-header">
                        <div className="chat__sidebar-header-newdialog">
                            <TeamOutlined className={"chat__sidebar-header-newdialog-teamoutlined"}/>
                            <span className={"chat__sidebar-header-newdialog-text"}>Список диалогов</span>
                            <FormOutlined className={"chat__sidebar-header-newdialog-formoutlined"}/>
                        </div>
                    </div>
                    <div className="chat__sidebar-search">
                        <input type={"text"} placeholder={"Поиск по контактам"}/>
                        <SearchOutlined className={"chat__sidebar-search-searchoutlined"}/>
                    </div>
                    <div className="chat__sidebar-body">
                        <Dialogs
                            userId={0}
                            // items={dialogsJson}
                        />
                    </div>
                </div>
                <div className="chat__dialog">
                    <div className="chat__dialog-header">
                        <div className="chat__dialog-header-user">
                            <span className="chat__dialog-header-fullname">Леонид Леонидович</span>
                            <span className="chat__dialog-header-status">
                                <Status/> {/*убрать: офлайн, поставить: онлайн*/}
                            </span>
                        </div>
                    </div>
                    {/*className="chat__dialog-body"*/}
                    <Messages/>
                    <div className="chat__dialog-footer">
                        <ChatInput/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;