module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity(`r!help | Music with Luci `, {
    type: "LISTENING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
