import { Image } from '@chakra-ui/react'
import { Stack } from "@chakra-ui/react"
import { Text } from '@chakra-ui/react'
import { Flex} from "@chakra-ui/react";
export default function Album(){
    return<>
    <Stack direction='row' bg={'gray'} height={860}>
  <Flex direction='column' align='center'>
    <Image
      boxSize='300px'
      src='https://cdn.shopify.com/s/files/1/0424/8967/5931/products/INK_PinheadPurple_Sticker_81_700x@2x.png?v=1650583108'
      alt='Ice nine kills'
    />
    <Text fontSize="xl" color="black" align={'center'}>"THE SILVER SCREAM 2: WELCOME TO HORRORWOOD"</Text>
    <Text fontSize="x0.5" color="purple">PINHEAD PURPLE VINYL</Text>
  </Flex>
  <Flex direction='column' align='center'>
    <Image
      boxSize='300px'
      src='https://cdn.shopify.com/s/files/1/0424/8967/5931/products/INK_GruesomeGreen_Sticker_28_700x@2x.png?v=1650583080'
      alt='Ice nine kills'
    />
    <Text fontSize="xl" color="black" align={'center'}>"THE SILVER SCREAM 2: WELCOME TO HORRORWOOD"</Text>
    <Text fontSize="x0.5" color="green">GRUESOME GREEN VINYL</Text>
  </Flex>
  <Flex direction='column' align='center'>
    <Image  
      boxSize='300px'
      src='https://cdn.shopify.com/s/files/1/0424/8967/5931/products/INK_SilentSplatter_Sticker_19_700x@2x.png?v=1650583134'
      alt='Ice nine kills' 
    />
    <Text fontSize="xl" color="black" align={'center'}>"THE SILVER SCREAM 2: WELCOME TO HORRORWOOD"</Text>
    <Text fontSize="x0.5" color="black">SILENT SPLATTER VINYL</Text>
  </Flex>
  <Flex direction='column' align='center'>
    <Image  
      boxSize='300px'
      src='https://cdn.shopify.com/s/files/1/0424/8967/5931/products/INK_WTH_LP_D2C5-SB07_700x@2x.png?v=1627053488'
      alt='Ice nine kills' 
    />
    <Text fontSize="xl" color="black" align={'center'}>"THE SILVER SCREAM 2: WELCOME TO HORRORWOOD"</Text>
    <Text fontSize="x0.5" color="blue">BLUEY LEWIS VINYL</Text>
  </Flex>
  <Flex direction='column' align='center'>
    <Image  
      boxSize='300px'
      src='https://cdn.shopify.com/s/files/1/0424/8967/5931/products/IceNineKills_EveryTrickInTheBook_TransRed_Packshot_700x@2x.png?v=1638485767'
      alt='Ice nine kills' 
    />
    <Text fontSize="xl" color="black" align={'center'}>"THE SILVER SCREAM 2: WELCOME TO HORRORWOOD"</Text>
    <Text fontSize="x0.5" color="red">TRANSLUCENT RED VINYL</Text>
  </Flex>
  <Flex direction='column' align='center'>
    <Image  
      boxSize='300px'
      src='https://cdn.shopify.com/s/files/1/0424/8967/5931/products/ink-D2C2_700x@2x.png?v=1681249628'
      alt='Ice nine kills' 
    />
    <Text fontSize="xl" color="black" align={'center'}>"THE SILVER SCREAM 2: WELCOME TO HORRORWOOD"</Text>
    <Text fontSize="x0.5" color="yellow">YELLOW W/ GREEN SPLATTER VINYL</Text>
  </Flex>
</Stack>
</>
}