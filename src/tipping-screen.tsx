import { Stack, Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import BezosConfetti from './bezos-confetti';
import LoveLetter from './love-letter';
import {useState} from 'react';

function TippingScreen() {
    const [isConfetti, setIsConfetti] = useState(false);
    const [isLoveLetter, setIsLoveLetter] = useState(false);
  return (
    isConfetti ? (
        <Stack>
        <BezosConfetti/>
        </Stack>

    ): isLoveLetter ? (
        <LoveLetter setIsConfetti={setIsConfetti} setIsLoveLetter={setIsLoveLetter}/>
    ): (
    <div className="bezos-tipping-screen">
        <Text align="left" pb="24px" color="#232F3E" fontSize="30px" fontFamily="Open Sans" fontWeight="600" fontStyle="normal" lineHeight="41px">Thank your generous benefactor, Jeff Bezos</Text>
        
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
            <Button 
            onClick={() => setIsLoveLetter(true)}
            backgroundColor="#FBFBFB" 
            borderColor="#232F3E" 
            borderWidth="1px" 
            fontSize="30px" 
            fontStyle="normal" 
            fontFamily="Open Sans" 
            fontWeight="600" 
            color="#232F3E" 
            width="898px" 
            height="100px" 
            left="0px" 
            top="0px">
                    Send letter to Daddy Bezos
            </Button>
            <Button backgroundColor="#FBFBFB" borderColor="#232F3E" borderWidth="1px" fontSize="30px" fontStyle="normal" fontFamily="Open Sans" fontWeight="600" color="#232F3E" width="898px" height="100px" left="0px" top="0px">
                    No tip
            </Button>
            <Button color="#232F3E" fontSize="24px" fontStyle="normal" fontFamily="Open Sans" fontWeight="400" left="0px" top="0px" variant='link' textDecoration="underline">
                Back to cart
            </Button>
        </Stack>
    </div>)
  );
}

export default TippingScreen;
