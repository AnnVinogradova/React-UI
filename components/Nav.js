import { Stack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { Center} from '@chakra-ui/react'

export default function Nav(){
  return<>
  <Center>
<Stack direction="row" spacing={100}>
  <Link as={NextLink} href='/home' >
    Home
  </Link>
  <Link as={NextLink} href='/tour'>
    TOUR
  </Link>
</Stack>
</Center>
  </>  
}