import ButtonIcon from "../../ui/ButtonIcon";
import {HiArrowRightOnRectangle} from 'react-icons/hi2'
import useLogout from "./useLogout";

export default function Logout(){
    const {logout,isLoading} = useLogout()

    function handleClick(){
        logout()
    }

    return(
        <ButtonIcon disabled={isLoading} onClick={handleClick} >
            <HiArrowRightOnRectangle />
        </ButtonIcon>
    )
}