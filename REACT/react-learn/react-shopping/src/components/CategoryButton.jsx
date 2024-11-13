import React from 'react'

/**
 * A button representing a product category.
 *
 * @returns {React.ReactElement} The component.
 */
const CategoryButton = ({categoryName,current}) => {
  return (
    <button  className={`  ${current && "bg-black text-white" } border  text-nowrap border-black px-4 py-2 me-2`}>
   {categoryName}
  </button>
  )
}

export default CategoryButton
