//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './routes/Home'
import CvCover from './routes/CvCover';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const theme = createMuiTheme({
    palette: {
      primary: {
        main:'#5B3256',
        light:'#D0B6CA'
      },
      secondary:{
        main:'#7986cb',
        light: ''
      },
      text:{
        main:'1C0F15',
        light: '#5A4148'
      }
    },
  });


export default function App(){
    return(
        <ThemeProvider theme={theme}>
        <Router>
        <Switch>
          <Route exact path="/"><CvCover/></Route>
          <Route path="/cv"><Home/></Route>
        </Switch>
        </Router>
 
        </ThemeProvider>
    )
}