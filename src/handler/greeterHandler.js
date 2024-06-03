// https://www.youtube.com/watch?v=tFzf9clV2BI&list=PLbmEvpJ6NLH_udpLlGlFsO6eC0bg_egCD&index=7
// tech geek guru
const greeter = async (event) => {
  console.log('-----helllo world invoked-----');
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports = {
  greeter
}
