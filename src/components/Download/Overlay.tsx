import React from "react";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import DownloadOverlay from "./SubscriptionsModelOverlay";
import { ImageDetailState } from "@/redux/Images/images.types";

interface DownloadOverlayProps {
    onClose : () => void;
    isOpen : boolean;
    imageDetails : ImageDetailState
}
const stripePromise = loadStripe('pk_test_51MwJarSBJ7cnqOzKP9B3vNBsOhP05DSmm45vBLC6MArC5cYRf8A8cP1pRCL2btSvV93v59H4eCaE1VrKFGNuAoXK00943XcRgM');
const Overlay : React.FC<DownloadOverlayProps> = function({onClose, isOpen, imageDetails}){
    const options = {
        clientSecret : 'sk_test_51MwJarSBJ7cnqOzKU22H72pgfE07HgCftEivDTQVFC6ciOB7RglArEMDbsiq3jsGsIhJEPlFevjqYPqe4QYkUxY100Z0ef30gQ'
    }
    return (
        <Elements stripe={stripePromise}>
            <DownloadOverlay onClose={onClose} isOpen={isOpen} imageDetails={imageDetails}/>
        </Elements>
    )
}

export default Overlay;