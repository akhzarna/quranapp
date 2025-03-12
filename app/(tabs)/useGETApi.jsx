import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useGETApi = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

    const fetchData = async () => {
        console.log('fetchData is calling');
        try {
            const response = await fetch(
                'https://api.alquran.cloud/v1/quran/en.asad',
              );
              const json = await response.json();
              console.log('Result aa raha hai ?');
              setData(json.data.surahs);
              AsyncStorage.setItem('qurandata3', JSON.stringify(qurandata));

        } catch (error) {
            console.log('Error aa raha hai ?');
        setError(error);
        } finally {
        setLoading(false);
        }
    };

     AsyncStorage.getItem('qurandata3').then((value) => {  
         const myvalue = JSON.parse(value);
         if(myvalue){
            setData(myvalue);
             console.log('if is this calling');
         }else{
            console.log('else is this calling');
            fetchData();
     }
    });


    }, [url]);

    return { data, loading, error };
};

export default useGETApi;