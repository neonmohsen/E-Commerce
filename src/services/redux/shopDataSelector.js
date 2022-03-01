import { createSelector } from 'reselect';
// import memoize from 'lodash.memoize';

export const selectShopData = createSelector(
    (state) => state.shopData,
    (shopData) => shopData
)
export const selectShopDataCollectionArray = createSelector(
    [selectShopData],
    shopData => Object.keys(shopData).map(key => shopData[key])
)
export const selectShopDataCollection = createSelector(
    [selectShopData, (selectShopData, collectionId) => collectionId],
    (shopData, collectionId) => shopData[collectionId]
)

