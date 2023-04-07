import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, List, ListItem, Select, Stack, Text, Textarea, useDisclosure } from "@chakra-ui/react"
import React, { ChangeEvent, useState } from "react"


interface DrawerProps {
    isOpen : boolean;
    onOpen : () => void;
    onClose : () => void;
}
const DrawerComponent : React.FC<DrawerProps> = function ({isOpen, onClose, onOpen})  {
    const [categories, setCategories] = useState(["MEN", "WOMEN", "LANDSCAPE", "COUPLES", "CHILDREN", "RURAL", "FESTIVAL", "VACATION", "FOCUS"]);

    const [filter, setFilters] = useState(["MEN", "WOMEN", "LANDSCAPE", "COUPLES", "CHILDREN", "RURAL", "FESTIVAL", "VACATION", "FOCUS"]);

    function handleSearch(e : ChangeEvent<HTMLInputElement>){
        let result = [];
        
        result  = categories.filter((category) => category.search(e.target.value.toLocaleUpperCase()) != -1);
        console.log(result);
        setFilters(result);
    }
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              Browse Categories
            </DrawerHeader>
  
            <DrawerBody>
              <Stack spacing='24px'>
                <Box>
                  <input type='text' placeholder="Search Categories" onChange={handleSearch}/>
                </Box>
  
                <Box>
                  <Box display='flex' flexDirection={'column'} alignItems={'center'} justifyContent='center'>
                    {filter.map((category) => <div><p style={{backgroundColor: '#EDF2F7', width: '200px', textAlign:"center", padding: '10px', margin: '10px', borderRadius: '10px'}}>{category}</p></div>)}
                  </Box>
                </Box>
              </Stack>
            </DrawerBody>
  
            <DrawerFooter borderTopWidth='1px'>
            <Button 
            bgColor={'black'} 
            color={'white'} 
            transform={'0.3s'}
            _hover={{bgColor: 'black', color: 'white'}} onClick={onClose}>Close</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default DrawerComponent;