import React from "react";
import PropTypes from 'prop-types';
import css from './MoviesList.module.css'

const MoviesList = ({ title, children }) => {
    return (
        <div>
            <h2 style={{marginBottom: '10px'}}>{title}</h2>
            <ul className={css.moviesGrid} >{children}</ul>
        </div>
    )
};

MoviesList.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

export default MoviesList;