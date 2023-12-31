import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import "./Nave.css"


const Links = [{name:'Features',lin:'#mid'},
{name:'FAQ',lin:'#faq'},
{name:'Pricing',lin:'#pricing'},
{name:'Testimonials',lin:'#test'}]

const NavLink = (props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box className='navbar' bg={useColorModeValue('orange.200', 'orange.200')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'right'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} justifyContent={'end'} alignItems={'center'}>
            <Box><img className="NavLogo" src="./hqimg2.jpg" alt="alt" /></Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Box as="a" key={link.lin} href={link.lin}>{link.name}</Box>
              ))}
            </HStack>
          </HStack>
          
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Box as="a" key={link.lin} href={link.lin}>{link.name}</Box>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  )
}