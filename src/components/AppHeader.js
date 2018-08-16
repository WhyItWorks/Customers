
import React from 'react'
import PropTypes from 'prop-types'

const AppHeader = props => {
  return (
    <div>
      <div className='app-header'>
        <h1>
          {Props.Title}
        </h1>
      </div>
    </div>
  )
}

AppHeader.propTypes = {
  tittle: PropTypes.string.isRequired
}

export default AppHeader
