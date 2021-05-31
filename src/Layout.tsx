import { AppBar, TextField, Toolbar } from '@material-ui/core';
import React, { FunctionComponent } from 'react'

const Layout: FunctionComponent = () => {
  return (<div>
    <AppBar position="static">
  <Toolbar>
    <TextField id="standard-basic" label="Standard" />
  </Toolbar>
</AppBar>
</div>);
}

export default Layout;