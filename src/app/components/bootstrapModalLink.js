import React from 'react';
import Portal from 'react-portal';

import BootstrapModal from 'components/bootstrapModal';

export default React.createClass({

    render() {
        let Modal = this.props.modal;

        return (
            <Portal
                openByClickOn={this.props.elementToClick}
                closeOnEsc={false}
                closeOnOutsideClick={false}
                >
                <BootstrapModal
                    largeModal={true}
                    title="Select Oils to add to your recipe"
                    registerCloseFunction={this.registerCloseFunction}
                    >
                    <Modal
                        closeModal={this.closeModal}
                        />
                </BootstrapModal>
            </Portal>
        );
    },

    registerCloseFunction( closeModalFunc ) {
        this.closeModalFunc = closeModalFunc;
    },

    closeModal() {
        this.closeModalFunc();
    }

});


