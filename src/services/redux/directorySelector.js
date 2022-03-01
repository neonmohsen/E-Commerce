import { createSelector } from 'reselect';

export const selectDirectory = createSelector(
    (state) => state.directory,
    (directory) => directory
)