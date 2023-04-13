import { CardElement, CardNumberElement, PaymentElement } from "@stripe/react-stripe-js";
import { FormEvent, FormEventHandler, MouseEventHandler, useEffect, useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { Button, FormControl } from "@chakra-ui/react";
import { PaymentIntent, StripeCardElement } from "@stripe/stripe-js";

interface CheckoutProps {
    client_secret: string;
    s_name: string;
}

const CheckoutForm: React.FC<CheckoutProps> = ({ client_secret, s_name }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState<string | null | undefined>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit: MouseEventHandler<HTMLButtonElement> = async (e) => {

        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsProcessing(true);
        const result = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement) as StripeCardElement
            }
        })

        if (result.error || !result.paymentIntent) {
            alert(result.error.message);
            return;
        }
        console.log(result.paymentIntent);
        try {
            const data = await fetch('http://localhost:3001/subscriptions/subscribe', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify({ s_name, amount_paid: result.paymentIntent.amount })
            })
            const res = await data.json();

            if (res.statusCode == 401 || res.statusCode == 400) {
                alert(res.message);
                window.location.reload();
                return;
            }
            if (res.success == true) {
                alert('Payment succeed, You can now download images');
                window.location.reload();
            }
            alert(res.message)
            window.location.reload();
        } catch (error) {
            alert(error)
            window.location.reload();
        }





    };

    return (
        <FormControl id="payment-form">
            <CardElement options={{
                style: {
                    base: {
                        color: 'black',
                        fontFamily: 'Ubuntu',
                        padding: '90px',
                        iconColor: 'black',
                        backgroundColor: 'light'
                    },
                },
                iconStyle: 'solid',
            }} />
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                <Button
                    disabled={isProcessing || !stripe || !elements}
                    bgColor={'black'}
                    color={'white'}
                    transform={'0.3s'}
                    _hover={{ bgColor: 'black', color: 'white' }} onClick={handleSubmit} >Pay Now</Button>
            </div>
        </FormControl >
    );
}

export default CheckoutForm;