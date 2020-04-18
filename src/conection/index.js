import {  NOTIFICATION_PUSH, NOTIFICATION_INC_DEC, INBOX_PUSH, INBOX_INC_DEC } from "./src/redux/actions/types"

export const _notificationsend = (userId, store) =>  {
    
    window.Echo.private('App.User.'+userId)
    .notification((notification) => {

      var notificationvar
      if (notification.notification_type == 3) {
        notificationvar = {
          data: notification,
          id: notification.id,
          created_at: moment().format('YYYY-MM-DD H:mm:ss')
        }

        store.dispatch({
          type: INBOX_PUSH,
          payload: notificationvar
        })
        store.dispatch({
          type: INBOX_INC_DEC,
          payload: 1
        })
      
        return
      }

      notificationvar = {
        data: notification,
        id: notification.id
      }

      store.dispatch({
        type: NOTIFICATION_PUSH,
        payload: notificationvar
      })

      store.dispatch({
        type: NOTIFICATION_INC_DEC,
        payload: 1
      })

    })
  }