import Home from './routes/Home'
import CvCover from './routes/CvCover';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Route, Switch, HashRouter} from "react-router-dom"

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
        <HashRouter>
          <Switch>
            <Route exact path={'/'} component = {CvCover}/>
            <Route exact path={'/cv'} component={Home}/>
          </Switch>
        </HashRouter> 
        </ThemeProvider>
    )
}


