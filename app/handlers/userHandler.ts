// https://www.youtube.com/watch?v=tFzf9clV2BI&list=PLbmEvpJ6NLH_udpLlGlFsO6eC0bg_egCD&index=7
// tech geek guru
import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
const greeter = async (event: APIGatewayProxyEventV2) => {
  console.log("-----helllo world invoked-----");
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: "Go Serverless v3.0! Your function executed successfully!",
      input: event,
      data: {},
    }),
  };
};

module.exports = {
  greeter,
};
