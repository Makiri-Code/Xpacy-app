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

const Filter = ({isMobile}) => {

    const handleSearch = (e) => {
        e.preventDefault();
      } 
      
    return (
        <>
            {
                isMobile ?
                (
                    <MobileSearchContainer
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                        >
                        
                        <MobileSearchForm>
                            <MobileOptionContainer>
                                <Select>
                                    <option>Purpose</option>
                                    <option value={"buy"}>Buy</option>
                                    <option value={"rent"}>Rent</option>
                                </Select>
                                <Select>
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
                                <Select>
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
                                <Select>
                                    <option>Bedroom</option>
                                    <option value={"1"}>1</option>
                                    <option value={"2"}>2</option>
                                    <option value={"3"}>3</option>
                                    <option value={"4"}>4</option>
                                    <option value={"5"}>5</option>
                                    <option value={"6"}>6</option>
                                </Select>
                                <Select>
                                    <option>Min Price</option>
                                    <option value={""}>{"<N5m"}</option>
                                    <option value={""}>{"<N5m"}</option>
                                    <option value={""}>{"<N10m"}</option>
                                    <option value={""}>{"<100m"}</option>
                                    <option value={""}>{"<N200m"}</option>
                                    <option value={""}>{">N200m"}</option>
                                </Select>
                                <Select>
                                    <option>Max Price</option>
                                    <option value={""}>{"<N5m"}</option>
                                    <option value={""}>{"<N5m"}</option>
                                    <option value={""}>{"<N10m"}</option>
                                    <option value={""}>{"<100m"}</option>
                                    <option value={""}>{"<N200m"}</option>
                                    <option value={""}>{">N200m"}</option>
                                </Select>
                            </MobileOptionContainer>
                            <SearchButton buttonType={{ primaryBtn: true }} onClick={handleSearch}>
                            <SearchIcon /> Search
                            </SearchButton>
                        </MobileSearchForm>
                    </MobileSearchContainer>
                ) :
                (
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
                                    <FormContainer>
                                    <SelectOptionContainer>
                                        {/* Purpose */}
                                        <Select>
                                            <option>Purpose</option>
                                            <option value={"buy"}>Buy</option>
                                            <option value={"rent"}>Rent</option>
                                        </Select>
                                        {/* Location */}
                                        <Select>
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
                                        <Select>
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
                                        <Select>
                                            <option>Bedroom</option>
                                            <option value={"1"}>1</option>
                                            <option value={"2"}>2</option>
                                            <option value={"3"}>3</option>
                                            <option value={"4"}>4</option>
                                            <option value={"5"}>5</option>
                                            <option value={"6"}>6</option>
                                        </Select>
                                        {/* Minimum Price */}
                                        <Select>
                                            <option>Min Price</option>
                                            <option value={""}>{"<N5m"}</option>
                                            <option value={""}>{"<N5m"}</option>
                                            <option value={""}>{"<N10m"}</option>
                                            <option value={""}>{"<100m"}</option>
                                            <option value={""}>{"<N200m"}</option>
                                            <option value={""}>{">N200m"}</option>
                                        </Select>
                                        {/* Maximum Price */}
                                        <Select>
                                            <option>Max Price</option>
                                            <option value={""}>{"<N5m"}</option>
                                            <option value={""}>{"<N5m"}</option>
                                            <option value={""}>{"<N10m"}</option>
                                            <option value={""}>{"<100m"}</option>
                                            <option value={""}>{"<N200m"}</option>
                                            <option value={""}>{">N200m"}</option>
                                        </Select>
                                    </SelectOptionContainer>
                                    <SearchButton buttonType={{ primaryBtn: true }} onClick={handleSearch}>
                                        <SearchIcon /> Search
                                    </SearchButton>
                                    </FormContainer>
                                </SearchContainer>
                            </FilterHeading>
                        </BannerContent>
                    </BannerContainer>
                )
            }        
        </>
    )
}

export default Filter;