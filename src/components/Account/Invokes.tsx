import { useEffect, useState } from "react";

import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../Common/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { getMyInvokes } from "@/redux/Invokes/invokes.actions";
import { State } from "@/redux/store";
import { InvokesData, MyInvokesState } from "@/redux/Invokes/invokes.types";
import CustomLoader from "../Common/CustomLoader";
import Link from "next/link";
import ImageCard from "../Images/ImageCard";
import { Button } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

const columnHelper = createColumnHelper<InvokesData>();

const columns = [
    columnHelper.accessor("id", {
        cell: (info) => info.getValue(),
        header: "image id"
    }),
    columnHelper.accessor("private_url", {
        cell: (info) => (<a href={info.getValue()} download={Date.now()} style={{background: 'black', color: 'white', padding: '8px', borderRadius: '5px'}}>Download</a>),
        header: "Download"
    }),
];
const MyInvokes = function () {
    const dispatch = useDispatch();
    const [rows, setRows] = useState<Array<InvokesData>>([]);
    const myInvokes = useSelector<State, MyInvokesState>(state => state.myInvokesState);
    useEffect(() => {
        dispatch(getMyInvokes() as any);
        setRows([]);
    }, [])

    useEffect(() => {
        console.log(myInvokes);
        if(myInvokes.loading == false){
            if(myInvokes.success == true){
                setRows(myInvokes.data)
            }
        }
    }, [myInvokes])
    console.log(myInvokes);
    return (
        <div>
            {myInvokes.loading ? <CustomLoader /> : <div style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                <div className="image-details">
            {rows.map((item) => {
                return <><img src={item.public_url} className='details-img' loading="eager"/>
                <div className="actions-image">
                    <Link href={item.private_url}>
                    <Button
                        leftIcon={<DownloadIcon />}
                        bgColor={'black'}
                        color={'white'}
                        transform={'0.3s'}
                        _hover={{ bgColor: 'black', color: 'white' }}>Download</Button>
                    </Link>
                    
                </div></>
            })}   
            </div>
        </div>}
        

        </div>
    )
}

export default MyInvokes;