import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "./CabinTable";


export default function AddCabin(){
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens="table">
        <Button>Show Table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  )
}

// export default function AddCabin() {
//     const [isOpenModal,setIsOpenModal] = useState()
//   return (
//     <div>
        
//         <Button onClick={() => setIsOpenModal((show) => !show)}>
//           Add new cabin
//         </Button>
//         {isOpenModal && 
//         <Modal onClose={() => setIsOpenModal(false)}>
//             <CreateCabinForm onClose={() => setIsOpenModal(false)} />
//         </Modal>
//         }
//     </div>
//   )
// }
