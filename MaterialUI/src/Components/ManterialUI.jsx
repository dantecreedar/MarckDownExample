import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel'
import { pink } from '@mui/material/colors';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Material.css'

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

function valuetext(value) {
    return `${value}°C`;
  }
const label2 = { inputProps: { 'aria-label': 'Checkbox demo' } };
//const
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function ManterialUI() {
  return (
    <div className="materialUI">
        MaterialUI
        <br/>
        <Button variant="contained">Hello World</Button>
        <br/>
        <hr/>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
        <hr/>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
        <hr/>
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
        <hr/>
        <Checkbox {...label2} defaultChecked />
        <Checkbox {...label2} defaultChecked color="secondary" />
        <Checkbox {...label2} defaultChecked color="success" />
        <Checkbox {...label2} defaultChecked color="default" />
        <Checkbox
        {...label2}
        defaultChecked
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
      <hr/>
        <Box sx={{ width: 300 }}>
            <Slider
                aria-label="Temperature"
                defaultValue={30}
                getAriaValueText={valuetext}
                color="secondary"
            />  
        </Box>
        <hr/>
        <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <hr/>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Esta es la Card
        </Typography>
        <Typography variant="h5" component="div">
          Bien{bull}ve{bull}ni{bull}dos
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Esta es la Card
        </Typography>
        <Typography variant="body2">
            Esta es la Card
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Leer</Button>
      </CardActions>
    </Card>
    </div>
  )
}
