import { Stack, Text, Box, Button } from '@chakra-ui/react'

function LoveLetter(props: any) {
  return (
    <Stack align="flex-start" direction="column" pt="24px" pb="24px">

        <Text color="#000000" fontSize="30px" fontFamily="Open Sans" fontWeight="600" fontStyle="normal" lineHeight="41px">Your Letter to Jeff Bezos</Text>
        <Text pb="16px" pr="24px" align="left" color="#000000" fontSize="18px" fontFamily="Open Sans" fontWeight="400" fontStyle="normal" lineHeight="25px">(Yes, this will actually be emailed to him.)</Text>
        <Box width="746px" height="389px" border="1px solid #232F3E" borderRadius="8px">
            <Text pl="24px" pt="24px" pr="24px" align="left" color="#000000" fontSize="18px" fontFamily="Open Sans" fontWeight="400" fontStyle="normal" lineHeight="25px">Dear Daddy Bezos,</Text>
            <Text pl="24px" pt="24px" pr="24px" align="left" color="#000000" fontSize="18px" fontFamily="Open Sans" fontWeight="400" fontStyle="normal" lineHeight="25px">Oh, my sweet, sexy Bezos - I’m just about to buy a [INSERT ITEM NAME HERE], something I can only do because of your big juicy business brain. Jeff, my darling, I’m so very sorry I couldn’t send you tip money, but I hope you accept my sincere words of affection instead. From the bottom of my heart, THANK YOU for contributing so much good to this world. I wish I was at the Amazon HQ with you right now so I could give you a big smooch right on your beautiful bald head.</Text>
            <Text pl="24px" pt="24px" pr="24px" align="left" color="#000000" fontSize="18px" fontFamily="Open Sans" fontWeight="400" fontStyle="normal" lineHeight="25px">XOXO, </Text>
            <Text pl="24px" pt="24px" pr="24px" align="left" color="#000000" fontSize="18px" fontFamily="Open Sans" fontWeight="400" fontStyle="normal" lineHeight="25px">[INSERT NAME HERE], the #1 Bezos Babe</Text>
        </Box>
        <Stack direction="row" spacing="24px" pt="24px">
        <Button onClick={() => {
            props.setIsLoveLetter(false);
            props.setIsConfetti(false);
            }}backgroundColor="#FBFBFB" borderColor="#232F3E" borderWidth="1px" fontSize="20px" fontStyle="normal" fontFamily="Open Sans" fontWeight="600" color="#232F3E" width="361px" height="68px" left="0px" top="0px">
        Back to tip options
            </Button>
            <Button onClick={() => props.setIsConfetti(true)} backgroundColor="#232F3E" borderColor="#232F3E" borderWidth="1px" fontSize="20px" fontStyle="normal" fontFamily="Open Sans" fontWeight="600" color="#FFFFF" width="361px" height="68px" left="0px" top="0px">
        Send letter
            </Button>
        </Stack>
    </Stack>
  );
}

export default LoveLetter;
