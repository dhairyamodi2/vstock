import { CategoryState } from "@/redux/Categories/categories.type";
import { State } from "@/redux/store";
import { OverlayProps } from "@/types/overlay"
import { Button, Checkbox, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react"
import { useSelector } from "react-redux";

const ModelOverlay: React.FC<OverlayProps> = function ({ isOpen, onClose, onOpen }) {

  const { categories } = useSelector<State, CategoryState>((state: State) => state.categories);
  console.log(categories);
  const [filter, setFilters] = useState<typeof categories | undefined>(categories);
  const [filteredCategories, setFilteredCategories] = useState<string []>([]);
  const router = useRouter();
  function handleChange(e: ChangeEvent<HTMLInputElement>) {

    let arr = filteredCategories;
    let idx = arr.indexOf(e.target.name);
    if (e.target.checked) {
      if (idx == -1) {  arr.push(e.target.name)}
      console.log(arr);
    } 
    else {
      arr.splice(idx as number, 1);
    }
    setFilteredCategories(arr);
  }


  function handleSearch(e: ChangeEvent<HTMLInputElement>) {

    let result = categories?.filter((category) => category.category_name.search(e.target.value.toLocaleUpperCase()) != -1);
    console.log(result);
    setFilters(result);
  }
  useEffect(() => {
    setFilters(categories);
  }, [categories])
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
        <ModalOverlay backdropFilter='blur(10px) hue-rotate(90deg)' />
        <ModalContent>
          <ModalHeader>Search By Categories</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* {JSON.stringify(categories)} */}
            <input type={'text'} placeholder={'Search Categories'} onChange={handleSearch} />
            <div className="model-overlay-categories">
              {filter?.map((category, i) => <><Checkbox colorScheme={'gray'} name={category.category_name} onChange={handleChange} key={category.category_name} marginLeft={'10px'} marginRight={'10px'}>{category.category_name}</Checkbox></>)}
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
              _hover={{ bgColor: 'black', color: 'white' }} onClick={() => {
                const params = new URLSearchParams();
                filteredCategories?.map((item) => {
                  params.append('categories', item);
                })
                console.log(filteredCategories);
                console.log('applied');
                console.log(params);
                router.push('http://localhost:3000/images?' + params);
                onClose();
              }}>Apply Filters</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModelOverlay;