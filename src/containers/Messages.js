import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { messagesActions } from "../redux/actions";
import { Messages as BaseMessages} from "../components";

// class Dialogs extends React.Component {
//
//     componentDidUpdate (prevProps) {
//         const { fetchMessages, currentDialogId } = this.props;
//         // console.log(currentDialogId);
//         if (prevProps.currentDialogId !== this.props.currentDialogId) {
//             fetchMessages(currentDialogId);
//         }
//     }
//
//     render() {
//         const { items } = this.props;
//         return (
//             <BaseMessages items={items} />
//         )
//     }
// }

const Dialogs = ({ currentDialogId, fetchMessages, items, isLoading }) => {

    const messagesRef = useRef(null);
    useEffect(() => {
        if (currentDialogId) {
            fetchMessages(currentDialogId);
        }
    }, [currentDialogId]);

    useEffect(() => {
        messagesRef.current.scrollTo(0, 99999);
        // if (messagesRef.current) {
        //
        // }
    }, [items]);

    return (
        <BaseMessages
            blockRef={messagesRef}
            items={items}
            isLoading={isLoading}
        />
    )
};


// export default Messages;
export default connect(
    ({ dialogs, messages }) => ({ currentDialogId: dialogs.currentDialogId, items: messages.items, isLoading: messages.isLoading }),
    messagesActions)(Dialogs);