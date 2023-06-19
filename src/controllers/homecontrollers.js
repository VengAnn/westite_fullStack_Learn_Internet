
import db from "../models/index";

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        // console.log("-------------------");
        // console.log(data);
        // console.log("------------------");
        // return res.send("Hello world from controllers")
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log("eror with: " + e);
    }


}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}
//  object: {
//         key:'',
//         value: ''
//  }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
}