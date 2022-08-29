import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ChatInput.scss";
import { NumberOutlined, SendOutlined, SmileOutlined } from "@ant-design/icons";
import { UploadField } from "@navjobs/upload";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";


const ChatInput = props => {
    const [emojiPickerVisible, setShowEmojiPicker] = useState("");
    const toggleEmojiPicker = () => {
      setShowEmojiPicker(!emojiPickerVisible);
    };

    return (
        <div className={"chat-input"}>
            <div className="chat-input-emoji">
                {emojiPickerVisible && (
                    <div className="chat-input__emoji-picker">
                        <Picker data={data} onEmojiSelect={console.log} theme={"light"} set={"native"}/>
                    </div>
                )}

                <SmileOutlined className={"smiles"} onClick={toggleEmojiPicker}/>
            </div>

            <div className="chat-input-inputmessage"><input type="text" placeholder={"Сообщение"}/></div>

            <UploadField
                onFiles={files => console.log(files)}
                containerProps={{
                    className: 'photos'
                }}
                uploadProps={{
                    accept: '.jpg, .jpeg, .png, .gif, .bmp',
                    multiple: 'multiple'
                }}>

                <div className="chat-input-file"><NumberOutlined/></div>
            </UploadField>
            <div className="chat-input-sendmessage"><SendOutlined className={"chat-input-sendmessage-icon"}/></div>
        </div>
    )
};

export default ChatInput;