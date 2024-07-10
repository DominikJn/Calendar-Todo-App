import React from 'react'
import { Link } from 'react-router-dom'



interface HyperLinkProps {
    linkPath: string,
    innerText: string,
}

const HyperLink: React.FC<HyperLinkProps> = ({ linkPath, innerText }) => {
  return (
    <Link to={linkPath}>
        <p className="no-underline text-black hover:underline">
            {innerText}
        </p>
    </Link>
  )
}

export default HyperLink