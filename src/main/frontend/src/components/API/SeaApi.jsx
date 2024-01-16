const axios = require('axios');

const apiUrl = 'http://apis.data.go.kr/1360000/MidFcstInfoService';
const serviceKey = encodeURIComponent('+fUGybpr6srFj3hrh795f6tUPqEUPO7DG2CAnD+6adcNnaLMixQSsnK3MvqdvwFBHoed7QrJRZPQwYgXDGgKfA==');
const pageNo = 1;
const numOfRows = 10;
const dataType = 'XML';
const regId = '12A20000';
const tmFc = '202401100600';

const fetchData = async () => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        ServiceKey: serviceKey,
        pageNo: pageNo,
        numOfRows: numOfRows,
        dataType: dataType,
        regId: regId,
        tmFc: tmFc,
      },
    });

    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
