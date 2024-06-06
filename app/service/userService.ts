import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
import { successResponse } from "../utility/response";

export class UserService {
 
  createUser = async(event: APIGatewayProxyEventV2) => {
    return successResponse({message: 'User created'})
  }

  login = async(event: APIGatewayProxyEventV2) => {    
    return successResponse({message: 'User created'})
  }
  
  logout = async(event: APIGatewayProxyEventV2) => {
    return successResponse({message: 'User logged out'})
  }

  verifyUser = async(event: APIGatewayProxyEventV2) => {
    return successResponse({message: 'User verified'})
  }

}