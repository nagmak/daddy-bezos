import { Stack, Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import BezosConfetti from './bezos-confetti';
import LoveLetter from './love-letter';
import {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {useEffect} from 'react';


function TippingScreen() {
    const [isConfetti, setIsConfetti] = useState(false);
    const [isLoveLetter, setIsLoveLetter] = useState(false);
    const [tipDisabled, setTipDisabled] = useState(false);
    const navigate = useNavigate();
    const url =new URL( window.location.href)

    const params = url.searchParams
    const price = Number(params.get("price"))
    const [getPrice, setPrice] = useState(price);
    const name = params.get("name")
    const [getPersonName, setPersonName] = useState(name);
    const purchase = params.get("purchase")
    const [getPurchase, setPurchase] = useState(purchase);

    console.log(price)

    function reportDescision(descision: number){
        var message = (price*descision).toFixed(2);
        window.parent.postMessage(message, "*");
        console.log("message sent");
    }


  return (
    isConfetti ? (
        <Stack>
        <BezosConfetti/>
        </Stack>

    ): isLoveLetter ? (
        <LoveLetter setIsConfetti={setIsConfetti} setIsLoveLetter={setIsLoveLetter} getPersonName={getPersonName} getPurchase={getPurchase}/>
    ): (
    <div className="bezos-tipping-screen">
        <Text align="left" pb="24px" color="#232F3E" fontSize="30px" fontFamily="Open Sans" fontWeight="600" fontStyle="normal" lineHeight="41px">Thank your generous benefactor, Jeff Bezos</Text>
        
        <Stack spacing="24px" direction='column' align='center'>
           <Stack spacing="24px" direction='row' align='center'>
                <Button onClick={() => reportDescision(0.15)} backgroundColor="#232F3E" width="283px" height="276px" left="0px" top="0px" _hover={{
                    backgroundColor: "gray.200", color:"#232F3E", borderColor:"#232F3E", borderWidth:"1px"
                }
                }>
                    <Stack spacing="24px" direction='column' align='center'>
                        <Text fontSize="70px" fontFamily="Open Sans" fontWeight="400" fontStyle="normal" >15%</Text>
                        <Text id="tip-option-1" fontSize="30px" fontFamily="Open Sans" line-height="41px" fontStyle="normal" fontWeight="400">${(price*0.15).toFixed(2)}</Text>
                    </Stack>
                </Button>
                <Button onClick={() => reportDescision(0.69)} backgroundColor="#232F3E" width="283px" height="276px" left="0px" top="0px" _hover={{
                    backgroundColor: "gray.200", color:"#232F3E", borderColor:"#232F3E", borderWidth:"1px"
                }
                }>
                    <Stack spacing="24px" direction='column' align='center'>
                        <Text fontSize="70px" fontFamily="Open Sans" fontWeight="400" fontStyle="normal" >69%</Text>
                        <Text id="tip-option-2" fontSize="30px" fontFamily="Open Sans" line-height="41px" fontStyle="normal" fontWeight="400">${(price*0.69).toFixed(2)}</Text>
                    </Stack>
                </Button>
                <Button onClick={()=> reportDescision(4.20)} backgroundColor="#232F3E" width="283px" height="276px" left="0px" top="0px" _hover={{
                    backgroundColor: "gray.200", color:"#232F3E", borderColor:"#232F3E", borderWidth:"1px"
                }
                }>
                    <Stack spacing="24px" direction='column' align='center'>
                        <Text fontSize="70px" fontFamily="Open Sans" fontWeight="400" fontStyle="normal" >420%</Text>
                        <Text id="tip-option-3" fontSize="30px" fontFamily="Open Sans" line-height="41px" fontStyle="normal" fontWeight="400">${(price*4.2).toFixed(2)}</Text>
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
            <Button disabled={tipDisabled} _disabled={{
                color:"#7C7C7C", borderColor:"#7C7C7C", backgroundColor:"#E7E7E7"
            }} _hover={tipDisabled ? {
                color:"#7C7C7C", borderColor:"#7C7C7C", backgroundColor:"#E7E7E7"
            }: {
                backgroundColor: "gray.200", color:"#232F3E", borderColor:"#232F3E", borderWidth:"1px"
            }} onClick={() => setTipDisabled(true)}backgroundColor="#FBFBFB" borderColor="#232F3E" borderWidth="1px" fontSize="30px" fontStyle="normal" fontFamily="Open Sans" fontWeight="600" color="#232F3E" width="898px" height="100px" left="0px" top="0px">
                    No Tip
            </Button>
            <Button onClick={() => navigate(-1)} color="#232F3E" fontSize="24px" fontStyle="normal" fontFamily="Open Sans" fontWeight="400" left="0px" top="0px" variant='link' textDecoration="underline">
                Back to cart
            </Button>
        </Stack>
    </div>)
  );
}

export default TippingScreen;
