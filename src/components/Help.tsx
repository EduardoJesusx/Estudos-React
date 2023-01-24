import {
  Box,
  SkeletonCircle,
  BoxProps,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  CloseButton,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  Link,
  Icon
} from '@chakra-ui/react'

import { motion, useDragControls } from "framer-motion"
import { useRef, useState } from 'react'

const MotionBox = motion<BoxProps>(Box) 

export function Help () {
  const [isHelpMenuOpen, setIsHelpMenuOpen] = useState(false)

  const draggableMenu = useRef(null)
  const dragControll = useDragControls()

  let isDreagin = false

  function handleClick () {
    if (!isDreagin && !isHelpMenuOpen) {
      console.log('> Abriu!')
      setIsHelpMenuOpen(state => !state)
    }

    isDreagin = false
  }

  function handleDrag () {
    isDreagin = true
  }

  function handleDragEnd () {
    isDreagin = true
  }

  function handleTogleToInitialMode () {
    setIsHelpMenuOpen(false)
  }

  const container = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        delayChildren: 0.3,
      }
    }
  }

  return (
    <MotionBox
      drag
      dragMomentum={false}
      dragControls={dragControll}
      ref={draggableMenu}
      dragConstraints={{ top: 0, left: 0 }}
      dragElastic={false}

      overflow="hidden"
      cursor="pointer"
      onClick={handleClick}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
    >       
      <MotionBox
        width={45}
        height={45}
        variants={container}
        visibility={isHelpMenuOpen ? "hidden" : "initial"}
      >
        <SkeletonCircle width="100%" height="100%" onClick={()=>{alert('teste')}} size="65px" cursor="pointer" />
      </MotionBox>
      <MotionBox
        maxWidth={60}
        transform="translateY(-40px)"
        visibility={isHelpMenuOpen ? "initial" : "hidden"}
      >
        <CloseButton onClick={handleTogleToInitialMode} />
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Funções
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon color='green.500' />
                  <Link>Lorem ipsum</Link>
                </ListItem>
                <ListItem>
                  <ListIcon color='green.500' />
                  <Link>Lorem ipsum</Link>
                </ListItem>
                <ListItem>
                  <ListIcon color='green.500' />
                  <Link>Lorem ipsum</Link>
                </ListItem>
                <ListItem>
                  <ListIcon color='green.500' />
                  <Link>Lorem ipsum</Link>
                </ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <UnorderedList>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </MotionBox>
    </MotionBox> 
  )
}

