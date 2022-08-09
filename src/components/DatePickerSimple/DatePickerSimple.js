import React, { Component, useState } from "react";
import DatePicker from "react-datepicker"; // https://reactdatepicker.com/ for options and settings.
import { Helmet } from "react-helmet";
import qs from "qs";
import moment from "moment";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { createTheme, ThemeProvider } from '@mui/material/styles';



// import Button from "./Button";

// import "react-datepicker/dist/react-datepicker.css"; // Base styling for Calendar
// import "./DatePickerSimple.css"; // Custom Styling for Calendar
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

//Sentiment
import PropTypes from 'prop-types';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';


//Sentiment
const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

// const labels = {  
//   1: 'Useless',
//   2: 'Poor',
//   3: 'Ok',
//   4: 'Good',
//   5: 'Excellent',
// };

const labelsStars = {
  1: 'Useless',
  2: 'Useless+',
  3: 'Poor',
  4: 'Poor+',
  5: 'Ok',
  6: 'Ok+',
  7: 'Good',
  8: 'Good+',
  9: 'Excellent',
  10: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

function getLabelText2(value2) {
  return `${value2} Star${value2 !== 1 ? 's' : ''}, ${labels2[value2]}`;
} 


// envia os dados
function submit(value1,value2, name){
  const dados = {
    comentario: name,
    nota1: value1,
    nota2: value2,
    userId: "d21c9464c11d8c80e12ba9da",
    conversationId: "022a7da8afec3326fe8d805c",
  };
  // const { server } = this.props;
  // const { selectedDate, userId, conversationId } = this.state;
  fetch(`https://f04a-168-0-235-117.ngrok.io/date`, {
  method: "POST",
  body: JSON.stringify(dados),
  headers: {
    "Content-Type": "application/json",
  },
  })
  .then((response) => {
    console.log(
      response,
      `Submitted ${selectedDate.format(
        "MMM Do YYYY"
      )} for user(${userId}) in conversation(${conversationId})`
    );
    window.WebviewSdk.close();
  })
  .catch((err) => console.log(err));
}


export default function DatePickerSimple() {
  const [value, setValue1] = React.useState(5);
  const [hover1, setHover1] = React.useState(5);
  const [value2, setValue2] = React.useState(10);
  const [hover2, setHover2] = React.useState(10);
  const [name, setName] = React.useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };

//Sentiment

  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon color="error" />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon color="error" />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon color="warning" />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon color="success" />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon color="success" />,
      label: 'Very Satisfied',
    },
  };
  
  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };

  // NPS
  function getLabelTextStars(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labelsStars[value]}`;
  }

  function setValor1(value) {
    setHover2("10");
  }
//css

const theme = createTheme({

  palette: {
    conectcar: {
      main: '#ff6a38',
      contrastText: '#fff',
    },
  },
});

  
return (
 <>
  <Box
      sx={{
        '& > legend': { mt: 4 },
        position: 'relative',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
      }}
      >
      <Typography variant="h5" component="legend" style={{ borderBottom: '1px solid orange', padding: '0px' }} >Pesquisa de satisfação</Typography>
      
    </Box>

    <Box
    sx={{
      '& > legend': { mt: 4 },
      position: 'relative',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex'
    }}
    >
    <Typography component="legend" >Quanto você avalia este atendimento?</Typography>
    </Box>
    <Box
        sx={{
          '& > legend': { mt: 4 },
          position: 'relative',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex'
        }}
        >        
        


        <StyledRating
        name="highlight-selected-only"
        defaultValue={3}
        IconContainerComponent={IconContainer}
        getLabelText={(value) => customIcons[value].label}
        onChange={(event, newValue) => {
          setValue1(newValue);
        }}
        highlightSelectedOnly
      />



        
      
      </Box>

      <Box
      sx={{
        '& > legend': { mt: 4 },
        position: 'relative',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
      }}
      >
      <Typography component="legend" >Em uma escala de 0 a 10, o quanto você</Typography>
    </Box>
    <Box
      sx={{
        '& > legend': { mt: 4 },
        position: 'relative',
        height: 0,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        margemTop: 1
      }}
      >
      <Typography component="legend" >indicaria a ConectCar para um amigo?</Typography>
    </Box>

    <Box
    sx={{
      '& > legend': { mt: 4 },
      position: 'relative',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      marginTop: 5
      
    }}
    >
        <Rating name="customized-10" 
        defaultValue={5} max={10} 
        getLabelText={getLabelTextStars}
        onChange={(event, newValue) => {
          setValue2(newValue);
        }}
        onChangeActive={(event, newHover2) => {
          setHover2(newHover2);
        }}
      />
      {/* {value !== null && (
        <Box sx={{ ml: 10 }}>{labelsStars[hover2 !== -1 ? hover2 : value]}</Box>
      )} */}

      
     
    </Box>

    {/* <Box
      sx={{
        '& > legend': { mt: 4 },
        position: 'relative',
        height: 0,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        margemTop: 1
      }}
      >
      {value !== null && (
        <Box sx={{ ml: 3 }}>{labelsStars[hover2 !== -1 ? hover2 : value]}</Box>
      )}
    </Box> */}

    <Box
    sx={{
      '& > legend': { mt: 4 },
      position: 'relative',
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex'
    }}
    >
    <Typography component="legend">Deixe o seu comentário:</Typography>
    </Box>

        <Box
        sx={{
          '& > legend': { mt: 4 },
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          height: 50,
          margemTop: 30
        }}
        >
        
         
  
        <TextareaAutosize id="outlined-basic"
        style={{ width: 300, height: 50 }}
        label="Name"
        value={name}
        onChange={handleChange}
         />
        </Box>


        <Box
        sx={{
          '& > legend': { mt: 5 },
          position: 'relative',
          height: 70,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex'
        }}
        >
        <Stack direction="row" spacing={2}>
        <ThemeProvider theme={theme}>
        <Button color="conectcar" variant="contained" onClick={() => {
            submit(value,value2, name)
          }}>
        Enviar
        </Button>
      </ThemeProvider>
        {/* <Button variant="contained" color="orange"  onClick={() => {
            submit(value,value2, name)
          }}>
          Enviar
        </Button> */}
        
      </Stack>
      </Box>
 </> 
    
    
    
    
    );
  //   <StyledRating
  //     name="highlight-selected-only"
  //     defaultValue={2}
  //     IconContainerComponent={IconContainer}
  //     getLabelText={(value) => customIcons[value].label}
  //     highlightSelectedOnly
  //   />
  // );
    // return (
    //   <div id="datepicker-simple">
    //     <Helmet title={"Select Date"} />
    //     <DatePicker
    //       inline
    //       minDate={moment()}
    //       selected={selectedDate}
    //       onChange={(date) => this.handleChange(date)}
    //     />
    //     <div className="nav">
    //       <Button selectedDate={selectedDate} submitDate={this.submitDate} />
    //     </div>
    //   </div>
    // );
  // }
}

// export default DatePickerSimple;
