import { FC, useState } from "react";
import { Container, IconButton, Flex, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
const YOUTUBE_SERACH_API_URI = "https://www.googleapis.com/youtube/v3/search?";
const API_KEY = `${process.env.REACT_APP_YOUTUBE_API_KEY}`;

const YoutubeVideoSearch: FC = () => {
  const [videoId, setVideoId] = useState("");
  // 入力された文字に連動してAPIを叩く処理が走る
  const fetchSearchVideos = (e: string) => {
    const params = {
      key: API_KEY,
      q: e, // 検索キーワード
      type: "video", // video,channel,playlistから選択できる
      maxResults: "10", // 結果の最大数
      order: "viewCount", // 結果の並び順を再生回数の多い順に
    };
    const queryParams = new URLSearchParams(params);

    fetch(YOUTUBE_SERACH_API_URI + queryParams)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("API success:", result);

          if (result.items && result.items.length !== 0) {
            const firstItem = result.items[0];
            setVideoId(firstItem.id.videoId);
          }
        },
        (error) => {
          console.error(error);
        }
      );
  };

  return (
    <Container>
      <Flex>
        <IconButton aria-label="Search database" icon={<SearchIcon />} />
        <Input
          placeholder="Search..."
          onChange={(event) => fetchSearchVideos(event.target.value)}
        />
      </Flex>
      <iframe
        title="This is a unique title"
        id="player"
        width="640"
        height="360"
        src={"https://www.youtube.com/embed/" + videoId}
        frameBorder="0"
        allowFullScreen
      />
    </Container>
  );
};

export default YoutubeVideoSearch;
