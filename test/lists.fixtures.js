'use strict';

function makeListsArray() {
  return [
    {
      id: 1,
      date_published: '2029-01-22T16:28:32.615Z',
      list_name: 'Road Trip',
      user_id: 1
    },
    {
      id: 2,
      date_published: '2010-01-22T16:28:32.615Z',
      list_name: 'Clothes',
      user_id: 1
    },
    {
      id: 3,
      date_published: '2017-01-22T16:28:32.615Z',
      list_name: 'Car',
      user_id: 2
    },
    {
      id: 4,
      date_published: '1999-03-24T16:28:32.615Z',
      list_name: 'Tools',
      user_id: 2
    },
  ];
}
  
module.exports = {
    makeListsArray,
};