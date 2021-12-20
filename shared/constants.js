export const ACTIONCABLE_TYPE = 'actioncable'
export const ANYCABLE_TYPE = 'anycable'

const COMMANDS_PREFIX = 'CABLE_SW'

export const PING_COMMAND = `${COMMANDS_PREFIX}_PING`
export const PONG_COMMAND = `${COMMANDS_PREFIX}_PONG`
export const SUBSCRIBE_TO_CHANNEL = `${COMMANDS_PREFIX}_SUBSCRIBE_TO_CHANNEL`
export const UNSUBSCRIBE_FROM_CHANNEL = `${COMMANDS_PREFIX}_UNSUBSCRIBE_FROM_CHANNEL`
export const WEBSOCKET_PERFORM_COMMAND = `${COMMANDS_PREFIX}_WEBSOCKET_PERFORM`
export const WEBSOCKET_MESSAGE_COMMAND = `${COMMANDS_PREFIX}_WEBSOCKET_MESSAGE`
export const WORKER_MSG_ERROR_COMMAND = `${COMMANDS_PREFIX}_WORKER_MSG_ERROR`
export const VISIBILITY_SHOW_COMMAND = `${COMMANDS_PREFIX}_VISIBILITY_SHOW`
export const VISIBILITY_HIDDEN_COMMAND = `${COMMANDS_PREFIX}_VISIBILITY_HIDDEN`

export const ALL_COMMANDS = [
  PING_COMMAND,
  PONG_COMMAND,
  SUBSCRIBE_TO_CHANNEL,
  UNSUBSCRIBE_FROM_CHANNEL,
  WEBSOCKET_PERFORM_COMMAND,
  WEBSOCKET_MESSAGE_COMMAND,
  WORKER_MSG_ERROR_COMMAND,
  VISIBILITY_SHOW_COMMAND,
  VISIBILITY_HIDDEN_COMMAND
]
