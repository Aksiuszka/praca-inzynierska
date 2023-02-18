import {
  AppBar,
  Toolbar,
  Container,
  Box,
  List,
  ListItem,
  ListItemButton,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

export const CustomAppbar = styled(AppBar)`
  justify-content: space-between;
  z-index: 100;
`;

export const CustomToolbar = styled(Toolbar)`
  justify-content: space-between;
  box-shadow: 'none';
`;

export const CustomContainer = styled(Container)`
  box-shadow: 'none';
`;

export const CustomMenuIcon = styled(MenuIcon)`
  color: ${(props) => props.theme.palette.text.primary};
`;

export const CustomBoxUp = styled(Box)`
  flexgrow: 1;
  display: block;
  ${(props) => props.theme.breakpoints.up('md')} {
    display: none;
  }
`;

export const CustomBoxDown = styled(Box)`
  flexgrow: 1;
  display: block;
  ${(props) => props.theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const CustomList = styled(List)`
  display: flex;
  jutify-content: space-between;
`;

export const CustomListItem = styled(ListItem)`
  padding: 0;
`;

export const CustomListItemButton = styled(ListItemButton)` 
color: ${(props) => props.theme.palette.text.primary};
text-align: center;
width: max-content;
'&:hover': {
borderRadius: theme.spacing(5);
},
`;
export const Dot = styled('div')`
  width: 0.625rem;
  height: 0.625rem;
  margin-inline: 2rem;
  border-radius: 50%;
  background: ${(props) => props.theme.palette.text.accent};
`;

export const CustomMenuItem = styled(MenuItem)`
  && {
    margin: 2rem;
    '&:hover': {
      backgroundcolor: '#009900 !important';
    }
  }
`;
