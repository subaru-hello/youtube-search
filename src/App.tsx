import YoutubeVideoSearch from "./YoutubeVideoSearch";
import Providers from "./Providers";
import type { FC } from "react";
const App: FC = () => {
  return (
    <Providers>
      <YoutubeVideoSearch />
    </Providers>
  );
};

export default App;
