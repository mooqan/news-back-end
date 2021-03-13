const { json } = require('body-parser');
const { DATABASE_NEWS } = require('../database/db');
exports.getNews = async (request, response) => {
    try {
        const lang = request.headers.language;
        const filteredNews = DATABASE_NEWS.filter((n) => {
            return n.lang === lang;
        });
        response.status(200).json(filteredNews);
    } catch (e) {
        response.status(500).json(e.message);
    }
}

exports.getOneNews = async (req, res) => {
    try {
        console.log('Получен  id', req.params);
        const news = DATABASE_NEWS.find(news => news.id === req.params.id); 
        if (!news) {
            return res.status(404).json('ERROR 404 NOT FOUND');
        }
        return res.status(200).json(news);
        
    } catch (e) {
        console.error(e.message);
        res.status(500).json('Server is Shut Down');
    }
}

exports.createNews = async (req,res) => {
    try {
        const news = req.body;
        news.date = new Date();
        DATABASE_NEWS.push(news);

        res.status(201).json({
            message: 'News created',
            allNews: DATABASE_NEWS,
        });
    } catch (e) {

    }
};