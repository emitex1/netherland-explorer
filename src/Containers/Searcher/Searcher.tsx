import useStyles from "./SearcherStyles";
import useSearch from "./hooks/useSearch";

import { Grid, Paper, Typography, Box, Hidden, Card, CardContent } from "@material-ui/core";
import SearchInput from "./components/SearchInput";
import InitialMessage from "./components/InitialMessage";
import NoResultMessage from "./components/NoResultMessage";
import { numberWithCommas } from "../../Util/formatter";
import PeopleIcon from '@material-ui/icons/People';
import MapIcon from '@material-ui/icons/Map';

export function Searcher() {
  const classes = useStyles();
  const { doSearch, keyword, searchResult, searchDuration } = useSearch();

  const SearchPerformance = () => (
    <Grid item xs={12}>
      <Box color="#AAA" my={1.5}>
        <Typography variant="body1" align="center">
          Search process resulted #{searchResult.length} cities in about {searchDuration} ms for "{keyword}" keyword
        </Typography>
      </Box>
    </Grid>
  )
  const renderSearchResults = () => (
    <Grid container>

      <SearchPerformance />

      <Grid item xs={12} container direction="row">
        <Grid item xs={4}>
          <Typography variant="h6" align="center">
            City Name
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" align="center">
            Province
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" align="center">
            Population
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12}>
      {
        searchResult && searchResult.map ( (city:any, index: number) => {
          return (
            <Grid key={index} item xs={12} container direction="row" className={classes.row}>
              <Grid item xs={4}>
                <Box fontWeight="900" color="purple">
                  {city.cityName}
                </Box>
              </Grid>
              <Grid item xs={4}>
                {city.province}
              </Grid>
              <Grid item xs={4}>
                <Typography align="center">
                  {numberWithCommas(city.population)}
                </Typography>
              </Grid>
            </Grid>
          )
        })
      }
      </Grid>

    </Grid>
  )

  const renderSearchResultsByCard = () => (
    <Grid container>

      <SearchPerformance />

      <Grid item xs={12}>
      {
        searchResult && searchResult.map ( (city:any, index: number) => {
          return (
            <Card key={index} className={classes.card}>
              <CardContent>
                <Box fontWeight="900" color="purple" fontSize="18px" textAlign="center">
                  {city.cityName}
                </Box>
                <Grid container direction="row">
                  <Grid item xs={6}>
                    <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                      <MapIcon style={{marginRight: '5px'}} />
                      {city.province}
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                      <PeopleIcon style={{marginRight: '5px'}} />
                      {numberWithCommas(city.population)}
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          )
        })
      }
      </Grid>

    </Grid>
  )

  return (
    <Grid container>
      <Grid item xs={12}>
        <SearchInput doSearch={doSearch} />
      </Grid>

      <Grid item xs={12}>
        <Hidden xsDown>
          <Paper className={classes.searchResult}>

            { keyword === '' || keyword.length < 2
              ? <InitialMessage />
              : ! searchResult || searchResult.length === 0
              ? <NoResultMessage keyword={keyword} />
              : renderSearchResults()
            }
            
          </Paper>
        </Hidden>

        <Hidden smUp>
          { keyword === '' || keyword.length < 2
            ? <InitialMessage />
            : ! searchResult || searchResult.length === 0
            ? <NoResultMessage keyword={keyword} />
            : renderSearchResultsByCard()
          }
        </Hidden>
      </Grid>
    </Grid>
  )
}
