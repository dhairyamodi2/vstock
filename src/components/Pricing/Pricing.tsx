import { Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { SiHive, SiMarketo, SiMicrosoft } from 'react-icons/si'
import { ActionButton } from './ActionButton'
import { PricingCard } from './PricingCard'

export const Pricing = () => (
  <Box
    as="section"
    bg={useColorModeValue('gray.50', 'gray.800')}
    py="14"
    px={{ base: '4', md: '8' }}
  >
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      spacing={{ base: '8', lg: '0' }}
      maxW="7xl"
      mx="auto"
      justifyItems="center"
      alignItems="center"
    >
      <PricingCard
        data={{
          price: '$99',
          name: 'BUSINESS',
          features: [
            '5 Images',
            'Lifetime access',
            'Enhanced License',
            'Unlimited Copies',
          ],
        }}
        icon={SiMicrosoft}
        button={
          <ActionButton variant="outline" borderWidth="2px">
            Buy now
          </ActionButton>
        }
      />
      <PricingCard
        data={{
          price: '$499',
          name: 'AGENCY',
          features: [
            '25 Images',
            'Lifetime access',
            'Enhanced License',
            'Unlimited Copies',
          ],
        }}
        icon={SiMarketo}
        button={
          <ActionButton variant="outline" borderWidth="2px">
            Buy now
          </ActionButton>
        }
      />
    </SimpleGrid>
  </Box>
)
