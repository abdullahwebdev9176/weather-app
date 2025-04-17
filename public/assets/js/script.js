const submitBtn = document.getElementById('SubmitBtn');
const cityName = document.getElementById('weatherCity');
const cityOutput = document.getElementById('cityOutput');
const tempValue = document.getElementById('temp-value');
const tempDay = document.getElementById('temp-day');
const tempDate = document.getElementById('temp-date');

const apiKey = '98cceee6ebd945b0af0204952251704';

const getInfo = async (event) => {
    event.preventDefault();

    let cityNameValue = cityName.value;

    if (cityNameValue === "") {
        cityOutput.innerText = 'Please write the name before search';
    } else {
        let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityNameValue}`;

        const respData = await fetch(url);
        const data = await respData.json();

        tempValue.innerText = data.current.temp_c;
        cityOutput.innerText = data.location.name;

        const localDate = new Date(data.location.localtime);

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayName = days[localDate.getDay()];
        tempDay.innerText = dayName;

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = localDate.toLocaleDateString(undefined, options);
        tempDate.innerText = formattedDate;

        // console.log(data);
    }
};

submitBtn.addEventListener('click', getInfo);
