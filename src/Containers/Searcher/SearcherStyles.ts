import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
      margin: 'auto',
      marginTop: theme.spacing(3)
    },
    searchResult: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 600,
      margin: 'auto',
      marginTop: theme.spacing(2)
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    row: {
      borderBottom: '1px solid #DDD',
      padding: theme.spacing(1.5)
    },
    altRow: {
      backgroundColor: theme.palette.primary.light
    },
    card: {
      marginBottom: theme.spacing(1.5)
    }
  }),
);

export default useStyles;
