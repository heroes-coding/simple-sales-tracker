import { CHANGE_NAME } from '../actions'

export default function(state = 'Anonymouse', {type,newName}) {
  if (type === CHANGE_NAME) return newName
  return state
}
