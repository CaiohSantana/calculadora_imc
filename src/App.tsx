import { Card, Box, Typography, TextField, Button } from '@mui/material';
import calculateicon from './assets/calculate.svg'

export default function App() {

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'flex-start'}
      width={'100vw'}
      height={'100vh'}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
          marginTop: '144px',
          marginX: '16px'
        }}
      >

        {/* Titulo */}
        <Box
          marginY={'16px'}
          display={'flex'}
          alignItems={'center'}
        >
          <a>
            <img src={calculateicon} className="calculateicon" alt="calculateicon" style={{ width: "50px", height: "50px" }}/>
          </a>

          <Typography variant='h5' fontWeight={'700'} fontSize={'32px'}>
            Calculadora IMC
          </Typography>
        </Box>

        {/* Entradas */}
        <Box>
            
          <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1}, }}
            noValidate
            autoComplete="off"
          >
            <Box 
            sx={{ 
              width: 350, 
              maxWidth: '100%', 
              display: 'flex', 
              alignContent: 'center', 
              flexDirection: 'column' }}>

              <TextField id="outlined-basic" label="Peso (kg)" variant="outlined" /> <br></br>
              <TextField id="outlined-basic" label="Altura (m)" variant="outlined" /><br></br>
              <Button variant="contained" sx={{
                height:'55px'
              }}>Calcular IMC</Button>
            </Box>
      
          </Box>
        </Box>

        {/* Resultado */}
        <Box
        display={'grid'}
        alignContent={'center'}
        width={'90vw'}
       margin={'30px'}
        
        >
        <Typography variant='h4' fontWeight={'300'} fontSize={'25px'}>
            Resultado:
          </Typography>
          <Typography variant='h3' fontSize={'16px'}>
            Seu IMC é: xx.xx <br></br>
            Classificação: xxxx
          </Typography>
          
        </Box>
      </Card>
    </Box>
  )
}