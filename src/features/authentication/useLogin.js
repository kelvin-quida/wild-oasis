import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogin(){
    const navigate = useNavigate()

    const {mutate:login, isLoading: isLoging} = useMutation({
        mutationFn: ({email,password}) => loginApi({email,password}),
        onSuccess:(user)=>{ 
            navigate('/dashboard')
        },
        onError:(err) => toast.error(err.message)
    })

    return {login,isLoging}
}