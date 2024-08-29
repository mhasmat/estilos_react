import '../App.css'
// import styles from './home.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <>
    <div className='container'>
        <h1>Bienvenido a la página principal</h1>        
          <Card sx={{ maxWidth: 280, borderRadius: 3 }}>
          <CardMedia            
              sx={{ height: 200 }}
              title="gatito"
              image="/gatito.jpg"
              />
          <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Tarjeta Gatito Home
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Los gatitos como este, son mascotas muy tiernas y encantadoras 🥰😸
              </Typography>
          </CardContent>
          <CardActions>
              <Button variant='contained' size="medium">Agregar</Button>
              <Button variant='text' size="medium" color='error'>Eliminar</Button>
          </CardActions>
          </Card>     
    </div>
    </>
  )
}

export default Home