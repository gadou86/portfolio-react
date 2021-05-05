import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './style.css'

const customStyles = {
  content : {
    top                   : '60%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : "100",
    height                : "900px",
    zIndex                : 500,
    backgroundColor       : '#f4f4f4',
    transition: '5ms'
  }
};

const buttonStyles = {
    color: '#313131',
    fontSize: "24",
    fontWeight: "bold",
};

const bottom = {
  textAlign: "center",
};


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

function AppM(){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#313131';
    subtitle.style.fontSize = '39px';
  }

  function closeModal(){
    setIsOpen(false);
  }

    return (
      <div style={bottom}>
        {/* <button style={buttonStyles} onClick={openModal}>Case Study</button> */}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 style={buttonStyles} ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    );
}

export default AppM;