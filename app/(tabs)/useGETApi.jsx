import { useState, useEffect } from 'react';

const useGETApi = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(
                'https://api.alquran.cloud/v1/quran/en.asad',
              );
              const json = await response.json();
              setData(json.data.surahs);
        } catch (error) {
        setError(error);
        } finally {
        setLoading(false);
        }
    };
    fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useGETApi;