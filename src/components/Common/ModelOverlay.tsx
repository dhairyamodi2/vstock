import { OverlayProps } from "@/types/overlay"
import { Button, Checkbox, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import React, { ChangeEvent, useState } from "react"

const ModelOverlay : React.FC<OverlayProps>= function ({isOpen, onClose, onOpen}){


    const [categories, setCategories] = useState(["MEN", "WOMEN", "LANDSCAPE", "COUPLES", "CHILDREN", "RURAL", "FESTIVAL", "VACATION", "FOCUS"]);

    const [filter, setFilters] = useState(["MEN", "WOMEN", "LANDSCAPE", "COUPLES", "CHILDREN", "RURAL", "FESTIVAL", "VACATION", "FOCUS"]);
    function handleChange(e : ChangeEvent<HTMLInputElement>){
        console.log(e.target.checked + " " + e.target.name);
    }

    function handleSearch(e : ChangeEvent<HTMLInputElement>){
        let result = [];
        
        result  = categories.filter((category) => category.search(e.target.value.toLocaleUpperCase()) != -1);
        console.log(result);
        setFilters(result);
    }
    return (
        <>
         <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search By Categories</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <input type={'text'} placeholder={'Search Categories'} onChange={handleSearch}/>
            <div className="model-overlay-categories">
                {filter.map((category, i) => <><Checkbox colorScheme={'gray'} name = {category} onChange={handleChange} key={category} marginLeft={'10px'} marginRight={'10px'}>{category}</Checkbox></>)}
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='gray' mr={3} onClick={onClose}>
              Remove Filters
            </Button>
            <Button 
            bgColor={'black'} 
            color={'white'} 
            transform={'0.3s'}
            _hover={{bgColor: 'black', color: 'white'}}>Apply Filters</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </>
    )
}

export default ModelOverlay;