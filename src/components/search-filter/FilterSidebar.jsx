import { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useFetchResult } from "../useFetchResult/useFetchResult";
function FilterSidebar({
  formFields,
  onSetFormFields,
  isMobile,
  setShowMobileSidebar,
}) {
  const navigate = useNavigate();
  const { purpose, location, type, minBedrooms, minPrice, maxPrice } =
    formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    onSetFormFields((prev) => ({ ...prev, [name]: value }));
  };
  // const fetchNextPage = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     onSetSearchedProperties(data);
  //   } catch (error) {
  //     console.log("Error fetching property", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const handleSubmit = () => {
    if (!purpose) return;
    if (isMobile) setShowMobileSidebar(false);
    navigate(
      `/search?purpose=${purpose}&type=${type}&location=${location}&minBedRooms=${
        minBedrooms ? minBedrooms : ""
      }&minPrice=${minPrice ? minPrice : ""}&maxPrice=${
        maxPrice ? maxPrice : ""
      }`
    );
  };
  const handleClearFilter = () => {
    onSetFormFields({
      purpose: "",
      type: "",
      location: "",
      minBedroms: "",
      minPrice: "",
      maxPrice: "",
    });
  };
  return (
    <div className="filter-options d-flex flex-column align-items-start">
      <h1 className="sidebar-header">Filter Options</h1>
      <div className="input d-flex flex-column align-items-center">
        <Form className="d-flex flex-column select-form">
          <Form.Select
            className="select-option"
            value={purpose}
            name="purpose"
            onChange={handleChange}
          >
            <option>Purpose</option>
            <option value={"buy"}>Buy</option>
            <option value={"rent"}>Rent</option>
            <option value={"shortlet"}>Shortlet</option>
          </Form.Select>
          <Form.Select
            className="select-option"
            value={location}
            name="location"
            onChange={handleChange}
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
          </Form.Select>
          <Form.Select
            className="select-option"
            value={type}
            name="type"
            onChange={handleChange}
          >
            <option>Type</option>
            <option>All types</option>
            <option value={"Commercial"}>Commercial</option>
            <option value={"Residential"}>Residential</option>
            <option value={"Terrace"}>Terrace</option>
            <option value={"Flat/Apartment"}>Flat/Apartment</option>
            <option value={"Duplex"}>Duplex</option>
            <option value={"Semi-detached"}>Semi-detached</option>
            <option value={"Fully-detached"}>Fully-detached</option>
            <option value={"Villa"}>Villa</option>
          </Form.Select>
          <Form.Select
            className="select-option"
            value={minBedrooms}
            name="minBedrooms"
            onChange={handleChange}
          >
            <option>Bedroom</option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4"}>4</option>
            <option value={"5"}>5</option>
            <option value={"6"}>6</option>
          </Form.Select>
          <Form.Select
            className="select-option"
            value={minPrice}
            name="minPrice"
            onChange={handleChange}
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
          </Form.Select>
          <Form.Select
            className="select-option"
            value={maxPrice}
            name="maxPrice"
            onChange={handleChange}
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
          </Form.Select>
        </Form>
        <div className="filter-btn-container d-flex flex-column align-items-start">
          <button
            className="filter-btn d-flex justify-content-center align-items-center"
            onClick={handleSubmit}
          >
            Apply Filter
          </button>
          <button
            type="button"
            onClick={handleClearFilter}
            className="filter-btn-white d-flex justify-content-center align-items-center"
          >
            Clear Filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar;
