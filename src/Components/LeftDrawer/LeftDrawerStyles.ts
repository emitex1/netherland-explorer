import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    large: {
      width: theme.spacing(14),
      height: theme.spacing(14),
    },
  })
);

export default useStyles;
