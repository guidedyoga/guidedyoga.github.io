import React from 'react';
import PropTypes from 'prop-types';

const Chakra = ({ chakra }) => {
  return (
    <>
      <input type="text" value={chakra} />
    </>
  );
}

Chakra.propTypes = {
  chakra: PropTypes.string.isRequired
}

export default Chakra;
