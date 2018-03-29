const CHANGE_NAME = 'change_name'

export { CHANGE_NAME, changeName }

function changeName(newName) {
  return {
    type: CHANGE_NAME,
    newName
  }
}
