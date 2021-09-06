import { useState } from "react";
import useStyles from "./SearcherStyles";

import { Grid, Paper, InputBase, Divider, IconButton, Typography, Box } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

import allCities from './nl.json';

interface IHash {
  [key: string] : any[]
}

export function Searcher() {
  const classes = useStyles();
  const [keyword, setKeyword] = useState('');
  const [hashmap, setHashmap] = useState<IHash>();
  const [hashMapIsFilled, setHashMapIsFilled] = useState(false);
  const [searchResult, setSearchResult] = useState<any>();
  const [searchDuration, setSearchDuration] = useState('');

  const generateHashMap = () => {
    if(hashMapIsFilled)
      return;
    
    const cityHashMap: IHash = {};

    for(let alphabet1=0; alphabet1<26; ++alphabet1) {
      for(let alphabet2=0; alphabet2<26; ++alphabet2) {
        let key = String.fromCharCode(97 + alphabet1) + String.fromCharCode(97 + alphabet2);

        for(let i=0; i<allCities.length; ++i) {
          const city = {
            cityName: allCities[i].city,
            province: allCities[i].admin_name,
            population: allCities[i].population
          }
          const keyPosition: number = city.cityName.indexOf(key);

          if(keyPosition >= 0) {
            //console.log('city = ' , allCities[i].city , ' key=', key, ' pos=', keyPosition);
            if(! cityHashMap[key])
              cityHashMap[key] = [];
            cityHashMap[key].push(city)
          }
        }
      }
    }

    setHashmap(cityHashMap);
    setHashMapIsFilled(true);
  }
  generateHashMap();

  const handleSearch = (searchKeyword: string) => {
    setKeyword(searchKeyword);

    if(hashmap) {
      if(searchKeyword.length >= 2) {
        const t0 = performance.now();

        const key = searchKeyword.substr(0, 2);
        const relatedCities = hashmap[key];
        const result = relatedCities && relatedCities.filter(c => c.cityName.indexOf(searchKeyword) >= 0);
        // const result = allCities && allCities.filter(c => c.city.indexOf(searchKeyword) >= 0);

        const t1 = performance.now();
        setSearchResult(result);
        setSearchDuration((t1-t0).toFixed(5));
      }
      else {
        setSearchResult(null);
      }
    }
  }

  const renderInitial = () => (
    <Grid container>
      <Grid item xs={12}>
        <Box my={3} color="#606060">
          <Typography variant="body1" align="center">
            Please enter a keyword (at least 2 characters) to search for the cities of the Netherlands
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )

  const renderNoResult = () => (
    <Grid container>
      <Grid item xs={12}>
        <Box my={3} color="#A42121">
          <Typography variant="h6" align="center">
            No results found for the "{keyword}" keyword
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )

  const renderSearchResult = () => (
    <Grid container>

      <Grid item xs={12}>
        <Box color="#AAA" my={1.5}>
          <Typography variant="body1" align="center">
            Search process resulted #{searchResult.length} cities in about {searchDuration} ms for "{keyword}" keyword
          </Typography>
        </Box>
      </Grid>

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
                  {city.population}
                </Typography>
              </Grid>
            </Grid>
          )
        })
      }
      </Grid>

    </Grid>
  )

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper component="form" className={classes.root}>

          <InputBase
            className={classes.input}
            placeholder="Enter city name here"
            inputProps={{ 'aria-label': 'Search Keyword' }}
            onChange={(e) => {handleSearch(e.target.value)}}
          />

          <Divider className={classes.divider} orientation="vertical" />

          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>

        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.searchResult}>

          { keyword === '' || keyword.length < 2
            ? renderInitial()
            : ! searchResult || searchResult.length === 0
              ? renderNoResult()
              : renderSearchResult()
          }
          
        </Paper>
      </Grid>
    </Grid>
  )
}
