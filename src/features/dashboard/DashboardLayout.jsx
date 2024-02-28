import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import useRecentStays from "./useRecentStays";
import Stats from "./Stats";
import useCabins from "../cabins/useCabins";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;


export default function DashboardLayout(){
  const {bookings,isLoading:loadingRecentBooks} = useRecentBookings()
  const {stays, confirmedStays,isLoading:loadingRecentStays, numDays} = useRecentStays()
  const {cabins,isLoading:loadingCabins} = useCabins()

  if(loadingRecentBooks || loadingRecentStays || loadingCabins) return <Spinner/>

  console.log(bookings)

  return(
    <StyledDashboardLayout>
    <Stats 
      bookings={bookings} 
      confirmedStays={confirmedStays} 
      numDays={numDays} 
      cabinCount={cabins.length} 
    />
      <div> Statistics</div>
      <div>Todays activity</div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  )
}