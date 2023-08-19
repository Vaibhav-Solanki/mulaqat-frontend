import { FcGoogle } from 'react-icons/fc'
import { Button, Center, Text } from '@chakra-ui/react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function GoogleButton() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  return (
    <Center p={8}>
      <Button w={'full'} maxW={'md'} variant={'outline'} leftIcon={<FcGoogle />} onClick={()=> signInWithPopup(auth,provider) }>
        <Center>
          <Text>Sign in with Google</Text>
        </Center>
      </Button>
    </Center>
  )
}
