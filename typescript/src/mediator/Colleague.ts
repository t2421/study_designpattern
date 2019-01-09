import Mediator from './Mediator'

export default interface Colleague {
  setMediator(mediator: Mediator): void
  setCollegueEnable(enabled: boolean): void
}
