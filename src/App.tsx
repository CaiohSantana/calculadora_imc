import { Card, Box, Typography } from '@mui/material';


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

        {/*titulos*/}
        <Box
          marginY={'16px'}
        >
          <Typography variant='h5' fontWeight={'700'}>
            Calculadora IMC
          </Typography>
        </Box>

        {/*Entradas*/}
        <Box>
          <Typography variant='h5'>
            Entrada
          </Typography>
        </Box>

        {/*Resultado*/}
        <Box>
          <Typography variant='h5'>
            Resultado
          </Typography>
        </Box>

      </Card>
    </Box>
  )
}