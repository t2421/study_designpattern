import NumberGenerator from './NumberGenerator'

export default interface Observer {
  update(numberGenerator: NumberGenerator): void
}
