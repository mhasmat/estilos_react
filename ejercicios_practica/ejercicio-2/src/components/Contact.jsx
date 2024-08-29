import styles from './contact.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Contact = () => {
  return (
    <>
    <div className={styles.container}>
        <h1 className={styles.h1}>Contacto</h1>
        <Card sx={{ maxWidth: 550, borderRadius: 3 }}>
        <CardMedia            
            sx={{ height: 200 }}
            title="gatito"
            image="/gatito.jpg"
            />
        <CardContent>
            <Typography gutterBottom variant='h3' component='div'>
            Tarjeta Gatito Contacto
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

export default Contact