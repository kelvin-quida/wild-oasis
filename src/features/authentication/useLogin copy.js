import { useMutation, useQueryClient} from "@tanstack/react-query";
import { loginGoogle } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLoginGoogle(){
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const {mutate:login, isLoading: isLoging} = useMutation({
        mutationFn: loginGoogle,
        onSuccess:(user)=>{ 
            queryClient.setQueryData(['user'],user.user)
            navigate('/dashboard')
        },
        onError:(err) => toast.error(err.message)
    })

    return {login,isLoging}
}