import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import _ from 'lodash'
import moment from 'moment'
import styles from './styles.module.scss'
import IconBell from '../../assets/images/icon-bell.svg'

const LightBar = ({ title, onDismiss }) => (
  <div className={styles['light-bar']}>
    {title}
    <span role='button' className={cn(styles['green-link'], styles['mobile-only'], styles.dismissSection)} onClick={onDismiss}>
      Dismiss All
    </span>
  </div>
)

LightBar.propTypes = {
  title: PropTypes.node,
  onDismiss: PropTypes.func
}

const Category = ({ title, customClass }) => (
  <div className={cn(styles['grey-bar'], customClass)}>
    <div className={styles['copyicon-title']}>
      {title}
    </div>
  </div>
)

Category.propTypes = {
  title: PropTypes.node,
  customClass: PropTypes.string
}

const Item = ({ item, onDismiss }) => {
  let rightMenu = null

  if (!item.seen || !item.read) {
    rightMenu = <div className={cn(styles['right-remove'], styles.dismissItem)} onClick={onDismiss}>
      <div className={styles[item.completed ? 'btn-close' : (item.seen ? 'btn-seen' : 'btn-unseen')]} />
      <span className={styles['black-txt']}>
        {item.completed ? 'Dismiss Notification' : (item.seen ? 'Mark as Seen' : 'Mark as Read')}
      </span>
    </div>
  }

  return (
    <div className={styles['items']}>
      <a href={item.href} className={styles['item-content']}>
        <p className={cn(styles['txt'], item.completed ? styles['text-uppercase'] : '', item.completed ? styles['font-bold'] : '')}>
          {item.completed ? item.category : item.content}
        </p>
        <div className={styles['bottom-info']}>
          {item.tags && item.tags.map(tag => (
            <span className={styles['blue-squre']} key={tag}>
              {tag}
            </span>
          ))}
          {!item.completed ? <span className={styles['time-txt']}>{moment(item.timestamp).fromNow()}</span> : null}
        </div>
        {rightMenu}
      </a>
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.object,
  onDismiss: PropTypes.func
}

const NotificationList = ({
  notifications,
  onNotificationMark,
  onNotificationMarkAll,
  onNotificationDismiss,
  onSettings
}) => {
  const categories = _.uniq(
    (notifications || []).map(noti => noti.category).filter(x => x)
  ).sort((a, b) => a.localeCompare(b))

  const completed = notifications.filter(noti => noti.completed)
  const incomplete = notifications.filter(noti => !noti.completed)

  return (
    <>
      <div className={styles['noti-header']}>
        <div className={styles['noti-title']}>
          <IconBell />
          <span className={styles['noti-title-text']}>Notifications</span>
        </div>
        <div className={styles.rights}>
          <span
            role='button'
            className={styles['white-link']}
            onClick={() => onNotificationMarkAll()}
          >
            Mark All as Read
          </span>
          &nbsp;<span className={styles.point} />&nbsp;
          <span
            role='button'
            className={styles['white-link']}
            onClick={onSettings}
          >
            Settings
          </span>
        </div>
        <span
          role='button'
          className={styles['btn-setting']}
        />
      </div>
      <div className={styles['noti-body']}>
        <Fragment>
          {categories.map(category => {
            const items = incomplete.filter(notif => notif.category === category)

            if (!items.length) return null

            items.sort((a, b) => a.timestamp > b.timestamp)

            return (
              <div className={styles['greybar-section']} key={category}>
                <Category
                  title={`${category} (${items.length})`}
                />
                {items.map((item, i) => (
                  <Item
                    item={item}
                    key={`noti-incomplete-${i}`}
                  />
                ))}
              </div>
            )
          })}
          <Category title='Completed Challenges' customClass={styles['text-uppercase']} />
          {completed.map((item, i) => {
            return (
              <Item
                item={item}
                key={`noti-complete-${i}`}
              />
            )
          })}
        </Fragment>

        <div className={cn(styles['end-message'], styles.center)}>
          <a href='#' className={cn(styles['view-noti'])}>View All Notifications</a>
        </div>
      </div>
    </>
  )
}

NotificationList.defaultProps = {
  notifications: [],
  onNotificationMark: () => null,
  onNotificationMarkAll: () => null,
  onNotificationDismiss: () => null
}

NotificationList.propTypes = {
  /**
   * Array of Notifications, each with properties:
   *
   *   - content {string|node}
   *   - href {string} href for the item's wrapper anchor
   *   - category {array}
   *   - tags {array}
   *   - timestamp {number}
  */
  notifications: PropTypes.array,

  /** Called on Settings button click */
  onSettings: PropTypes.func,

  onNotificationMark: PropTypes.func,
  onNotificationMarkAll: PropTypes.func,
  onNotificationDismiss: PropTypes.func
}

export default NotificationList
