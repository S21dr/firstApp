let rerenderEntireTree = () => {
    console.log('state change');
}

let state = {
    profilePage: {
        postData: [{ message: 'privet kak dela?' }, { message: 'Super' }, { message: 'Kruto' }],
        newMyPost: ''
    },
    messagesPage: {
        dialogsData: [{ name: 'Dima', id: 1 }, { name: 'Yana', id: 2 }, { name: 'Vlad', id: 3 }],
        messageData: [{ message: 'Privet', id: 1 }, { message: 'Poka', id: 2 }, { message: 'Poka', id: 3 }],
        changeNewMessageInput: '',
    }

}

export function addNewPost() {
    let newPost = {
        message: state.profilePage.newMyPost
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newMyPost = '';   
    rerenderEntireTree(state);
};

export let updateNewPostInput = (newText) => {


    state.profilePage.newMyPost = newText;

    rerenderEntireTree(state);

};

export let addNewMessage = () => {
    let newMessage = {
        message: state.messagesPage.changeNewMessageInput,
        id: 4
    };
    state.messagesPage.messageData.push(newMessage);
    state.messagesPage.changeNewMessageInput = '';
    rerenderEntireTree(state);

};

export let changeNewMessage = (text) => {
    state.messagesPage.changeNewMessageInput = text;
    rerenderEntireTree(state);
};


export const observ = (observer) => {
    rerenderEntireTree = observer;
};
export default state;