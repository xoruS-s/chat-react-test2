import React from "react";
import PropTypes from 'prop-types';
import formatDistance from 'date-fns/formatDistance';
import ruLocale from 'date-fns/locale/ru';

const Time = ({date}) => (
    formatDistance(new Date(date), new Date(), {addSuffix: true, locale: ruLocale})
);

Time.PropTypes = {
  date: PropTypes.string
};

export default Time;