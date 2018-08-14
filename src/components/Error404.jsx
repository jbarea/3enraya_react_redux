import React from 'react';
import { Link } from 'react-router-dom';

const errorNoEncontrado = () => (
    <div>
        Error 404
        <Link to="/">
        Home
        </Link>
    </div>
);

export default errorNoEncontrado;
