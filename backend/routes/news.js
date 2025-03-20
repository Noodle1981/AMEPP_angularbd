const express = require('express');
const router = express.Router();
const News = require('../models/news');

// Crear una noticia
router.post('/', async (req, res) => {
    try {
        const news = new News(req.body);
        await news.save();
        res.status(201).json(news);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Obtener todas las noticias
router.get('/', async (req, res) => {
    try {
        const news = await News.find();
        res.json(news);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Eliminar una noticia
router.delete('/:id', async (req, res) => {
    try {
        await News.findByIdAndDelete(req.params.id);
        res.json({ message: 'Noticia eliminada' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
