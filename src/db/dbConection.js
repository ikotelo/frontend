import { connect } from 'mongoose';

connect('mongodb://localhost:27017/news_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexión a MongoDB establecida.');
}).catch(err => {
    console.error('Error al conectar a MongoDB:', err);
});