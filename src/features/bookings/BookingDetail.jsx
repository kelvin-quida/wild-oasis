import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import {useBooking} from "./useBooking";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { HiArrowUpOnSquare } from "react-icons/hi2";
import useCheckout from "../check-in-out/useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const {booking, isLoading} = useBooking()
  const {checkout,isCheckingOut} = useCheckout()
  const {deleteBooking,isDeleting} = useDeleteBooking()

  const moveBack = useMoveBack();
  const navigate = useNavigate()

  if(isLoading) return <Spinner />
  console.log(booking)
  const {status,id: bookingId, cabins:{name:cabinName}} = booking


  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{cabinName}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
      {status === 'unconfirmed' && 
      (
        <>
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check In
          </Button>

          <Button 
            onClick={() => deleteBooking(bookingId)}
            disabled={isDeleting}
          >
            Delete
          </Button>
        </>
      )}

      {status === 'checked-in' && 
      (
        <Button 
          icon={<HiArrowUpOnSquare/>}
          onClick={() => checkout(bookingId)}
          disabled={isCheckingOut}
        >
          Check Out
        </Button>
      )}

      <Button variation="secondary" onClick={moveBack}>
          Back
      </Button>

      </ButtonGroup>

       

    </>
  );
}

export default BookingDetail;
