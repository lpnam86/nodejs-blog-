class NewsController {

    //[GET] /news
    index(req, res) {
        res.render('news')
    }

    show(req,res) {
        console.log('NEW DETAILS!!!')
    }

}

module.exports = new NewsController