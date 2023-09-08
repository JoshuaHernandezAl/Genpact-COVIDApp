# COVID App

## Visit application

1. Go to https://joshuahernandezal.github.io/Genpact-COVIDApp or https://eloquent-kulfi-56ccd0.netlify.app/

## Start application

1. Clone the repository: `git clone https://github.com/JoshuaHernandezAl/Genpact-COVIDApp.git`
2. Run: `yarn`
3. Run: `yarn start`
4. Go to `http://localhost:5173/`

## Routes

1. `/`: This route shows the most recent COVID data for the US.
2. `/historic`: Show a part of the COVID data, this route shows:
    - Last data available 
    - First data available 
    - Top 4 data ordered by deaths 
3. `/state`: This route allows you to filter data by state, by default shows the same as `/historic`, but just for California
4. `/date`: This route allows you to filter data by date for all states, by default shows the same as `/historic`
