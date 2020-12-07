import { storiesOf } from '@storybook/react'
import { Button } from './Button'

storiesOf('Button', module)
  .add('with text', () => <Button>Hi</Button>)
  .add('with some emoji', () => <Button>😀 😎 👍 💯</Button>)
