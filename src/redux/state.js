import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 2, message: "How are you?", likesCount: 5 },
      { id: 3, message: "It is my first post!", likesCount: 11 },
    ],
    newPostText: "Hello!",
  },
  dialogsPage: {
    messages: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Yo!" },
    ],
    dialogs: [
      { id: 1, name: "Ilya" },
      { id: 2, name: "Margarita" },
      { id: 3, name: "Emily" },
    ],
  },
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
