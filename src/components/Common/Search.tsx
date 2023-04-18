import { Button, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FormEvent, FormEventHandler, useState } from "react";
import ModelOverlay from "./ModelOverlay";

const Search = function(){
    const router = useRouter();
    const [search_field, setField] = useState<string>()
    function handleSubmit(event : FormEvent<HTMLFormElement>){
        event.preventDefault();
        router.push('http://localhost:3000/images/search?search_field=' + search_field);

    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div className="search">
            <form method="get" onSubmit={handleSubmit}>
                <input type={'text'} name='search_field' placeholder="Search Images" autoComplete="off"
                onChange={(e) => {setField(e.target.value)}}/>
            </form>
            <Button 
            bgColor={'black'} 
            color={'white'} 
            transform={'0.3s'}
            _hover={{bgColor: 'black', color: 'white'}} onClick={onOpen}>Filter</Button>
            <ModelOverlay isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
        </div>
    )
}

export default Search;
