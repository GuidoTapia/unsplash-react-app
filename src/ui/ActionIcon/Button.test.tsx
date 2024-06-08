import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { IconTestPipe } from '@tabler/icons-react'
import '@testing-library/jest-dom'
import { ActionIcon } from './ActionIcon'

const onClick = jest.fn()

test('ActionIcon component example test', async () => {
  render(<ActionIcon Icon={IconTestPipe} data-testid="test-button" onClick={onClick} />)

  const actionIcon = screen.getByTestId('test-button')

  expect(onClick).toHaveBeenCalledTimes(0)
  await userEvent.click(actionIcon)
  expect(onClick).toHaveBeenCalledTimes(1)
})
