import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  FormControl,
  TextField,
  Container,
  MenuItem,
} from "@mui/material";

import { countries } from "../../components/common/data/countries";
import { BsCheck2 } from "react-icons/bs";
import { useLocationMutation } from "../../services/agencyAPIs/locationRequests";

const AddLocation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    businessName: "",
    street: "",
    city: "",
    region: "",
    country: "",
    postalCode: "",
    phoneNumber: "",
    timezone: "",
    website: "",
  });

  const [fullNameError, setFullNameError] = useState(false);
  const [emailAddressError, setEmailAddressError] = useState(false);
  const [businessNameError, setBusinessNameError] = useState(false);
  const [streetError, setStreetError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [regionError, setRegionError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [postalCodeError, setPostalCodeError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [timezoneError, setTimezoneError] = useState(false);
  const [isAnyFieldEdited, setIsAnyFieldEdited] = useState(false);

  const { mutate, isLoading, error } = useLocationMutation();

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "fullName") setFullNameError(formData.fullName.trim() === "");
    if (name === "emailAddress")
      setEmailAddressError(formData.emailAddress.trim() === "");
    if (name === "businessName")
      setBusinessNameError(formData.businessName.trim() === "");
    if (name === "street") setStreetError(formData.street.trim() === "");
    if (name === "city") setCityError(formData.city.trim() === "");
    if (name === "region") setRegionError(formData.region.trim() === "");
    if (name === "country") setCountryError(formData.country.trim() === "");
    if (name === "postalCode")
      setPostalCodeError(formData.postalCode.trim() === "");
    if (name === "phoneNumber")
      setPhoneNumberError(formData.phoneNumber.trim() === "");
    if (name === "timezone") setTimezoneError(formData.timezone.trim() === "");

    setIsAnyFieldEdited(true);
  };

  const handleFormSubmit = (e) => {
    setFullNameError(formData.fullName.trim().length === 0);
    setEmailAddressError(formData.emailAddress.trim() === "");
    setBusinessNameError(formData.businessName.trim() === "");
    setStreetError(formData.street.trim() === "");
    setCityError(formData.city.trim() === "");
    setRegionError(formData.region.trim() === "");
    setCountryError(formData.country.trim() === "");
    setPostalCodeError(formData.postalCode.trim() === "");
    setPhoneNumberError(formData.phoneNumber.trim() === "");
    setTimezoneError(formData.timezone.trim() === "");

    const areInputsCorrect = [
      fullNameError,
      emailAddressError,
      businessNameError,
      streetError,
      cityError,
      regionError,
      countryError,
      postalCodeError,
      phoneNumberError,
      timezoneError,
      !isAnyFieldEdited,
    ].some((value) => value);
    if (areInputsCorrect) return;
    else mutate(formData);
  };

  return (
    <div className="bg-light-indigo min-h-screen max-h-screen overflow-y-scroll pr-80 px-8">
      {/* content wrapper */}
      <div className="px-3 md:px-4 pt-5">
        {/* heading */}
        <h2 className="text-xl font-semibold mb-5">Add Location</h2>

        <div className="flex flex-col gap-3 flex-wrap">
          {/* Form Card */}
          <div className="flex-[1] min-h-0 bg-white rounded-2xl shadow-xl">
            {/* header */}
            <div className=" font-medium flex items-center justify-between md:px-5 px-3 py-3 border-b border-gray-100 ">
              <span>Account Information</span>
            </div>
            {/* body */}
            <div className="flex flex-col p-3 md:py-5 py-5 p-8">
              <FormControl fullWidth sx={{ gap: "16px" }}>
                <TextField
                  size="small"
                  error={fullNameError}
                  helperText={
                    fullNameError ? "Full Name field is required" : ""
                  }
                  label="Full Name"
                  fullWidth
                  variant="outlined"
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleFormChange}
                  onBlur={handleFormChange}
                />
                <TextField
                  size="small"
                  error={emailAddressError}
                  helperText={
                    emailAddressError ? "Email Address field is required" : ""
                  }
                  label="Email Address"
                  fullWidth
                  variant="outlined"
                  required
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleFormChange}
                  onBlur={handleFormChange}
                />
              </FormControl>
            </div>
          </div>
          {/* Form Card */}
          <div className="flex-[1] min-h-0 bg-white rounded-2xl h-auto shadow-xl">
            {/* header */}
            <div className=" font-medium flex items-center justify-between md:px-5 px-3 py-3 border-b border-gray-100">
              <span>General Information</span>
            </div>
            {/* body */}
            <div className="flex flex-col p-3 md:py-5 py-5 p-8">
              <FormControl fullWidth sx={{ gap: "16px" }}>
                <TextField
                  size="small"
                  error={businessNameError}
                  helperText={
                    businessNameError ? "Business Name field is required" : ""
                  }
                  label="Business Name"
                  fullWidth
                  variant="outlined"
                  required
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleFormChange}
                  onBlur={handleFormChange}
                />
                <TextField
                  size="small"
                  error={streetError}
                  helperText={
                    streetError ? "Street Address field is required" : ""
                  }
                  label="Street Address"
                  fullWidth
                  variant="outlined"
                  required
                  name="street"
                  value={formData.street}
                  onChange={handleFormChange}
                  onBlur={handleFormChange}
                />
                <TextField
                  size="small"
                  error={cityError}
                  helperText={cityError ? "City field is required" : ""}
                  label="City"
                  fullWidth
                  variant="outlined"
                  required
                  name="city"
                  value={formData.city}
                  onChange={handleFormChange}
                  onBlur={handleFormChange}
                />
                <TextField
                  size="small"
                  error={regionError}
                  helperText={
                    regionError ? "State / Prov / Region field is required" : ""
                  }
                  label="State / Prov / Region"
                  fullWidth
                  variant="outlined"
                  required
                  name="region"
                  value={formData.region}
                  onChange={handleFormChange}
                  onBlur={handleFormChange}
                />
                <TextField
                  size="small"
                  error={countryError}
                  helperText={countryError ? "Country field is required" : ""}
                  label="Country"
                  fullWidth
                  variant="outlined"
                  required
                  name="country"
                  select
                  value={formData.country}
                  onChange={handleFormChange}
                  onBlur={handleFormChange}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.code} value={country.name}>
                      {country.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  size="small"
                  error={postalCodeError}
                  helperText={
                    postalCodeError ? "Postal Code field is required" : ""
                  }
                  label="Postal Code"
                  fullWidth
                  variant="outlined"
                  required
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleFormChange}
                  onBlur={handleFormChange}
                />
                <TextField
                  size="small"
                  error={phoneNumberError}
                  helperText={
                    phoneNumberError ? "Phone Number field is required" : ""
                  }
                  label="Phone Number"
                  fullWidth
                  variant="outlined"
                  required
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleFormChange}
                  onBlur={handleFormChange}
                />
                <TextField
                  size="small"
                  error={timezoneError}
                  helperText={timezoneError ? "Timezone field is required" : ""}
                  label="Timezone"
                  fullWidth
                  variant="outlined"
                  required
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleFormChange}
                  onBlur={handleFormChange}
                />
                <TextField
                  size="small"
                  label="Website"
                  fullWidth
                  variant="outlined"
                  name="website"
                  value={formData.website}
                  onChange={handleFormChange}
                  onBlur={handleFormChange}
                />
                <Button
                  variant="contained"
                  onClick={handleFormSubmit}
                  sx={{
                    marginTop: "8px",
                    width: "200px",
                    gap: "4px",
                  }}
                >
                  {isLoading ? (
                    <CircularProgress size={25} />
                  ) : (
                    <BsCheck2 className="w-4 h-4" />
                  )}{" "}
                  {!isLoading && "Save"}{" "}
                </Button>
              </FormControl>
            </div>
          </div>
          <Container sx={{ margin: "64px" }}></Container>
        </div>
      </div>
    </div>
  );
};

export default AddLocation;
