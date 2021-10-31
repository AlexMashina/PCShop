import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingItem() {
  return (
    <ContentLoader
      className="catalog-cartItem_loading"
      speed={2}
      width={252}
      height={417}
      viewBox="0 0 252 417"
      backgroundColor="rgba(223, 119, 119, 1)"
      foregroundColor="#d3abab"
    >
      <rect x="0" y="0" rx="10" ry="10" width="252" height="417" />
    </ContentLoader>
  )
}

export default LoadingItem
