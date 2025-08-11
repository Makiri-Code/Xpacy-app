import {
  Select,
  SelectOptionContainer,
  SearchButton,
  SearchIcon,
  MobileOptionContainer,
  MobileSearchContainer,
  MobileSearchForm,
  BannerContent,
  FilterHeading,
  BannerSubHeading,
  SearchContainer,
  FormContainer,
  BannerContainer,
  HeadingsContainer,
} from "./filter.styles";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Filter = ({ isMobile, formFields, onSetFormFields }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { purpose, location, type, minBedrooms, minPrice, maxPrice } =
    formFields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    onSetFormFields((prev) => ({ ...prev, [name]: value }));
  };
  // useEffect(() => {
  //   setSearchParams({ ...formFields });
  //   // localStorage.setItem("form-fields", JSON.stringify(formFields));
  // }, [formFields]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!purpose) return;
    navigate(
      `search?purpose=${purpose}&type=${type}&location=${location}&minBedRooms=${
        minBedrooms ? minBedrooms : ""
      }&minPrice=${minPrice ? minPrice : ""}&maxPrice=${
        maxPrice ? maxPrice : ""
      }`
    );
  };

  return (
    <>
      {isMobile ? (
        <MobileSearchContainer>
          <MobileSearchForm onSubmit={handleSubmit}>
            <MobileOptionContainer>
              {/* Purpose */}
              <Select name="purpose" value={purpose} onChange={handleChange}>
                <option>Purpose</option>
                <option value={"buy"}>Buy</option>
                <option value={"rent"}>Rent</option>
                <option value={"shortlet"}>Shortlet</option>
              </Select>
              {/* Location */}
              <Select name="location" value={location} onChange={handleChange}>
                <option>Location</option>
                <option value={"Abuja"}>Abuja</option>
                <option value={"Aba"}>Aba</option>
                <option value={"Benin"}>Benin</option>
                <option value={"Calabar"}>Calabar</option>
                <option value={"Enugu"}>Enugu</option>
                <option value={"Ibadan"}>Ibadan</option>
                <option value={"Ilorin"}>Ilorin</option>
                <option value={"Lagos"}>Lagos</option>
                <option value={"Minna"}>Minna</option>
                <option value={"Port Harcourt"}>Port Harcourt</option>
                <option value={"Uyo"}>Uyo</option>
                <option value={"Warri"}>Warri</option>
              </Select>
              {/* Property Type */}
              <Select name="type" value={type} onChange={handleChange}>
                <option>Type</option>
                <option value={"All types"}>All types</option>
                <option value={"Commercial"}>Commercial</option>
                <option value={"Residential"}>Residential</option>
                <option value={"Terrace"}>Terrace</option>
                <option value={"Flat/Apartment"}>Flat/Apartment</option>
                <option value={"Duplex"}>Duplex</option>
                <option value={"Semi-detached"}>Semi-detached</option>
                <option value={"Fully-detached"}>Fully-detached</option>
                <option value={"Villa"}>Villa</option>
              </Select>
              {/* Bedroom */}
              <Select
                name="minBedrooms"
                value={minBedrooms}
                onChange={handleChange}
                required
              >
                <option>Bedroom</option>
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
                <option value={"5"}>5</option>
                <option value={"6"}>6</option>
              </Select>
              {/* Minimum Price */}
              <Select name="minPrice" value={minPrice} onChange={handleChange}>
                <option>Min Price</option>
                <option value={100000}>{"N100k"}</option>
                <option value={200000}>{"N200k"}</option>
                <option value={500000}>{"N500k"}</option>
                <option value={1000000}>{"N1m"}</option>
                <option value={2000000}>{"N2m"}</option>
                <option value={3000000}>{"N3m"}</option>
                <option value={4000000}>{"N4m"}</option>
                <option value={5000000}>{"N5m"}</option>
                <option value={6000000}>{"N6m"}</option>
                <option value={7000000}>{"N7m"}</option>
                <option value={8000000}>{"N8m"}</option>
                <option value={9000000}>{"N9m"}</option>
                <option value={10000000}>{"N10m"}</option>
                <option value={20000000}>{"N20m"}</option>
                <option value={30000000}>{"N30m"}</option>
                <option value={40000000}>{"N40m"}</option>
                <option value={50000000}>{"N50m"}</option>
                <option value={100000000}>{"N100m"}</option>
              </Select>
              {/* Maximum Price */}
              <Select
                name="maxPrice"
                value={maxPrice}
                onChange={handleChange}
                required
              >
                <option>Max Price</option>
                <option value={500000}>{"N500k"}</option>
                <option value={1000000}>{"N1m"}</option>
                <option value={2000000}>{"N2m"}</option>
                <option value={3000000}>{"N3m"}</option>
                <option value={4000000}>{"N4m"}</option>
                <option value={5000000}>{"N5m"}</option>
                <option value={6000000}>{"N6m"}</option>
                <option value={7000000}>{"N7m"}</option>
                <option value={8000000}>{"N8m"}</option>
                <option value={9000000}>{"N9m"}</option>
                <option value={10000000}>{"N10m"}</option>
                <option value={20000000}>{"N20m"}</option>
                <option value={30000000}>{"N30m"}</option>
                <option value={40000000}>{"N40m"}</option>
                <option value={50000000}>{"N50m"}</option>
                <option value={100000000}>{"N100m"}</option>
                <option value={200000000}>{"200m"}</option>
              </Select>
            </MobileOptionContainer>
            <SearchButton buttonType={{ primaryBtn: true }}>
              <SearchIcon /> Search
            </SearchButton>
          </MobileSearchForm>
        </MobileSearchContainer>
      ) : (
        <BannerContainer>
          <BannerContent>
            <FilterHeading>
              <HeadingsContainer
                data-aos="fade-down"
                data-aos-anchor-placement="top-bottom"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <BannerSubHeading>
                  Search, buy, or rent properties across Nigeria
                </BannerSubHeading>
              </HeadingsContainer>
              <SearchContainer
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <FormContainer onSubmit={handleSubmit}>
                  <SelectOptionContainer>
                    {/* Purpose */}
                    <Select
                      name="purpose"
                      value={purpose}
                      onChange={handleChange}
                      required
                    >
                      <option>Purpose</option>
                      <option value={"buy"}>Buy</option>
                      <option value={"rent"}>Rent</option>
                      <option value={"shortlet"}>Shortlet</option>
                    </Select>
                    {/* Location */}
                    <Select
                      name="location"
                      value={location}
                      onChange={handleChange}
                      required
                    >
                      <option>Location</option>
                      <option value={"Abuja"}>Abuja</option>
                      <option value={"Aba"}>Aba</option>
                      <option value={"Benin"}>Benin</option>
                      <option value={"Calabar"}>Calabar</option>
                      <option value={"Enugu"}>Enugu</option>
                      <option value={"Ibadan"}>Ibadan</option>
                      <option value={"Ilorin"}>Ilorin</option>
                      <option value={"Lagos"}>Lagos</option>
                      <option value={"Minna"}>Minna</option>
                      <option value={"Port Harcourt"}>Port Harcourt</option>
                      <option value={"Uyo"}>Uyo</option>
                      <option value={"Warri"}>Warri</option>
                    </Select>
                    {/* Property Type */}
                    <Select
                      name="type"
                      value={type}
                      onChange={handleChange}
                      required
                    >
                      <option>Type</option>
                      <option value={"All types"}>All types</option>
                      <option value={"Commercial"}>Commercial</option>
                      <option value={"Residential"}>Residential</option>
                      <option value={"Terrace"}>Terrace</option>
                      <option value={"Flat/Apartment"}>Flat/Apartment</option>
                      <option value={"Duplex"}>Duplex</option>
                      <option value={"Semi-detached"}>Semi-detached</option>
                      <option value={"Fully-detached"}>Fully-detached</option>
                      <option value={"Villa"}>Villa</option>
                    </Select>
                    {/* Bedroom */}
                    <Select
                      name="minBedrooms"
                      value={minBedrooms}
                      onChange={handleChange}
                      required
                    >
                      <option>Bedroom</option>
                      <option value={"1"}>1</option>
                      <option value={"2"}>2</option>
                      <option value={"3"}>3</option>
                      <option value={"4"}>4</option>
                      <option value={"5"}>5</option>
                      <option value={"6"}>6</option>
                    </Select>
                    {/* Minimum Price */}
                    <Select
                      name="minPrice"
                      value={minPrice}
                      onChange={handleChange}
                      required
                    >
                      <option>Min Price</option>
                      <option value={100000}>{"N100k"}</option>
                      <option value={200000}>{"N200k"}</option>
                      <option value={500000}>{"N500k"}</option>
                      <option value={1000000}>{"N1m"}</option>
                      <option value={2000000}>{"N2m"}</option>
                      <option value={3000000}>{"N3m"}</option>
                      <option value={4000000}>{"N4m"}</option>
                      <option value={5000000}>{"N5m"}</option>
                      <option value={6000000}>{"N6m"}</option>
                      <option value={7000000}>{"N7m"}</option>
                      <option value={8000000}>{"N8m"}</option>
                      <option value={9000000}>{"N9m"}</option>
                      <option value={10000000}>{"N10m"}</option>
                      <option value={20000000}>{"N20m"}</option>
                      <option value={30000000}>{"N30m"}</option>
                      <option value={40000000}>{"N40m"}</option>
                      <option value={50000000}>{"N50m"}</option>
                      <option value={100000000}>{"N100m"}</option>
                    </Select>
                    {/* Maximum Price */}
                    <Select
                      name="maxPrice"
                      value={maxPrice}
                      onChange={handleChange}
                      required
                    >
                      <option>Max Price</option>
                      <option value={500000}>{"N500k"}</option>
                      <option value={1000000}>{"N1m"}</option>
                      <option value={2000000}>{"N2m"}</option>
                      <option value={3000000}>{"N3m"}</option>
                      <option value={4000000}>{"N4m"}</option>
                      <option value={5000000}>{"N5m"}</option>
                      <option value={6000000}>{"N6m"}</option>
                      <option value={7000000}>{"N7m"}</option>
                      <option value={8000000}>{"N8m"}</option>
                      <option value={9000000}>{"N9m"}</option>
                      <option value={10000000}>{"N10m"}</option>
                      <option value={20000000}>{"N20m"}</option>
                      <option value={30000000}>{"N30m"}</option>
                      <option value={40000000}>{"N40m"}</option>
                      <option value={50000000}>{"N50m"}</option>
                      <option value={100000000}>{"N100m"}</option>
                      <option value={200000000}>{"200m"}</option>
                    </Select>
                  </SelectOptionContainer>
                  <SearchButton buttonType={{ primaryBtn: true }}>
                    <SearchIcon /> Search
                  </SearchButton>
                </FormContainer>
              </SearchContainer>
            </FilterHeading>
          </BannerContent>
        </BannerContainer>
      )}
    </>
  );
};

export default Filter;
