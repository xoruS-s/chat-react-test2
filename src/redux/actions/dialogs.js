import { dialogsApi } from "../../utils/api";

const actions = {
    // sync
    setDialogs: items => ({
        type: "DIALOGS:SET_ITEMS",
        payload: items

    }),
    setCurrentDialogId: id => ({
        type: "DIALOGS:SET_CURRENT_DIALOG_ID",
        payload: id
    }),

    // async
    fetchDialogs: () => dispatch => {
        dialogsApi.getAll().then(({ data }) => {
            dispatch(actions.setDialogs(data));
        });
    }
};

export default actions;