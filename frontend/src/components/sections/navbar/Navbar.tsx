import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import {useCallback} from "react";
import {Link, useNavigate} from "react-router-dom";
import {alpha, styled} from "@mui/material/styles";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Divider} from "@mui/material";
import {useAuthStore} from "../../../store/authHooks";
import {panda_menu, seller_menu, user_menu} from "./navbarTypes";
import Button from "../../UI/Button";

const StyledMenu = styled((props) => (
    // @ts-ignore
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({theme}) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

const ResponsiveAppBar = () => {
    const navigate = useNavigate();
    const user = useAuthStore(state => state.user)
    const signOut = useAuthStore(state => state.signOut)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        signOut()
        setAnchorEl(null);
    }

    const renderAuthMenu = useCallback((panda: any, seller: any) => {
        if (panda && seller) {
            return user_menu
        }
        if (panda) {
            return panda_menu
        }
        if (seller) {
            return seller_menu
        }
        return user_menu
    }, [user])

    return (
        <>
            {
                <AppBar color='inherit' position="static" elevation={1}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h4"
                                noWrap
                                component="div"
                                sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                            >
                                <Link className='navbar-logo' to='/'><span>Panda</span></Link>
                            </Typography>

                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                            >
                                <Link className='navbar-logo' to='/'><span>Panda</span></Link>
                            </Typography>
                            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}/>
                            {
                                user &&
                                <Box sx={{flexGrow: 0}}>
                                    <Button text={user.userName} className='is-inverted' onClick={handleClick}/>
                                    <StyledMenu
                                        // @ts-ignore
                                        id="demo-customized-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'demo-customized-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        {
                                            renderAuthMenu(user.panda, user.seller).map((data, idx) =>
                                                <MenuItem key={idx} sx={{fontSize: 18}} onClick={handleClose}
                                                          disableRipple>
                                                    <Link to={data.link} className='ml-1'>
                                                        <i className={data.icon}/>
                                                        <span className='ml-4'>{data.content}</span>
                                                    </Link>
                                                </MenuItem>
                                            )
                                        }
                                        <Divider sx={{my: 0.5}}/>

                                        <MenuItem sx={{fontSize: 18}} onClick={handleLogout} disableRipple>
                                            <div className='ml-1'>
                                                <i className="bx bx-log-out-circle bx-rotate-180"/>
                                                <span className='ml-4'>로그아웃</span>
                                            </div>
                                        </MenuItem>
                                    </StyledMenu>
                                </Box>
                            }
                            {
                                !user &&
                                <Box sx={{flexGrow: 0}}>
                                    <div className="buttons">
                                        <Button text="회원가입" onClick={() => navigate('/signup')}
                                                className="is-primary"/>
                                        <Button text="로그인" onClick={() => navigate('/signin')}/>
                                    </div>
                                </Box>
                            }
                        </Toolbar>
                    </Container>
                </AppBar>
            }
        </>

    );
};
export default ResponsiveAppBar;
