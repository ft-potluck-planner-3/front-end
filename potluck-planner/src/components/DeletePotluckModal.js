import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { deletePotluckConfirm, deletePotluckCancel } from "../actions";

function DeletePotluckModal(props) {
  const { id } = useParams();
  const { push } = useHistory();

  const handleYes = () => {
    props.deletePotluckConfirm(parseInt(id));
    push("/potlucks");
  };

  const handleNo = () => {
    props.deletePotluckCancel();
  };

  return (
    <div id="deletePotluckModal">
      <div className="modal-dialog">
        <form>
          <div className="modal-header">
            <h4 className="modal-title">Delete Potluck</h4>
            <button
              type="button"
              className="button close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this Potluck?</p>
            <p className="text-warning">
              <small>This action cannot be undone.</small>
            </p>
          </div>
          <div className="modal-footer">
            <input
              onClick={handleNo}
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
              value="Cancel"
            />
            <input
              onClick={handleYes}
              type="submit"
              className="btn btn-danger"
              value="Delete"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default connect(null, { deletePotluckConfirm, deletePotluckCancel })(
  DeletePotluckModal
);
