import React from "react";
import { Link, useParams } from "react-router-dom";
// import axios from 'axios';
import { connect } from 'react-redux';
import { deletePotluck } from "../actions";
import DeletePotluckModal from "./DeletePotluckModal";

const Potluck = (props) => {
    const {id} = useParams();
    
    const { potlucks, showModal } = props;

    const potluck = potlucks.find(potluck => potluck.id === parseInt(id))


    const handleDelete = () => {
        props.deletePotluck();
    }
    
    // const handleDeleteYes = () => {
    //     deletePotluckConfirm(id);
        // axios.delete(`https://potluckplanner3.herokuapp.com/api/potlucks/${id}`)
        //     .then(resp => {
        //         deletePotluck(id);
        //         setShowModal(false);
        //         push('/potlucks');
        //     })
        //     .catch(err => {
        //         console.log('potluck delete error: ', err);
        //     })
    // }

    // const handleDeleteNo = () => {
    //     setShowModal(false);
    // }
    return <div className="potluck" key={id}>
        <h3>{potluck.potluckName}</h3>
        <p>Date: {potluck.date}</p>
        <p>Time: {potluck.time}</p>
        <p>Location: {potluck.location}</p>
        <p>Food List:</p>
        <ul>{potluck.foods.map((food, index) => <li key={index}>{food} <button>Bring This Food</button></li>)}</ul>
        <p>Guest List:</p>
        <ul>{potluck.guests.map((guest, index) => <li key={index}>{guest} <button>RSVP</button></li>)}</ul>
        <section>
            <Link to={`/potlucks/edit/${potluck.id}`}>Edit Potluck Details</Link>
            <span><input type="button" onClick={handleDelete} value="Delete this Potluck"/></span>
            {
                showModal && <DeletePotluckModal />
            }
        </section>
    </div>;
};

const mapStateToProps = state => {
    return {
        potlucks: state.potlucks,
        showModal: state.showModal
    }
}
export default connect(mapStateToProps, { deletePotluck })(Potluck);
