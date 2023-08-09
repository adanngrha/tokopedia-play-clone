import React from "react";
import {AppBar, Toolbar, Typography, IconButton, Avatar} from "@mui/material";
import Button from "@mui/material/Button";
export default function Navbar() {
    return (
            <AppBar position="relative" sx={{mb: '15px'}}>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        Adan&#39;s Play
                    </Typography>
                    {/*<Button color="inherit">Login</Button>
                    <Button color="inherit">Register</Button>*/}
                    <Button color="inherit">Logout</Button>
                    <IconButton sx={{ p: 1 }}>
                        <Avatar alt="Adan" src="https://media.licdn.com/dms/image/D5603AQFLdgKcaV6E0g/profile-displayphoto-shrink_400_400/0/1684416813590?e=1697068800&v=beta&t=6evWgAE6IFXcjzj8Yd3HMNsLQzrEYk4qgeTIMej78r0" />
                    </IconButton>
                </Toolbar>
            </AppBar>
    )
}
