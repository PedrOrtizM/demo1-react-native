export const getAgents = async () => {
  const agents = await fetch("https://valorant-api.com/v1/agents");
  const { data } = await agents.json();
  return data;
};
