// Takes the weather data and returns a formatted object with only important fields
export const weatherDataFormatter = (data) => {
    // Takes field and (time) period and returns value from data
    const getFromData = (field, period) => {
        return data.properties.timeseries[2].data[period].details[field];
    };

    let image_name =
        data.properties.timeseries[2].data.next_1_hours.summary.symbol_code;

    return {
        now: {
            temperature: getFromData("air_temperature", "instant"),
            wind_speed: getFromData("wind_speed", "instant"),
            image_name,
        },
        next_1_hour: {
            precipitation_amount: getFromData("precipitation_amount", "next_1_hours"),
            probability_of_precipitation: getFromData(
                "probability_of_precipitation",
                "next_1_hours"
            ),
        },
        next_6_hours: {
            max_temperature: getFromData("air_temperature_max", "next_6_hours"),
            probability_of_precipitation: getFromData(
                "probability_of_precipitation",
                "next_6_hours"
            ),
        },
    };
};
