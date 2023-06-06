import React from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Link,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';

const LinkButton = ({ url = '/', title = 'Home' }) => (
  <Link to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = true;
  const user ={
    role:"admin"
  }

  const logoutHandler=()=>{
    console.log('logout')
  }

  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme="yellow"
        w={'12'}
        h={'12'}
        rounded={'full'}
        position={'fixed'}
        top={'6'}
        left={'6'}
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(2px)'} />
        <DrawerContent>
          <DrawerHeader borderBottom={'1px'}>Course Bundler</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems={'flex-start'}>
              <LinkButton url="/" title="Home"></LinkButton>
              <LinkButton
                url="/courses"
                title="Browse All Courses"
              ></LinkButton>
              <LinkButton url="/request" title="Request a Course"></LinkButton>
              <LinkButton url="/contact" title="Contact Us"></LinkButton>
              <LinkButton url="/about" title="About"></LinkButton>

              <HStack
                justifyContent={'space-evenly'}
                position={'absolute'}
                bottom={'2rem'}
                width={'80%'}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to={'/profile'}>
                          <Button colorScheme="yellow" variant={'ghost'}>
                            Profile
                          </Button>
                        </Link>

                        <Button variant={'ghost'} onClick={logoutHandler}>
                          <RiLogoutBoxLine />
                          Log Out
                        </Button>
                      </HStack>


                      {user && user.role === 'admin' && (
                <Link to="/admin/dashboard">
                  <Button colorScheme='purple' variant={'ghost'}>
                    <RiDashboardFill style={{margin:'4px'}} />
                    Dashboard
                  </Button>
                </Link>
              )}

                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to={'/login'}>
                      <Button colorScheme="yellow">Login</Button>
                    </Link>

                    <p>Or</p>

                    <Link to={'/signup'}>
                      <Button colorScheme="yellow">Sign Up</Button>
                    </Link>
                  </>
                )}
              </HStack>

            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
