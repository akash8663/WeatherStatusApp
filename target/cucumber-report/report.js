$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("testCases.feature");
formatter.feature({
  "line": 1,
  "name": "It tells how is the weather from Google",
  "description": "",
  "id": "it-tells-how-is-the-weather-from-google",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "check how is the weather of today",
  "description": "",
  "id": "it-tells-how-is-the-weather-from-google;check-how-is-the-weather-of-today",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open browser and goto google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I type how is todays weather in \"\u003cLocation\u003e\" and enter",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "It shows me the temperature",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Tells me \"Feels deadly cold\" if temperature is between 20 to 45",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Tells me \"Feels damn cold\" if temperature is between 46 to 60",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Tells me \"Feels cold\" if temperature is between 61 to 69",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Tells me \"Feels normal\" if temperature is between 70 to 80",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Tells me \"Feels hot\" if temperature is between 81 to 89",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Tells me \"Feels too hot\" if temperature is between 90 to 99",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Tells me \"Feels Burning hot\" if temperature is between 100 to 120",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Close the application",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "it-tells-how-is-the-weather-from-google;check-how-is-the-weather-of-today;",
  "rows": [
    {
      "cells": [
        "Location"
      ],
      "line": 17,
      "id": "it-tells-how-is-the-weather-from-google;check-how-is-the-weather-of-today;;1"
    },
    {
      "cells": [
        "New York"
      ],
      "line": 18,
      "id": "it-tells-how-is-the-weather-from-google;check-how-is-the-weather-of-today;;2"
    },
    {
      "cells": [
        "Dhaka"
      ],
      "line": 19,
      "id": "it-tells-how-is-the-weather-from-google;check-how-is-the-weather-of-today;;3"
    },
    {
      "cells": [
        "San Francisco"
      ],
      "line": 20,
      "id": "it-tells-how-is-the-weather-from-google;check-how-is-the-weather-of-today;;4"
    },
    {
      "cells": [
        "Tromso, Norway"
      ],
      "line": 21,
      "id": "it-tells-how-is-the-weather-from-google;check-how-is-the-weather-of-today;;5"
    },
    {
      "cells": [
        "Qatar"
      ],
      "line": 22,
      "id": "it-tells-how-is-the-weather-from-google;check-how-is-the-weather-of-today;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "check how is the weather of today",
  "description": "",
  "id": "it-tells-how-is-the-weather-from-google;check-how-is-the-weather-of-today;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open browser and goto google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I type how is todays weather in \"New York\" and enter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "It shows me the temperature",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Tells me \"Feels deadly cold\" if temperature is between 20 to 45",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Tells me \"Feels damn cold\" if temperature is between 46 to 60",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Tells me \"Feels cold\" if temperature is between 61 to 69",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Tells me \"Feels normal\" if temperature is between 70 to 80",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Tells me \"Feels hot\" if temperature is between 81 to 89",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Tells me \"Feels too hot\" if temperature is between 90 to 99",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Tells me \"Feels Burning hot\" if temperature is between 100 to 120",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Close the application",
  "keyword": "And "
});
formatter.match({
  "location": "WeatherChecker.Open_browser_and_goto_google_com()"
});
formatter.result({
  "duration": 20230764889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 33
    }
  ],
  "location": "WeatherChecker.I_type_how_is_todays_weather_in_and_enter(String)"
});
formatter.result({
  "duration": 2613445333,
  "status": "passed"
});
formatter.match({
  "location": "WeatherChecker.It_shows_me_the_temperature()"
});
formatter.result({
  "duration": 199680889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels deadly cold",
      "offset": 10
    },
    {
      "val": "20",
      "offset": 55
    },
    {
      "val": "45",
      "offset": 61
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 21858667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels damn cold",
      "offset": 10
    },
    {
      "val": "46",
      "offset": 53
    },
    {
      "val": "60",
      "offset": 59
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 18582222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels cold",
      "offset": 10
    },
    {
      "val": "61",
      "offset": 48
    },
    {
      "val": "69",
      "offset": 54
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 21525777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels normal",
      "offset": 10
    },
    {
      "val": "70",
      "offset": 50
    },
    {
      "val": "80",
      "offset": 56
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 19548000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels hot",
      "offset": 10
    },
    {
      "val": "81",
      "offset": 47
    },
    {
      "val": "89",
      "offset": 53
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 20877334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels too hot",
      "offset": 10
    },
    {
      "val": "90",
      "offset": 51
    },
    {
      "val": "99",
      "offset": 57
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 19668000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels Burning hot",
      "offset": 10
    },
    {
      "val": "100",
      "offset": 55
    },
    {
      "val": "120",
      "offset": 62
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 17956889,
  "status": "passed"
});
formatter.match({
  "location": "WeatherChecker.Close_the_application()"
});
formatter.result({
  "duration": 2099250666,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "check how is the weather of today",
  "description": "",
  "id": "it-tells-how-is-the-weather-from-google;check-how-is-the-weather-of-today;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open browser and goto google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I type how is todays weather in \"Dhaka\" and enter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "It shows me the temperature",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Tells me \"Feels deadly cold\" if temperature is between 20 to 45",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Tells me \"Feels damn cold\" if temperature is between 46 to 60",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Tells me \"Feels cold\" if temperature is between 61 to 69",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Tells me \"Feels normal\" if temperature is between 70 to 80",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Tells me \"Feels hot\" if temperature is between 81 to 89",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Tells me \"Feels too hot\" if temperature is between 90 to 99",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Tells me \"Feels Burning hot\" if temperature is between 100 to 120",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Close the application",
  "keyword": "And "
});
formatter.match({
  "location": "WeatherChecker.Open_browser_and_goto_google_com()"
});
formatter.result({
  "duration": 7012521778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dhaka",
      "offset": 33
    }
  ],
  "location": "WeatherChecker.I_type_how_is_todays_weather_in_and_enter(String)"
});
formatter.result({
  "duration": 2298296888,
  "status": "passed"
});
formatter.match({
  "location": "WeatherChecker.It_shows_me_the_temperature()"
});
formatter.result({
  "duration": 195867111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels deadly cold",
      "offset": 10
    },
    {
      "val": "20",
      "offset": 55
    },
    {
      "val": "45",
      "offset": 61
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 22022222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels damn cold",
      "offset": 10
    },
    {
      "val": "46",
      "offset": 53
    },
    {
      "val": "60",
      "offset": 59
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 21264000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels cold",
      "offset": 10
    },
    {
      "val": "61",
      "offset": 48
    },
    {
      "val": "69",
      "offset": 54
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 23412000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels normal",
      "offset": 10
    },
    {
      "val": "70",
      "offset": 50
    },
    {
      "val": "80",
      "offset": 56
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 21535111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels hot",
      "offset": 10
    },
    {
      "val": "81",
      "offset": 47
    },
    {
      "val": "89",
      "offset": 53
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 23694667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels too hot",
      "offset": 10
    },
    {
      "val": "90",
      "offset": 51
    },
    {
      "val": "99",
      "offset": 57
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 21880000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels Burning hot",
      "offset": 10
    },
    {
      "val": "100",
      "offset": 55
    },
    {
      "val": "120",
      "offset": 62
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 22564445,
  "status": "passed"
});
formatter.match({
  "location": "WeatherChecker.Close_the_application()"
});
formatter.result({
  "duration": 2324255111,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "check how is the weather of today",
  "description": "",
  "id": "it-tells-how-is-the-weather-from-google;check-how-is-the-weather-of-today;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open browser and goto google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I type how is todays weather in \"San Francisco\" and enter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "It shows me the temperature",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Tells me \"Feels deadly cold\" if temperature is between 20 to 45",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Tells me \"Feels damn cold\" if temperature is between 46 to 60",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Tells me \"Feels cold\" if temperature is between 61 to 69",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Tells me \"Feels normal\" if temperature is between 70 to 80",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Tells me \"Feels hot\" if temperature is between 81 to 89",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Tells me \"Feels too hot\" if temperature is between 90 to 99",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Tells me \"Feels Burning hot\" if temperature is between 100 to 120",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Close the application",
  "keyword": "And "
});
formatter.match({
  "location": "WeatherChecker.Open_browser_and_goto_google_com()"
});
formatter.result({
  "duration": 5879923555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "San Francisco",
      "offset": 33
    }
  ],
  "location": "WeatherChecker.I_type_how_is_todays_weather_in_and_enter(String)"
});
formatter.result({
  "duration": 2318228889,
  "status": "passed"
});
formatter.match({
  "location": "WeatherChecker.It_shows_me_the_temperature()"
});
formatter.result({
  "duration": 210141333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels deadly cold",
      "offset": 10
    },
    {
      "val": "20",
      "offset": 55
    },
    {
      "val": "45",
      "offset": 61
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 20957334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels damn cold",
      "offset": 10
    },
    {
      "val": "46",
      "offset": 53
    },
    {
      "val": "60",
      "offset": 59
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 20964889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels cold",
      "offset": 10
    },
    {
      "val": "61",
      "offset": 48
    },
    {
      "val": "69",
      "offset": 54
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 21570666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels normal",
      "offset": 10
    },
    {
      "val": "70",
      "offset": 50
    },
    {
      "val": "80",
      "offset": 56
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 20870667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels hot",
      "offset": 10
    },
    {
      "val": "81",
      "offset": 47
    },
    {
      "val": "89",
      "offset": 53
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 19960000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels too hot",
      "offset": 10
    },
    {
      "val": "90",
      "offset": 51
    },
    {
      "val": "99",
      "offset": 57
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 21031111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels Burning hot",
      "offset": 10
    },
    {
      "val": "100",
      "offset": 55
    },
    {
      "val": "120",
      "offset": 62
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 20507111,
  "status": "passed"
});
formatter.match({
  "location": "WeatherChecker.Close_the_application()"
});
formatter.result({
  "duration": 2321212445,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "check how is the weather of today",
  "description": "",
  "id": "it-tells-how-is-the-weather-from-google;check-how-is-the-weather-of-today;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open browser and goto google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I type how is todays weather in \"Tromso, Norway\" and enter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "It shows me the temperature",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Tells me \"Feels deadly cold\" if temperature is between 20 to 45",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Tells me \"Feels damn cold\" if temperature is between 46 to 60",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Tells me \"Feels cold\" if temperature is between 61 to 69",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Tells me \"Feels normal\" if temperature is between 70 to 80",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Tells me \"Feels hot\" if temperature is between 81 to 89",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Tells me \"Feels too hot\" if temperature is between 90 to 99",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Tells me \"Feels Burning hot\" if temperature is between 100 to 120",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Close the application",
  "keyword": "And "
});
formatter.match({
  "location": "WeatherChecker.Open_browser_and_goto_google_com()"
});
formatter.result({
  "duration": 5379727556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tromso, Norway",
      "offset": 33
    }
  ],
  "location": "WeatherChecker.I_type_how_is_todays_weather_in_and_enter(String)"
});
formatter.result({
  "duration": 2385566222,
  "status": "passed"
});
formatter.match({
  "location": "WeatherChecker.It_shows_me_the_temperature()"
});
formatter.result({
  "duration": 235802667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels deadly cold",
      "offset": 10
    },
    {
      "val": "20",
      "offset": 55
    },
    {
      "val": "45",
      "offset": 61
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 21627112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels damn cold",
      "offset": 10
    },
    {
      "val": "46",
      "offset": 53
    },
    {
      "val": "60",
      "offset": 59
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 19784889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels cold",
      "offset": 10
    },
    {
      "val": "61",
      "offset": 48
    },
    {
      "val": "69",
      "offset": 54
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 21437333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels normal",
      "offset": 10
    },
    {
      "val": "70",
      "offset": 50
    },
    {
      "val": "80",
      "offset": 56
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 20680444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels hot",
      "offset": 10
    },
    {
      "val": "81",
      "offset": 47
    },
    {
      "val": "89",
      "offset": 53
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 20919111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels too hot",
      "offset": 10
    },
    {
      "val": "90",
      "offset": 51
    },
    {
      "val": "99",
      "offset": 57
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 20433333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels Burning hot",
      "offset": 10
    },
    {
      "val": "100",
      "offset": 55
    },
    {
      "val": "120",
      "offset": 62
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 22136445,
  "status": "passed"
});
formatter.match({
  "location": "WeatherChecker.Close_the_application()"
});
formatter.result({
  "duration": 2317195556,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "check how is the weather of today",
  "description": "",
  "id": "it-tells-how-is-the-weather-from-google;check-how-is-the-weather-of-today;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open browser and goto google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I type how is todays weather in \"Qatar\" and enter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "It shows me the temperature",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Tells me \"Feels deadly cold\" if temperature is between 20 to 45",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Tells me \"Feels damn cold\" if temperature is between 46 to 60",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Tells me \"Feels cold\" if temperature is between 61 to 69",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Tells me \"Feels normal\" if temperature is between 70 to 80",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Tells me \"Feels hot\" if temperature is between 81 to 89",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Tells me \"Feels too hot\" if temperature is between 90 to 99",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Tells me \"Feels Burning hot\" if temperature is between 100 to 120",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Close the application",
  "keyword": "And "
});
formatter.match({
  "location": "WeatherChecker.Open_browser_and_goto_google_com()"
});
formatter.result({
  "duration": 5846305777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatar",
      "offset": 33
    }
  ],
  "location": "WeatherChecker.I_type_how_is_todays_weather_in_and_enter(String)"
});
formatter.result({
  "duration": 2319832888,
  "status": "passed"
});
formatter.match({
  "location": "WeatherChecker.It_shows_me_the_temperature()"
});
formatter.result({
  "duration": 205865778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels deadly cold",
      "offset": 10
    },
    {
      "val": "20",
      "offset": 55
    },
    {
      "val": "45",
      "offset": 61
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 17585778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels damn cold",
      "offset": 10
    },
    {
      "val": "46",
      "offset": 53
    },
    {
      "val": "60",
      "offset": 59
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 18704889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels cold",
      "offset": 10
    },
    {
      "val": "61",
      "offset": 48
    },
    {
      "val": "69",
      "offset": 54
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 17430666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels normal",
      "offset": 10
    },
    {
      "val": "70",
      "offset": 50
    },
    {
      "val": "80",
      "offset": 56
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 19968445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels hot",
      "offset": 10
    },
    {
      "val": "81",
      "offset": 47
    },
    {
      "val": "89",
      "offset": 53
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 19341333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels too hot",
      "offset": 10
    },
    {
      "val": "90",
      "offset": 51
    },
    {
      "val": "99",
      "offset": 57
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 22514667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feels Burning hot",
      "offset": 10
    },
    {
      "val": "100",
      "offset": 55
    },
    {
      "val": "120",
      "offset": 62
    }
  ],
  "location": "WeatherChecker.Tells_me_if_temperature_is_between_to(String,int,int)"
});
formatter.result({
  "duration": 20533334,
  "status": "passed"
});
formatter.match({
  "location": "WeatherChecker.Close_the_application()"
});
formatter.result({
  "duration": 2315920889,
  "status": "passed"
});
});