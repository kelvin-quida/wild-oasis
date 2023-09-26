export default useCabin(){
    
    const {isLoading,data:cabins,error} = useQuery({
        queryKey:['cabins'],
        queryFn:getCabins,
      })
}
