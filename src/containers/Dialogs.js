//Добавляет логику в компоненту <Dialogs />
//Поиск

import React, { useState, useEffect } from "react";
import { Dialogs as BaseDialogs} from "../components";
import { dialogsActions } from "../redux/actions";
import { connect } from "react-redux";

const Dialogs = ({ fetchDialogs, currentDialogId, setCurrentDialogId, items, userId }) => {
    const [inputValue, setValue] = useState("");
    const [filtred, setFiltredItems] = useState(Array.from(items));


    const onChangeInput = value => {
        setFiltredItems(
          items.filter(
              dialog => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
          )
        );
        setValue(value);
    };

    useEffect(() => {
        // console.log(Array.from(items));
       if (!items.length) {
           fetchDialogs();
       } else {
           setFiltredItems(items);
       }
    }, [items]);

    return (
        <BaseDialogs
            userId={userId}
            items={filtred}
            onSearch={onChangeInput}
            inputValue={inputValue}
            onSelectDialog={setCurrentDialogId}
            currentDialogId={currentDialogId}
        />
    );
};

// export default Dialogs;
export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);