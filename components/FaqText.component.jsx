import { Box, Text } from '@chakra-ui/core';

const FaqText = ({ faq }) => {

  return (
    <Box marginBottom="2em">
      <Text fontWeight="bold" fontSize="1.2rem" marginBottom="0.3em">
        {faq.question}
      </Text>
    
      <Text fontSize="1.1rem">
        {faq.answer}
      </Text>
    </Box>
  )
}

export default FaqText;