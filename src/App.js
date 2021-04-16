import { FeaturePost } from "./components/FeaturePost";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Container from '@material-ui/core/Container'

import{MainFeature} from "./components/MainFeature"
import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { Main } from "./components/Main";
function App() {
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
<Grid >
<Main/>
</Grid>

        </main>
      
      
      
      </Container>
    </React.Fragment>
  );
}

export default App;
