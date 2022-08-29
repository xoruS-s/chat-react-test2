import React from "react";
import './DialogItem.scss';
import classNames from "classnames";
import { IconReaded, Avatar } from "../index";
import { format, isToday } from "date-fns";



const getMessageTime = created__at => {
    const newDate = new Date(created__at);
    // console.log(newDate);
    if (isToday(newDate)) {
        return format(newDate, 'H:mm')
    } else {
        return format(newDate, 'dd.MM.yyyy')
    }
};

// const getAvatar = avatar => {
//     if (avatar) {
//         return (
//             <img
//                 src={avatar}
//                 // src="https://sun1-24.userapi.com/s/v1/ig2/vjY6t1JwE3MhzE1jOydixVsflwWHoZ8JkAzMRuqxwqgRZUupo_lVVV6UMZF2K852Qrczp6bEv5AClIVqyDJYc7zL.jpg?size=50x50&quality=96&crop=74,86,613,613&ava=1"
//                 alt="..."
//             />
//         );
//     } else {
//       //Генерация аватара в зависимости от символа
//   }
// };

const DialogItem = ({ _id, user, unreaded, isMe, created_at, text, currentDialogId, onSelect }) => (
    <div className={classNames('dialogs__item', {'dialogs__item--online': user.isOnline, 'dialogs__item--selected': currentDialogId === _id})} onClick={onSelect.bind(this, _id)}>
        <div className="dialogs__item-container">
            <div className="dialogs__item-avatar">
                <Avatar user={user}/>
                {/*{getAvatar(user.avatar)}*/}
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <strong>{user.fullname}</strong>
                    <span>
                    {getMessageTime(created_at)}
                </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>{text}</p>

                    {unreaded > 0 &&
                    <div className="dialogs__item-info-bottom-count">{unreaded > 99 ? '+9' : unreaded}</div>
                    }
                    {unreaded === 0 && (isMe &&
                        <IconReaded isMe={true} isReaded={true} />
                    )
                    }
                </div>
            </div>
        </div>
    </div>
);

export default DialogItem;