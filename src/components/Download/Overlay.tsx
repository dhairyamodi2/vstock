import React from "react";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import DownloadOverlay from "./SubscriptionsModelOverlay";
import { ImageDetailState } from "@/redux/Images/images.types";

interface DownloadOverlayProps {
    onClose: () => void;
    isOpen: boolean;
    imageDetails: ImageDetailState
}

const Overlay: React.FC<DownloadOverlayProps> = function ({ onClose, isOpen, imageDetails }) {
    return (

        <DownloadOverlay onClose={onClose} isOpen={isOpen} imageDetails={imageDetails} />
    )
}

export default Overlay;