import {Component} from 'react'
// Write your code here

class ActiveEventRegistrationDetails extends Component {
  renderYetToRegisterView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button type="button">Register Here</button>
    </div>
  )

  renderRegisteredView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  renderRegistrationClosedView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )

  renderInitialView = () => (
    <div>
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  render() {
    const {eventStatus} = this.props

    switch (eventStatus) {
      case 'YET_TO_REGISTER':
        return this.renderYetToRegisterView()
      case 'REGISTERED':
        return this.renderRegisteredView()
      case 'REGISTRATIONS_CLOSED':
        return this.renderRegistrationClosedView()
      default:
        return this.renderInitialView()
    }
  }
}

export default ActiveEventRegistrationDetails
