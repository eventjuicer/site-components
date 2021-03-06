import React from 'react';

const Black = ({id}) => (
  <svg style={{position: "absolute", height:0}}>
  <defs>
    <filter id={id}>
    <feColorMatrix
      type = "matrix"
      values="0.39     0     0     0     0
              0     0.39     0     0     0
              0     0     0.39     0     0
              0     0     0     1     0 "/>
    </filter>
  </defs>
  </svg>
)


Black.defaultProps = {
  id: "svgFilter"
}

export default Black
