//react
import { useRef, useEffect } from 'react'
//context
import { useAppContext } from '../../context/AppContextProvider'
//components
import CloseModalButton from './CloseModalButton'


const Modal: React.FC = () => {
    const { isModalOpen, modalContent } = useAppContext()
    const modalRef = useRef<HTMLDialogElement | null>(null)
  
    useEffect(() => {
      const modalElement = modalRef.current
      if (modalElement) {
        if (isModalOpen) {
          modalElement.showModal()
        } else {
          modalElement.close()
        }
      }
    }, [isModalOpen])
  
    return (
      <dialog 
        ref={modalRef} 
        className="
            w-1/2 h-1/2
            bg-bg-color text-main-color p-4 text-center
            border-solid border border-main-color rounded-xl
        "
      >
        <div className='h-full flex flex-col justify-between'>
            {modalContent}
            <CloseModalButton />
        </div>
      </dialog>
    )
  }
  
  export default Modal
  