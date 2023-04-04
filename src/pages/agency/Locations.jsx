import React, { useEffect, useState } from "react";
import LocationCard from "../../components/agency/locations/LocationCard";
import LocationHeader from "../../components/agency/locations/LocationHeader";
import PageLoader from "../../components/common/pageLoader/PageLoader";
import SearchField from "../../components/common/search/SearchField";
import { useLocationsQuery } from "../../services/agencyAPIs/locationRequests";

const locations = [
  "MedCarePlus",
  "DentistHome",
  "Cafeoj",
  "Test Business",
  "Lynk-Pros",
];

const Locations = () => {
  console.log("Render");
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);

  const { data, isLoading, _ } = useLocationsQuery();
  console.log("Data: ", data);

  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="bg-light-indigo min-h-[100vh] max-h-[100vh] overflow-y-scroll pr-0 mr-0">
      <LocationHeader />

      <div className="flex flex-wrap items-center justify-end pt-5  md:gap-3 gap-2 px-3 md:px-4">
        <SearchField
          width="w-[300px]"
          customStyle="border border-gray-200 focus:border focus:border-primary-300"
          placeholder="Search by location"
          handleSearch={handleSearch}
        />
      </div>
      <div className="px-3 md:px-4 mt-3 flex flex-col gap-5 pb-14">
        {isLoading ? (
          <PageLoader />
        ) : (
          filteredLocations.map((subAcc) => (
            <LocationCard key={subAcc} data={subAcc} />
          ))
        )}
        &nbsp; &nbsp;
      </div>
    </div>
  );
};

export default Locations;
