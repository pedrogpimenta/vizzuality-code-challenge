import ReactModal from 'react-modal'

ReactModal.setAppElement('#root')

function Modal(props) {
  return (
    <ReactModal
      isOpen={props.isOpen}
      onRequestClose={() => props.onChangeInfo(null)}
      className='w-full max-h-full overflow-auto lg:w-1/2 bg-white p-2 md:p-6 outline-none'
      overlayClassName='fixed top-0 p-2 w-full h-screen flex items-center justify-center bg-black bg-opacity-60'
    >
      <div dangerouslySetInnerHTML={{__html: props.content}} />
    </ReactModal>
  )
}

export default Modal
