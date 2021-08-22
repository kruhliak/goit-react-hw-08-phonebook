import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('contacts/changeFilter');

const contactsActions = {
  changeFilter,
};
export default contactsActions;
