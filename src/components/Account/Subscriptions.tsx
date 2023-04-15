import { useEffect, useState } from "react";

import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../Common/DataTable";
import { Subscription } from "@/types/Subscription";
import CustomLoader from "../Common/CustomLoader";
import { Badge } from "@chakra-ui/react";

type UnitConversion = {
  fromUnit: string;
  toUnit: string;
  factor: number;
};

const data: UnitConversion[] = [
  {
    fromUnit: "inches",
    toUnit: "millimetres (mm)",
    factor: 25.4
  },
  {
    fromUnit: "feet",
    toUnit: "centimetres (cm)",
    factor: 30.48
  },
  {
    fromUnit: "yards",
    toUnit: "metres (m)",
    factor: 0.91444
  }
];

const columnHelper = createColumnHelper<Subscription>();

const columns = [
  columnHelper.accessor("s_id", {
    cell: (info) => info.getValue(),
    header: "Sub Id"
  }),
  columnHelper.accessor("s_name", {
    cell: (info) => info.getValue(),
    header: "Sub Type"
  }),
  columnHelper.accessor("active", {
    cell: (info) => info.getValue() == true ? <Badge color={'green'} size={'lg'}>Active</Badge> : <Badge color={'red'} size={'lg'}>Expired</Badge>,
    header: "Active",
  }),
  columnHelper.accessor("remaining_images", {
    cell: (info) => info.getValue(),
    header: "Remaining Images",
    meta: {
        isNumeric: true
    }
  }),
  columnHelper.accessor("amount_paid", {
    cell: (info) => info.getValue()/100,
    header: "Amount Paid",
    meta: {
        isNumeric: true
    }
  })
];
const MySubscriptions = function(){
    const [rows, setRows] = useState<Array<Subscription>>([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setLoader(true);
        async function getsub(){
            const data = await fetch('http://localhost:3001/subscriptions', {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            if(data.status == 401){
                window.location.reload();
            }
            const res = await data.json();
            if(res.success == true){
                setRows(res.data as Array<Subscription>);
                // alert(res.data[0].active);
                // alert('success')
            }
            setLoader(false);
        }

        getsub();
    }, [])
    return (
        <div>
            {loader === true ? <CustomLoader /> : <DataTable columns={columns} data={rows}></DataTable>}
            
        </div>
    )
}

export default MySubscriptions;