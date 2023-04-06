import { Button, useDisclosure } from "@chakra-ui/react";
import { FormEvent, FormEventHandler } from "react";
import ModelOverlay from "./ModelOverlay";

const Search = function(){
    function handleSubmit(event : FormEvent<HTMLFormElement>){
        event.preventDefault();

    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div className="search">
            <form method="get" onSubmit={handleSubmit}>
                <input type={'text'} name='search_field' placeholder="Search Images" autoComplete="off"/>
            </form>
            <button onClick={onOpen} className='button'>Filter</button>
            <ModelOverlay isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
        </div>
    )
}

export default Search;
