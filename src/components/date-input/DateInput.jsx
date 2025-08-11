import styled from "styled-components";
import { MdEditCalendar } from "react-icons/md";
const SelectOption = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 8px;
  .custom-select {
    position: relative;
    height: 48px;
    width: 100%;
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid var(--Primary-Primary200, #c7d9e5);
    background: var(--Background-Color, #fcfeff);
    color: var(--Neutrals-Neutrals900, #585858);
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      position: absolute;
      top: 10px;
      right: 13px;
      width: 7%;
      height: auto;
      opacity: 0;
      box-sizing: border-box;
    }
  }
`;
const Label = styled.label`
  color: var(--Neutrals-Neutrals900, #585858);
  font-family: "Unitext Regular";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 1.5rem */
  letter-spacing: 0.01rem;
`;
const DropdownIconContainer = styled.div`
  position: relative;
  cursor: pointer;
  .calender {
    top: 0;
    right: 0;
    position: absolute;
  }
`;
function DateInput({ label, selectedDate, onSelectDate }) {
  return (
    <SelectOption>
      <Label htmlFor="service-visit">{label}</Label>
      <div className="custom-select">
        <span>{selectedDate ? selectedDate : "Choose a date"}</span>
        <DropdownIconContainer>
          <MdEditCalendar
            className=".calender"
            style={{ width: "28px", height: "28px" }}
            title="show date picker"
          />
        </DropdownIconContainer>
        <input
          required
          type="date"
          value={selectedDate}
          id=""
          onChange={(e) => {
            onSelectDate(e.target.value);
          }}
        />
      </div>
    </SelectOption>
  );
}

export default DateInput;
