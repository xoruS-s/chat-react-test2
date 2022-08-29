import React from "react";
import { DialogItem } from "../index";
import "./Dialogs.scss";
import orderBy from "lodash/orderBy";

const Dialogs = ({ items, userId, currentDialogId, onSelectDialog }) => (
  <div className="dialogs">
    {orderBy(items, ['created_at'], ["desc"]).map(item => (
            <DialogItem
                onSelect={onSelectDialog}
                key={item._id}
                isMe={item.user._id === userId}
                currentDialogId={currentDialogId}
                {...item}
                // ...user={item.user} message={item} unreaded={0}
            />
        ))}
  </div>
);

export default Dialogs;