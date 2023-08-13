"use client"

import React from 'react';

const Checkbox = ({ type = 'checkbox', name, checked = false, onChange, feature }) => (
  <>
    <input type={type} name={name} checked={checked} onChange={onChange} />
    <label>
      {feature.feature}
    </label>
  </>
);

export default Checkbox;