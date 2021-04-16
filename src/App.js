import { FeaturePost } from "./components/FeaturePost";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import{MainFeature} from "./components/MainFeature"
import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));
function App() {
  const classes = useStyles()
  return (
    <React.Fragment className="App">
      <CssBaseline/>
      <Container maxWidth='lg'>
        <Header/>
        <main>
<MainFeature/>
<Grid container spacing={4}>
<FeaturePost/>
</Grid>

<Grid container spacing={5}  className={classes.mainGrid} >
<Main/>
<Sidebar/>
</Grid>

        </main>
      
      
      
      </Container>
    </React.Fragment>
  );
}

export default App;
