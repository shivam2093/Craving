import React from 'react';
import Modal from 'react-modal'


class Popup extends React.Component {
    constructor(props) {
        super(props)


    }

    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    <Modal isOpen={this.props.showPopup}>
                        <h1>{this.props.text}</h1>
                        <button onClick={this.props.closePopup}>close me</button>
                    </Modal>

                </div>
            </div>
        );
    }
}

export default Popup;