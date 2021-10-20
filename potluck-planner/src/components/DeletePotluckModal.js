import React from 'react';

function DeletePotluckModal(props) {
    const handleYes = () => {
        props.handleDeleteYes()
    }

    const handleNo = () => {
        props.handleDeleteNo();
    }
    return (
        <div id="deletePotluckModal">
            <div className="modal-dialog">
                <form>
                    <div className="modal-header">
                        <h4 className="modal-title">Delete Potluck</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete this Potluck?</p>
                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                    </div>
                    <div className="modal-footer">
                        <input onClick={handleNo} type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                        <input onClick={handleYes} type="submit" className="btn btn-danger" value="Delete" />
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default DeletePotluckModal
