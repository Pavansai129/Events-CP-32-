// Write your code here

const ActiveEventRegistrationDetails = props => {
  const {eventStatus} = props
  const renderYetToRegisterView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button type="button">Register Here</button>
    </div>
  )

  const renderRegisteredView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderRegistrationClosedView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )

  const renderInitialView = () => (
    <div>
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  switch (eventStatus) {
    case 'YET_TO_REGISTER':
      return renderYetToRegisterView()
    case 'REGISTERED':
      return renderRegisteredView()
    case 'REGISTRATIONS_CLOSED':
      return renderRegistrationClosedView()
    default:
      return renderInitialView()
  }
}

export default ActiveEventRegistrationDetails
