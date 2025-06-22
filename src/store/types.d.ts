type Theme = "dark" | "light" | "system";

type Platform = "party" | "match" | "stream";

type LoginData = {
  email: string;
  password: string;
};

type User = {
  email: string;
  password: string;
  username: string;
  fullName: string;
  role: string;
};

type StreamEvent = {
  id: string;
  name: string;
  date: string;
  streamers: Streamer[];
}

type Game = {
  id: string;
  name: string;
  box_art_url: string;
  igdb_id: string;
  category_id: string;
};

type Streamer = {
  id: string;
  username: string;
  avatar: string;
}

type Filters = {
  game: Game | null;
  platform: Platform;
};

type StreamData = {
  game_id: string;
  platform: string;
  events: StreamEvent[];
};


