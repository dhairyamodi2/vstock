import { Button, ButtonProps } from '@chakra-ui/react'

export const ActionButton = (props: ButtonProps) => (
  <Button
    bgColor={'black'}
    color = {'white'}
    colorScheme="black"
    size="lg"
    w="full"
    fontWeight="extrabold"
    py={{ md: '8' }}
    {...props}
  />
)
