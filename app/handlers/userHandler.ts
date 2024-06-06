// https://www.youtube.com/watch?v=tFzf9clV2BI&list=PLbmEvpJ6NLH_udpLlGlFsO6eC0bg_egCD&index=7
// tech geek guru
import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
import { UserService } from "../service/userService";

const service = new UserService();

const signUp = async (event: APIGatewayProxyEventV2) => {
  return await service.createUser(event);
};

const login = async (event: APIGatewayProxyEventV2) => {
  return await service.login(event);
};

const verify = async (event: APIGatewayProxyEventV2) => {
  return await service.verifyUser(event);
};

const logout = async (event: APIGatewayProxyEventV2) => {
  return await service.logout(event);
};

module.exports = {
  signUp,
  login,
  logout,
  verify,
};
