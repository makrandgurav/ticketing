import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
import { successResponse } from "../utility/response";
import { UserRepository } from "../repository/userRepository";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export class UserService {
  repository: UserRepository;
  constructor(repository: UserRepository) {
    this.repository = new UserRepository();
  }

  createUser = async (event: APIGatewayProxyEventV2) => {
    const bodyParams = event.body;
    console.log(bodyParams, ":---bodyParams--");
    await this.repository.createUserOperation();
    return successResponse({ message: "User created", body: bodyParams });
  };

  login = async (event: APIGatewayProxyEventV2) => {
    return successResponse({ message: "User created" });
  };

  logout = async (event: APIGatewayProxyEventV2) => {
    return successResponse({ message: "User logged out" });
  };

  verifyUser = async (event: APIGatewayProxyEventV2) => {
    return successResponse({ message: "User verified" });
  };
}
