import { Stack, Spacer, Text, color } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

function TippingScreen() {
  return (
    <div className="bezos-tipping-screen">
        <Stack spacing="24px" direction='column' align='center'>
            <Stack spacing="24px" direction='row' align='center'>
                <Button backgroundColor="#232F3E" width="283px" height="276px" left="0px" top="0px" _hover={{
                    backgroundColor: "gray.200", color:"#232F3E", borderColor:"#232F3E", borderWidth:"1px"
                }
                }>
                    <Stack spacing="24px" direction='column' align='center'>
                        <Text fontSize="70px" fontFamily="Open Sans" fontWeight="400" fontStyle="normal" >15%</Text>
                        <Text fontSize="30px" fontFamily="Open Sans" line-height="41px" fontStyle="normal" fontWeight="400">$15.00</Text>
                    </Stack>
                </Button>
                <Button backgroundColor="#232F3E" width="283px" height="276px" left="0px" top="0px" _hover={{
                    backgroundColor: "gray.200", color:"#232F3E", borderColor:"#232F3E", borderWidth:"1px"
                }
                }>
                    <Stack spacing="24px" direction='column' align='center'>
                        <Text fontSize="70px" fontFamily="Open Sans" fontWeight="400" fontStyle="normal" >69%</Text>
                        <Text fontSize="30px" fontFamily="Open Sans" line-height="41px" fontStyle="normal" fontWeight="400">$69.00</Text>
                    </Stack>
                </Button>
                <Button backgroundColor="#232F3E" width="283px" height="276px" left="0px" top="0px" _hover={{
                    backgroundColor: "gray.200", color:"#232F3E", borderColor:"#232F3E", borderWidth:"1px"
                }
                }>
                    <Stack spacing="24px" direction='column' align='center'>
                        <Text fontSize="70px" fontFamily="Open Sans" fontWeight="400" fontStyle="normal" >420%</Text>
                        <Text fontSize="30px" fontFamily="Open Sans" line-height="41px" fontStyle="normal" fontWeight="400">$420.00</Text>
                    </Stack>
                </Button>
            </Stack>
            <Button backgroundColor="#FBFBFB" borderColor="#232F3E" borderWidth="1px" fontSize="32px" fontStyle="normal" fontFamily="Open Sans" fontWeight="600" color="#232F3E" width="898px" height="100px" left="0px" top="0px">
                    Send Letter to Jeff Bezos
            </Button>
            <Button backgroundColor="#FBFBFB" borderColor="#232F3E" borderWidth="1px" fontSize="32px" fontStyle="normal" fontFamily="Open Sans" fontWeight="600" color="#232F3E" width="898px" height="100px" left="0px" top="0px">
                    No Tip
            </Button>
            <Button color="#232F3E" fontSize="24px" fontStyle="normal" fontFamily="Open Sans" fontWeight="400" left="0px" top="0px" variant='link' textDecoration="underline">
                Back to Cart
            </Button>
        </Stack>
    </div>
  );
}

export default TippingScreen;
