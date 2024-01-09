import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SeaApi = () => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst',
          {
            params: {
              serviceKey: decodeURIComponent(
                '%2BfUGybpr6srFj3hrh795f6tUPqEUPO7DG2CAnD%2B6adcNnaLMixQSsnK3MvqdvwFBHoed7QrJRZPQwYgXDGgKfA%3D%3D'
              ),
              numOfRows: 10,
              pageNo: 1,
              regId: '12A20000',
              dataType: 'JSON',
              tmFc: '202401041200', // 예시로 현재 날짜와 시간을 설정
            },
          }
        );

        // 응답 데이터에서 items를 찾아오는 부분 수정
        const items = response.data?.response?.body?.items?.item;

        // items가 배열이 아니거나 유효한 경우에만 데이터를 설정
        if (Array.isArray(items) && items.length > 0) {
          setForecastData(items);
        } else {
          console.error('No valid items in the response data:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 style={{ color: 'red' }}>Weather Forecast</h1>
      <ul>
        {forecastData.length > 0 ? (
          forecastData.map(item => (
            <li key={item.regId}>{item.ta}℃ - {item.wf}</li>
          ))
        ) : (
          <li>No data available</li>
        )}
      </ul>
    </div>
  );
};

export default SeaApi;
