import { useEffect, useState } from 'react';
import allCities from '../nl.json';

interface IHash {
  [key: string] : any[]
}

const useSearch = () => {
  const [hashmap, setHashmap] = useState<IHash>();
  const [hashMapIsFilled, setHashMapIsFilled] = useState(false);
  const [searchResult, setSearchResult] = useState<any>();
  const [searchDuration, setSearchDuration] = useState('');
  const [keyword, setKeyword] = useState('');

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

  const doSearch = (searchKeyword: string) => {
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

  useEffect(() => {
    generateHashMap();
    return () => {
      //cleanup
    }
  });

  return {
    doSearch,
    keyword,
    searchResult,
    searchDuration
  }
}

export default useSearch;
