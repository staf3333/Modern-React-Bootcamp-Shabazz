/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import styles from "./styles/PaletteListStyles";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import blue from "@mui/material/colors/blue";
import red from "@mui/material/colors/red";
import { Global } from '@emotion/react';


const PaletteList = (props) => {
    const [open, setOpen] = useState(false);
    const [deletingId, setDeletingId] = useState("");

    const { palettes, deletePalette } = props;
    const navigate = useNavigate();

    const goToPalette = (id) => {
        navigate(`/palette/${id}`);
    }

    const openDialog = (id) => {
        setOpen(true);
        setDeletingId(id);
    }
    const closeDialog = () => {
        setOpen(false);
        setDeletingId("");
    }
    const handleDelete = () => {
        deletePalette(deletingId);
        closeDialog();
    }

    return (
        <div css={styles.root}>
            <div css={styles.container}>
                <nav css={styles.nav}>
                    <h1 css={styles.heading}>React Colors</h1>
                    <Link to='/palette/new'>Create Palette</Link>
                </nav>
                <TransitionGroup css={styles.palettes}>
                    <Global styles={styles.transitionStyles} />
                    {palettes.map(palette => (
                        <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                            <MiniPalette
                                {...palette}
                                key={palette.id}
                                handleClick={() => goToPalette(palette.id)}
                                // handleDelete={deletePalette}
                                openDialog={openDialog}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
            <Dialog open={open} aria-labelledby='delete-dialog-titleS' onClose={closeDialog}>
                <DialogTitle id="delete-dialog-title">Delete This Palette?</DialogTitle>
                <List>
                    <ListItem>
                        <ListItemButton onClick={handleDelete}>
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                                    <CheckIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Delete" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={closeDialog}>
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                                    <CloseIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Cancel" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Dialog>
        </div>
    )
}

export default PaletteList;