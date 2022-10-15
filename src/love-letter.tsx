import { Stack, Text, Box, Button } from '@chakra-ui/react'

function LoveLetter(props: any) {
  return (
    <Stack align="flex-start" direction="column" pt="24px" pb="24px">
        <Text color="#000000" fontSize="32px" fontFamily="Open Sans" fontWeight="600" fontStyle="normal" lineHeight="44px">Your Letter to Jeff Bezos</Text>
        <Text pb="24px" pr="24px" align="left" color="#000000" fontSize="16px" fontFamily="Open Sans" fontWeight="400" fontStyle="normal" lineHeight="27px">(Yes, this will actually be emailed to him.)</Text>
        <Box width="898px" height="467px" border="2px solid #232F3E" borderRadius="8px">
            <Text pl="24px" pt="24px" pr="24px" align="left" color="#000000" fontSize="20px" fontFamily="Open Sans" fontWeight="400" fontStyle="normal" lineHeight="27px">Dear Daddy Bezos,</Text>
            <Text pl="24px" pt="24px" pr="24px" align="left" color="#000000" fontSize="20px" fontFamily="Open Sans" fontWeight="400" fontStyle="normal" lineHeight="27px">Oh, my sweet, sexy Bezos - I’m just about to buy a [INSERT ITEM NAME HERE], something I can only do because of your big juicy business brain. Jeff, my darling, I’m so very sorry I couldn’t send you tip money, but I hope you accept my sincere words of affection instead. From the bottom of my heart, THANK YOU for contributing so much good to this world. I wish I was at the Amazon HQ with you right now so I could give you a big smooch right on your beautiful bald head.</Text>
            <Text pl="24px" pt="24px" pr="24px" align="left" color="#000000" fontSize="20px" fontFamily="Open Sans" fontWeight="400" fontStyle="normal" lineHeight="27px">XOXO, </Text>
            <Text pl="24px" pt="24px" pr="24px" align="left" color="#000000" fontSize="20px" fontFamily="Open Sans" fontWeight="400" fontStyle="normal" lineHeight="27px">[INSERT NAME HERE], the #1 Bezos Babe</Text>
        </Box>
        <Stack direction="row" spacing="26px" pt="24px">
        <Button onClick={() => {
            props.setIsLoveLetter(false);
            props.setIsConfetti(false);
            }}backgroundColor="#FBFBFB" borderColor="#232F3E" borderWidth="1px" fontSize="24px" fontStyle="normal" fontFamily="Open Sans" fontWeight="600" color="#232F3E" width="437px" height="100px" left="0px" top="0px">
        Back to Tip Options
            </Button>
            <Button onClick={() => props.setIsConfetti(true)} backgroundColor="#F7CA00" borderColor="#BC9A00" borderWidth="1px" fontSize="24px" fontStyle="normal" fontFamily="Open Sans" fontWeight="600" color="#232F3E" width="437px" height="100px" left="0px" top="0px">
        Send Letter
            </Button>
        </Stack>
    </Stack>
  );
}

export default LoveLetter;
