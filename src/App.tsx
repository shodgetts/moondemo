import {
  ChannelFilters,
  ChannelOptions,
  ChannelSort,
  User,
} from "stream-chat";
import {
  Channel,
  ChannelHeader,
  ChannelList,
  Chat,
  LoadingIndicator,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import { useClient } from "./hooks/useClient";

import "stream-chat-react/dist/css/v2/index.css";
import "./layout.scss";

const userId = "CSAgent";

const user: User = {
  id: "CSAgent",
  // name: userName,
  image: `https://media.pocketgamer.biz/2019/10/101275/coin-master-r225x225.png`,
};

const apiKey = "n65swem2ejrc";
const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQ1NBZ2VudCJ9.nsC5wjmi8LavxkxLUh86DJEzijjEwoaAhJHjvAw0PaI";

const sort: ChannelSort = { unread_count: 1 };
const filters: ChannelFilters = {
  type: "messaging",
  members: { $in: [userId] },
};
const options: ChannelOptions = {
  limit: 10,
};

const App = () => {
  const chatClient = useClient({
    apiKey,
    user,
    tokenOrProvider: userToken,
  });

  if (!chatClient) {
    return <LoadingIndicator />;
  }

  return (
    <Chat
      client={chatClient}
      theme="str-chat__theme-light"
    >
      <ChannelList
        filters={filters}
        sort={sort}
        options={options}
      />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default App;
