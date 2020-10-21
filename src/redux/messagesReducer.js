const ADD_MESSAGE = 'ADD_MESSAGE';



let initianalState = {

    dialogsData: [{ name: 'Dima', id: 1 }, { name: 'Yana', id: 2 }, { name: 'Vlad', id: 3 }],
    messageData: [{ message: 'Privet', id: 1 }, { message: 'Poka', id: 2 }, { message: 'Poka', id: 3 }],

}

const messagesReducer = (state = initianalState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newState = { ...state, messageData: [...state.messageData] };
            let newMessage = {
                message: action.sendMessage.sendMessage,
                id: 4
            };
            newState.messageData.push(newMessage);

            return newState;
        }
        default: return state;

    }
}

export const addMessageCreator = (sendMessage) => ({ type: ADD_MESSAGE, sendMessage })

export default messagesReducer;