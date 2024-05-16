export const userLogin = async(req: any, res: any) => {
    console.log(req.body, ':---controller--');
    
    try {
        console.log('User login');
        res.status(200).send({message: "Hello"})
    } catch (error) {
     console.log(error)   
    }
}

export const userSignUp = async(req: any, res: any) => {
    try {
        console.log('User Signup');
        res.status(200).send({message: "Hello"})
    } catch (error) {
     console.log(error)   
    }
}