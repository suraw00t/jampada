set "APP_ENV=dev"
uvicorn --proxy-headers app.main:get_application --factory --host 0.0.0.0 --reload --reload-dir .\app