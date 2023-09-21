import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import styled from "@emotion/styled";
import CardModal from "../CardModal";

export const CarAdverts = () => {
  const StyledTypography = styled(Typography)({
    color: "rgba(18, 20, 23, 0.50)",
    fontSize: "12px",
    lineHeight: "18px",
    fontWeight: 400,
    maxWidth: "130px",
  });

  const [carData, setCarData] = useState([]);
  const [page, setPage] =useState(1)

  useEffect(() => {
    axios
      .get(`https://6502e019a0f2c1f3faeb04f8.mockapi.io/api/v1/adverts?page=${page}&limit=4`)
      .then((response) => {
        setCarData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return carData.map((car) => {
    const addressParts = car.address.split(",");
    const city = addressParts.length > 0 ? addressParts[1].trim() : car.address;
    const country =
      addressParts.length > 0 ? addressParts[2].trim() : car.address;

    return (
      <Card
        sx={{
          maxWidth: "274px",
          marginTop: "20px",
          position: "relative",
          marginRight: "29px",
          borderRadius: "14px",
        }}
        key={car.id}
      >
        <IconButton
          aria-label="add to favorites"
          sx={{
            width: "42px",
            height: "42px",
            position: "absolute",
            right: 0,
          }}
        >
          <Checkbox
            icon={<FavoriteBorder sx={{ color: "white" }} />}
            checkedIcon={<Favorite sx={{ color: "rgba(52, 112, 255, 1)" }} />}
          />
        </IconButton>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <CardMedia
            component="img"
            height="268"
            width="274"
            image={
              car.img
                ? car.img
                : "https://res.cloudinary.com/dl1mu7afv/image/upload/v1694726272/suv-car-13361_jsb1x9.png"
            }
            alt="car"
          />
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">
                {car.make}, {car.year}
              </Typography>
              <Typography variant="h6">{car.rentalPrice}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <StyledTypography>{city}</StyledTypography>
              <Divider orientation="vertical" flexItem />
              <StyledTypography>{country}</StyledTypography>
              <Divider orientation="vertical" flexItem />
              <StyledTypography>{car.rentalCompany}</StyledTypography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <StyledTypography>{car.type}</StyledTypography>
              <Divider orientation="vertical" flexItem />
              <StyledTypography>{car.model}</StyledTypography>
              <Divider orientation="vertical" flexItem />
              <StyledTypography>{car.mileage}</StyledTypography>
              <Divider orientation="vertical" flexItem />
              <StyledTypography>{car.accessories[0]}</StyledTypography>
            </Box>
          </CardContent>
          <CardModal
            image={car.img}
            make={car.make}
            model={car.model}
            year={car.year}
            city={city}
            country={country}
            id={car.id}
            rentalPrice={car.rentalPrice}
            description={car.description}
            accessories={car.accessories}
            mileage={car.mileage}
            type={car.type}
            fuelConsumption={car.fuelConsumption}
            rentalCompany={car.rentalCompany}
            engineSize={car.engineSize}
            functionalities={car.functionalities}
            rentalConditions={car.rentalConditions}
          />
        </Box>
        {/* <CardActions disableSpacing></CardActions> */}
      </Card>
    );
  });
};
