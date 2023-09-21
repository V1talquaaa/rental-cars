import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "@emotion/styled";
import { Card, CardContent, CardMedia, Divider, Stack } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 541,
  height: 752,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: '14px',
};

const StyledTypography = styled(Typography)({
  color: "rgba(18, 20, 23, 0.50)",
  fontSize: "12px",
  lineHeight: "18px",
  fontWeight: 400,
  maxWidth: "130px",

});

const ModalBtn = styled(Button)({
  marginTop: "29px",
  backgroundColor: "#3470FF",
  color: "white",
  width: "100%",
  borderRadius: "14px",
  height: "44px",
  "&:hover": { backgroundColor: "#0B44CD" },
  // position: 'absolute',
  // bottom: 0,
});

export default function CardModal({
  image,
  make,
  model,
  year,
  city,
  country,
  id,
  rentalPrice,
  description,
  accessories,
  mileage,
  type,
  fuelConsumption,
  rentalCompany,
  engineSize,
  functionalities,
  rentalConditions
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ModalBtn onClick={handleOpen}>Learn more</ModalBtn>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card sx={{borderRadius: '14px', border: 'none'}}>
            <CardMedia
              component="img"
              height="248px"
              width="461px"
              image={
                image
                  ? image
                  : "https://res.cloudinary.com/dl1mu7afv/image/upload/v1694726272/suv-car-13361_jsb1x9.png"
              }
              alt="car"
            ></CardMedia>
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Typography>
                  {make} {model}, {year}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <StyledTypography>{city}</StyledTypography>
                <Divider orientation="vertical" flexItem />
                <StyledTypography>{country}</StyledTypography>
                <Divider orientation="vertical" flexItem />
                <StyledTypography>Id:{id}</StyledTypography>
                <Divider orientation="vertical" flexItem />
                <StyledTypography>Year: {year}</StyledTypography>
                <Divider orientation="vertical" flexItem />
                <StyledTypography>Type: {type}</StyledTypography>
              </Box>
              <Box display="flex">
                <StyledTypography marginRight="10px">
                  Fuel Consumption: {fuelConsumption}
                </StyledTypography>
                <Divider orientation="vertical" flexItem />
                <StyledTypography marginLeft="10px">
                  Engine Size: {engineSize}
                </StyledTypography>
              </Box>
              <Typography mt={2}>{description}</Typography>
              <Typography mt={2}>Accessories and functionalities:</Typography>
              <Box display="flex" justifyContent="space-between" mt={2}>
                {accessories.map((option) => {
                  return (
                    <>
                      <StyledTypography>{option}</StyledTypography>
                      <Divider orientation="vertical" flexItem />
                    </>
                  );
                })}
              </Box>
              <Box display="flex" justifyContent="space-between" mt={2}>
                {functionalities.map((option) => {
                  return (
                    <>
                      <StyledTypography>{option}</StyledTypography>
                      <Divider orientation="vertical" flexItem />
                    </>
                  );
                })}
              </Box>
              <Typography mt={2}>Rental Conditions:</Typography>
              <Typography>{rentalConditions}</Typography>
              {rentalConditions}
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}
