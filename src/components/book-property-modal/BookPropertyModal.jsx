import { useState, useContext } from "react";
import { ClipLoader } from "react-spinners";

import isTokenExpired from "../../utils/token/handleUserToken";
import ModalComponent from "../modal/modal";
import Button from "../button/button";
import DateInput from "../date-input/DateInput";
import styles from "./BookPropertyModal.module.css";
import { UserContext } from "../../contexts/userContext";
import fetchServer from "../../utils/serverutils/fetchServer";
import { toast } from "sonner";
import CustomToast from "../custom-toast/CustomToast";
function BookPropertyModal({ onShowLogInModal, property_id }) {
  const { userToken } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const handleCancelBooking = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  const handleSubmitBooking = async (e) => {
    e.preventDefault();
    const formattedStartDate = startDate
      .slice("")
      .split("-")
      .reverse()
      .join("-");
    const formattedEndDate = endDate.slice("").split("-").reverse().join("-");
    try {
      setShowLoader(true);
      const response = await fetchServer(
        "POST",
        {
          property_id,
          start_date: formattedStartDate,
          end_date: formattedEndDate,
        },
        userToken,
        "user/create-booking",
        "https://app.xpacy.com"
      );
      toast.custom(() => (
        <CustomToast
          title={response.success ? "Great!" : "Oops!"}
          message={response.message}
          type={response.success ? "success" : "error"}
        />
      ));
    } catch (error) {
      console.error("Error submiting booking", error);
      toast.custom(() => (
        <CustomToast
          title={"Response"}
          message={error.message}
          type={"error"}
        />
      ));
    } finally {
      setShowLoader(false);
      setShowModal(false);
    }
  };

  return (
    <>
      <Button
        buttonType={{ primaryBtn: true }}
        onClick={() => {
          if (isTokenExpired(userToken)) {
            onShowLogInModal(true);
          } else {
            setShowModal(true);
          }
        }}
      >
        Book This Property
      </Button>
      {showModal && (
        <ModalComponent onClick={() => setShowModal(false)}>
          <div className={styles.modalContainer}>
            <form>
              <p>Please select your booking date</p>
              <DateInput
                label={"Start Date"}
                selectedDate={startDate}
                onSelectDate={setStartDate}
              />
              <DateInput
                label={"End Date"}
                selectedDate={endDate}
                onSelectDate={setEndDate}
              />
              <div className={styles.btnContainer}>
                <Button
                  buttonType={{ primaryBtn: false }}
                  buttonHeight={"28px"}
                  background={"#FBC0BC"}
                  buttonPadding={"18px 55px"}
                  onClick={handleSubmitBooking}
                >
                  {showLoader ? <ClipLoader size={18} color="#fff" /> : "Book"}
                </Button>
                <Button
                  buttonType={{ primaryBtn: true }}
                  buttonHeight={"28px"}
                  buttonPadding={"18px 55px"}
                  onClick={handleCancelBooking}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </ModalComponent>
      )}
    </>
  );
}

export default BookPropertyModal;
