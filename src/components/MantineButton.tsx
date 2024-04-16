import { Button } from '@mantine/core'

export interface IMantineButton {
  onClick(): void
  children: React.ReactNode
}
// teste
export const MantineButton = ({ onClick, children }: IMantineButton) => {
  return <Button onClick={onClick}>{'Mantine button: ' + children?.toString()}</Button>
}
