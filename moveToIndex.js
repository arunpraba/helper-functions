/**
 * @description moveToIndex is a function to move item to specific index
 * @param [array] list
 * @param {array}  list
 * @param {index}  number
 * @param {function} callBack to find removable item index
 *
 * @returns {array} new list
 *  */

export const moveToIndex = ({ list = [], index = 0, callBack }) => {
  const deleteIndex = callBack(list)
  if (deleteIndex === -1) return list
  const deletedItem = list.splice(deleteIndex, 1)
  list.splice(index, 0, ...deletedItem)
  return list
}

export const moveObjectToIndex = ({ list, id, index = 0 }) =>
  moveToIndex({
    list,
    index,
    callBack: arr => arr.findIndex(item => item.id === id),
  })

export const moveItemToIndex = ({ list, item, index = 0 }) =>
  moveToIndex({
    list,
    index,
    callBack: arr => arr.findIndex(value => value === item),
  })
