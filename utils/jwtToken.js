// create and send token and save in the cookie

const sendToken = (user, statusCode, res) => {

    //create jwt token
    const token = user.getJwtToken();

    //option for cookie
    const options = {
        expires : new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 24 * 60 * 6000
        ),
        httpOnly : true,
    }

    res.status(statusCode).cookie("token", token , options).json({
        success : true,
        token, 
        
        sameSite: 'none',
    // secure: false,
        user
    })
}

module.exports = sendToken;