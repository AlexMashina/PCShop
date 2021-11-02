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
      backgroundColor="rgba(32, 31, 34, 0.2)"
      foregroundColor="rgba(255, 255, 255, 1)"
    >
      <rect x="0" y="0" rx="10" ry="10" width="252" height="417" />
    </ContentLoader>
  )
}

export default LoadingItem
