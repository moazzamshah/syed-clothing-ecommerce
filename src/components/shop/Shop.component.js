import React, { useState } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollection }) => {
        return <CollectionPreview key={id} {...otherCollection} />;
      })}
    </div>
  );
};

export default ShopPage;
