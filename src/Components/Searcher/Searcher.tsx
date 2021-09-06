import { useState } from "react";
import useStyles from "./SearcherStyles";

import { Grid, Paper, InputBase, Divider, IconButton, Typography } from "@material-ui/core";
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
        const key = searchKeyword.substr(0, 2);
        const relatedCities = hashmap[key];
        const result = relatedCities && relatedCities.filter(c => c.cityName.indexOf(searchKeyword) >= 0);
        setSearchResult(result);
      }
      else {
        setSearchResult(null);
      }
    }
  }

  const renderInitial = () => (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="body1" align="center">
          Please enter a keyword (at least 2 characters) to search in the cities of the Netherlands
        </Typography>
      </Grid>
    </Grid>
  )

  const renderNoResult = () => (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6" align="center">
          Not results found for the "{keyword}" keyword
        </Typography>
      </Grid>
    </Grid>
  )

  const renderSearchResult = () => (
    <Grid container>

      <Grid item xs={12}>
        <Typography variant="h6" align="center">
          Search results for "{keyword}" ({searchResult.length} cities)
        </Typography>
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
            <Grid key={index} item xs={12} container direction="row">
              <Grid item xs={4}>
                {city.cityName}
              </Grid>
              <Grid item xs={4}>
                {city.province}
              </Grid>
              <Grid item xs={4}>
                {city.population}
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
