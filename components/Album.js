import { Image } from '@chakra-ui/react'
import { Stack } from "@chakra-ui/react"
import { Text } from '@chakra-ui/react'
import { Flex, Heading, Box} from "@chakra-ui/react"

export default function Album(){
    return<>
    <Box bg={'black'}>
    <Box>
<Flex justifyContent="center" alignItems="center"> 
      <Heading as="h1" size="xl" color={'red'}>
      Ice Nine Kills
      </Heading>
    </Flex>
    <Box color={'white'} textAlign={'center'} m={2}>
    <Text>Ice Nine Kills (sometimes stylized in all capital letters or abbreviated to INK, and formerly known as Ice Nine) is an American heavy metal band from Boston, Massachusetts, who are signed to Fearless Records. Best known for its horror-inspired lyrics, Ice Nine Kills formed in its earliest incarnation in 2000 by high school friends Spencer Charnas and Jeremy Schwartz. Charnas is currently the only remaining founding member.Ice Nine Kills has released three EPs along with six full-length studio albums: Last Chance to Make Amends, Safe Is Just a Shadow, The Predator Becomes the Prey, Every Trick in the Book, which peaked at number 122 on the US Billboard 200; The Silver Scream, which peaked at number 29;[2] and their latest, The Silver Scream 2: Welcome to Horrorwood which peaked at number 18 on the US Billboard 200;. Their band name is derived from the fictional substance ice-nine from the novel Cat's Cradle by Kurt Vonnegut.[3]</Text>
    <Text>Ice Nine Kills was founded in 2000 under the name "Ice Nine" by high school friends Spencer Charnas and Jeremy Schwartz, before later recruiting drummer Grant Newsted in 2003 and swapped out their then-bassist (Patrick Morse) for Hobie Boeschenstein in 2004,[4] but changed their name to Ice Nine Kills just before releasing their debut independent album Last Chance to Make Amends on April 20, 2006.[5] However, they did record a demo, entitled "The Pop-Punk-Ska Years", in 2002, which would eventually be released in 2009.[3]

The following year on November 20, 2007, Ice Nine Kills released their EP The Burning through Red Blue Records.[6] The band then set out on several national tours in support of the EP, including opening slots on tours with I See Stars and Eyes Set to Kill among others.[7][better source needed] By 2008, the group had been invited to open for well-known acts such as As I Lay Dying, A Day to Remember, Thursday, Paramore and a one-off performance on the Taste of Chaos 2009 tour.[8] That same year, Ice Nine Kills released 2 acoustic tracks ("The Simple Act of Giving Up" and "Lifetime in a Week") on an EP titled 2 Song Acoustic.[9]

In mid-2009, Schwartz decided to leave the band after struggling with life on the road, leaving Charnas as the only original member.[10] Charnas then recruited former members of the Rochester NY based post-hardcore band Remember Tomorrow which had recently disbanded[11] and stopped playing rhythm guitar. This shifted Ice Nine Kills' sound into more of an experimental metalcore sound to which Ferret Music took notice and signed the band in the spring of 2009 and after their appearance on Warped Tour 2009 the band began writing and recording their next record.[8]</Text>
</Box>
    </Box>
    <Stack direction='row' bg={'gray'} height={560}>
  <Flex direction='column' align='center'>
    <Image
      boxSize='300px'
      src='https://cdn.shopify.com/s/files/1/0424/8967/5931/products/INK_PinheadPurple_Sticker_81_700x@2x.png?v=1650583108'
      alt='Ice nine kills'
    />
    <Text fontSize="xl" color="black" align={'center'}>"THE SILVER SCREAM 2: WELCOME TO HORRORWOOD"</Text>
    <Text fontSize="x0.5" color="purple">PINHEAD PURPLE VINYL</Text>
    <Text fontSize="x0.5">35$</Text>
  </Flex>
  <Flex direction='column' align='center'>
    <Image
      boxSize='300px'
      src='https://cdn.shopify.com/s/files/1/0424/8967/5931/products/INK_GruesomeGreen_Sticker_28_700x@2x.png?v=1650583080'
      alt='Ice nine kills'
    />
    <Text fontSize="xl" color="black" align={'center'}>"THE SILVER SCREAM 2: WELCOME TO HORRORWOOD"</Text>
    <Text fontSize="x0.5" color="green">GRUESOME GREEN VINYL</Text>
    <Text fontSize="x0.5">35$</Text>
  </Flex>
  <Flex direction='column' align='center'>
    <Image  
      boxSize='300px'
      src='https://cdn.shopify.com/s/files/1/0424/8967/5931/products/INK_SilentSplatter_Sticker_19_700x@2x.png?v=1650583134'
      alt='Ice nine kills' 
    />
    <Text fontSize="xl" color="black" align={'center'}>"THE SILVER SCREAM 2: WELCOME TO HORRORWOOD"</Text>
    <Text fontSize="x0.5" color="black">SILENT SPLATTER VINYL</Text>
    <Text fontSize="x0.5">35$</Text>
  </Flex>
  <Flex direction='column' align='center'>
    <Image  
      boxSize='300px'
      src='https://cdn.shopify.com/s/files/1/0424/8967/5931/products/INK_WTH_LP_D2C5-SB07_700x@2x.png?v=1627053488'
      alt='Ice nine kills' 
    />
    <Text fontSize="xl" color="black" align={'center'}>"THE SILVER SCREAM 2: WELCOME TO HORRORWOOD"</Text>
    <Text fontSize="x0.5" color="blue">BLUEY LEWIS VINYL</Text>
    <Text fontSize="x0.5">35$</Text>
  </Flex>
  <Flex direction='column' align='center'>
    <Image  
      boxSize='300px'
      src='https://cdn.shopify.com/s/files/1/0424/8967/5931/products/IceNineKills_EveryTrickInTheBook_TransRed_Packshot_700x@2x.png?v=1638485767'
      alt='Ice nine kills' 
    />
    <Text fontSize="xl" color="black" align={'center'}>"THE SILVER SCREAM 2: WELCOME TO HORRORWOOD"</Text>
    <Text fontSize="x0.5" color="red">TRANSLUCENT RED VINYL</Text>
    <Text fontSize="x0.5">26$</Text>
  </Flex>
  <Flex direction='column' align='center'>
    <Image  
      boxSize='300px'
      src='https://cdn.shopify.com/s/files/1/0424/8967/5931/products/ink-D2C2_700x@2x.png?v=1681249628'
      alt='Ice nine kills' 
    />
    <Text fontSize="xl" color="black" align={'center'}>"THE SILVER SCREAM 2: WELCOME TO HORRORWOOD"</Text>
    <Text fontSize="x0.5" color="yellow">YELLOW W/ GREEN SPLATTER VINYL</Text>
    <Text fontSize="x0.5">35$</Text>
  </Flex>
</Stack>
</Box>
</>
}