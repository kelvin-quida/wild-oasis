import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";

export default function CabinTableOperation(){
    return(
        <TableOperations>
            <Filter filterField='discount' options={[
                {value:'All',label:'All'},
                {value:'no-discount'}
                ]} 
            />
        </TableOperations>
    )

}