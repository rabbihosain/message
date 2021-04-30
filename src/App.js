import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
            height = "100vh"
            projectID = "f2ae8f4f-770c-42f1-b024-de9ffc663178"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}

        />
    );
}

export default App;