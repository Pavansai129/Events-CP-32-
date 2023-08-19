import './index.css'
// Write your code here
const EventItem = props => {
  const {eventDetails, updateRegistrationStatus} = props
  const {id, imageUrl, name, location, registrationStatus} = eventDetails
  const onClickEventItem = () => {
    updateRegistrationStatus(id, registrationStatus)
  }

  return (
    <li className="event-item">
      <button type="button" onClick={onClickEventItem}>
        <img src={imageUrl} alt="event" className="event-image" />
        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
