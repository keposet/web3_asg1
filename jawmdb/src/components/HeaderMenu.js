import React from 'react'; 
import Modal from 'react-modal'
import About from './About'

class HeaderMenu extends React.Component {   
    constructor(props) {
        super(props);
        this.state ={
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true})
    }

    afterOpenModal(){
        //Funtion needed for modal to compile
    }

    closeModal(){
        this.setState( { modalIsOpen: false});
    }

    render() {
        return (       
            <nav className="header-menu">           
                <button onClick={this.openModal}>About</button>   

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    ariaHideApp={false}
                    className='modal-dialog'
                    contentLabel="Example Modal"
                >
                    <h2 >Web Assignment 1</h2>
                    <About />
                    <button onClick={this.closeModal}>close</button>
                    
                </Modal>
            </nav>          
        ); 
    }
} 
export default HeaderMenu;