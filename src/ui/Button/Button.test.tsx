import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Button } from './Button'

const onClick = jest.fn()

const buttonLabel = 'Test'

test('Button component example test', async () => {
  render(<Button label={buttonLabel} data-testid="test-button" onClick={onClick} />)

  const button = screen.getByTestId('test-button')

  expect(button).toHaveTextContent(buttonLabel)

  expect(onClick).toHaveBeenCalledTimes(0)
  await userEvent.click(button)
  expect(onClick).toHaveBeenCalledTimes(1)
})
