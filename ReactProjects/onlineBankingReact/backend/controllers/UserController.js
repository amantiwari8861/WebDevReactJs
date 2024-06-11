const User=require("../models/UserModel")

exports.validateUser = async (req, res) => {
    try {
        const data=JSON.parse(req.body.logindetails);
        console.log(data);
        const user = await User.find({"email":data.email,"password":data.password});
        console.log(user);
        if (user.length<1) 
            return res.status(404).send("User not found");
        await res.json(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
