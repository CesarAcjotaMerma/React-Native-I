import React from "react";
import { Text } from 'react-native';
import PropTypes from 'prop-types';

export default function Saludar(props) {
    const { fistname, lastname } = props;

    return (
        <Text>
            Hola {fistname} {lastname}
        </Text>
    );
}

// Saludar.defaulProps = {
//     fistname: "Cesar",
//     lastname: "Acjota Merma",
// };

Saludar.propTypes = {
    fistname: PropTypes.string,
    lastname: PropTypes.string
}
