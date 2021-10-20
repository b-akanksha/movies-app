import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React from "react";
import TabPanel from "../TabPanel/TabPanel";
import PlanetsCard from "../Cards/PlanetsCard";
import FilmsCard from "../Cards/FIlmsCard";
import PeopleCard from "../Cards/PeopleCard";
import SpeciesCard from "../Cards/SpeciesCard";
import StarshipCard from "../Cards/StarshipCard";
import VehicleCard from "../Cards/VehicleCard";
import { Typography, Grid } from "@mui/material";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Topics = () => {
  const [value, setValue] = React.useState(0);

  const [data1, setData1] = React.useState([]);
  const [data2, setData2] = React.useState([]);
  const [data3, setData3] = React.useState([]);
  const [data4, setData4] = React.useState([]);
  const [data5, setData5] = React.useState([]);
  const [data6, setData6] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fetchDataHandler = async (type) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://swapi.dev/api/${type}`);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const response_data = await response.json();

      const loadedData = [];
      switch (type) {
        case "people":
          response_data.results.map((person, index) =>
            loadedData.push({
              id: index + 1,
              name: person.name,
              gender: person.gender,
              birth_year: person.birth_year,
              height: person.height,
            })
          );
          setData3(loadedData);
          break;
        case "films":
          response_data.results.map((film, index) =>
            loadedData.push({
              id: index + 1,
              title: film.title,
              director: film.director,
              producer: film.producer,
              release_date: film.release_date,
            })
          );
          setData2(loadedData);
          break;
        case "starships":
          response_data.results.map((starship, index) =>
            loadedData.push({
              id: index + 1,
              name: starship.name,
              model: starship.model,
              manufacturer: starship.manufacturer,
              hyperdrive_rating: starship.hyperdrive_rating,
            })
          );
          setData5(loadedData);
          break;
        case "vehicles":
          response_data.results.map((vehicle, index) =>
            loadedData.push({
              id: index + 1,
              name: vehicle.name,
              model: vehicle.model,
              manufacturer: vehicle.manufacturer,
              cargo_capacity: vehicle.cargo_capacity,
            })
          );
          setData6(loadedData);
          break;
        case "species":
          response_data.results.map((specie, index) =>
            loadedData.push({
              id: index + 1,
              name: specie.name,
              language: specie.language,
              designation: specie.designation,
              average_lifespan: specie.average_lifespan,
            })
          );
          setData4(loadedData);
          break;
        case "planets":
          response_data.results.map((planet, index) =>
            loadedData.push({
              id: index + 1,
              name: planet.name,
              climate: planet.climate,
              population: planet.population,
              terrain: planet.terrain,
            })
          );
          setData1(loadedData);
          break;
        default:
          setData1([]);
          setData2([]);
          setData3([]);
          setData4([]);
          setData5([]);
          setData6([]);
          break;
      }
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    fetchDataHandler("planets");
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ErrorMessage = () => (
    <Grid item>
      <Typography className="error-message">
        Something went wrong!! :({" "}
      </Typography>
    </Grid>
  );
  const LoadingMessage = () => (
    <Grid item>
      <Typography className="loading-message">Loading... </Typography>
    </Grid>
  );

  return (
    <>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          label="Planets"
          onClick={() => fetchDataHandler("planets")}
          {...a11yProps(0)}
        />
        <Tab
          label="Films"
          onClick={() => fetchDataHandler("films")}
          {...a11yProps(1)}
        />
        <Tab
          label="People"
          onClick={() => fetchDataHandler("people")}
          {...a11yProps(2)}
        />
        <Tab
          label="Species"
          onClick={() => fetchDataHandler("species")}
          {...a11yProps(3)}
        />
        <Tab
          label="Starships"
          onClick={() => fetchDataHandler("starships")}
          {...a11yProps(4)}
        />
        <Tab
          label="Vehicles"
          onClick={() => fetchDataHandler("vehicles")}
          {...a11yProps(5)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        {data1.length > 0 &&
          !isLoading &&
          !error &&
          data1.map((planet) => (
            <PlanetsCard
              key={planet.id}
              id={planet.id}
              name={planet.name}
              climate={planet.climate}
              population={planet.population}
              terrain={planet.terrain}
            />
          ))}
        {isLoading && <LoadingMessage />}
        {error && <ErrorMessage />}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {data2.length > 0 &&
          !isLoading &&
          !error &&
          data2.map((film) => (
            <FilmsCard
              key={film.id}
              id={film.id}
              title={film.title}
              director={film.director}
              producer={film.producer}
              release_date={film.release_date}
            />
          ))}
        {isLoading && <LoadingMessage />}
        {error && <ErrorMessage />}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {data3.length > 0 &&
          !isLoading &&
          !error &&
          data3.map((person) => (
            <PeopleCard
              key={person.id}
              id={person.id}
              name={person.name}
              gender={person.gender}
              birth_year={person.birth_year}
              height={person.height}
            />
          ))}
        {isLoading && <LoadingMessage />}
        {error && <ErrorMessage />}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {data4.length > 0 &&
          !isLoading &&
          !error &&
          data4.map((specie) => (
            <SpeciesCard
              key={specie.id}
              id={specie.id}
              name={specie.name}
              language={specie.language}
              designation={specie.designation}
              average_lifespan={specie.average_lifespan}
            />
          ))}
        {isLoading && <LoadingMessage />}
        {error && <ErrorMessage />}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {data5.length > 0 &&
          !isLoading &&
          !error &&
          data5.map((starship) => (
            <StarshipCard
              key={starship.id}
              id={starship.id}
              name={starship.name}
              model={starship.model}
              manufacturer={starship.manufacturer}
              hyperdrive_rating={starship.hyperdrive_rating}
            />
          ))}
        {isLoading && <LoadingMessage />}
        {error && <ErrorMessage />}
      </TabPanel>
      <TabPanel value={value} index={5}>
        {data6.length > 0 &&
          !isLoading &&
          !error &&
          data6.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              id={vehicle.id}
              name={vehicle.name}
              model={vehicle.model}
              manufacturer={vehicle.manufacturer}
              cargo_capacity={vehicle.cargo_capacity}
            />
          ))}
        {isLoading && <LoadingMessage />}
        {error && <ErrorMessage />}
      </TabPanel>
    </>
  );
};

export default Topics;
