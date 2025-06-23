import mockData from "@/data/game_platform_events_mock.json";

// mock api streams service
export const loadLiveStreams = async (): Promise<StreamData[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); 
  return mockData;
};
