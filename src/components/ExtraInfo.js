import React from 'react'

function ExtraInfo(props) {
    
  return (
    <div className="two-sided-section">
              <p>
                <i className={props.icon}></i>
              </p>
              <p className="extra-info-leftside">
                {props.type} <br />
                {props.Type}
              </p>
            </div>
  )
}

export default ExtraInfo
