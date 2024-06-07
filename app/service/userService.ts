import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
import { errorResponse, successResponse } from "../utility/response";
import { UserRepository } from "../repository/userRepository";
import { autoInjectable } from "tsyringe";
import { AppValidationError } from "../utility/errors";
import { SignUpInput } from "../models/dto/signUpInput";
import { plainToClass } from "class-transformer";

@autoInjectable()
export class UserService {
  repository: UserRepository;
  constructor(repository: UserRepository) {
    this.repository = new UserRepository();
  }

  createUser = async (event: APIGatewayProxyEventV2) => {
    const bodyParams = event.body;
    console.log(bodyParams, ":---bodyParams--");
    const input = plainToClass(SignUpInput, bodyParams);

    const error = await AppValidationError(input);
    if (error) return errorResponse(404, error);
    // await this.repository.createUserOperation();
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
