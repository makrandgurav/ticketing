export const requestLogger = (req: any, res: any, next: any) => {
    console.log(`API : ${req.method} - ${req.baseUrl} - `, req.body, req.params)
    next();
}