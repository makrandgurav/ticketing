const formatResponse = (statusCode: number, message: string, data: any) => {
  if (data) {
    return {
      statusCode,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        message,
        data,
      }),
    };
  } else {
    return {
      statusCode,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        message,
      }),
    };
  }
};

export const successResponse = (data: object) => {
  return formatResponse(200, "success", data)
}

export const errorResponse = (errCode: number = 1000, error: any) => {
  return formatResponse(errCode, "error occured", error)
}