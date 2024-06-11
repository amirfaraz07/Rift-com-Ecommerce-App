import React from 'react'
import Row from '../common/Row'
import { Link } from 'react-router-dom'

const HeaderButton = ({title, Icon, url=''}) => {
    // rather then using again n again props. we can destructure it 
    // const {title, Icon} = props // one more way to destructue it is that you call them in function parameters
  return (
    <Link to={url}>
    <Row className="mx-[5px]">
        {/* now no need to enter props. in icon or title */}
      <Icon/> 
      <p className="text-[#1e2832] text-[18px] hover:text-slate-400 ml-[2px]">{title}</p>
    </Row>
    </Link>
  )
}

export default HeaderButton