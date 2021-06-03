import { loadStripe } from '@stripe/stripe-js'
import { Elements } from "@stripe/react-stripe-js"
import React from 'react'
import PaymentForm from './PaymentForm';



const PUBLIC_KEY = "pk_test_51IhS3GKWA9rWgxhiTeERvaNv188lxhXfDXwDBcgWLTqqd1UGsduurfEMJ4S7vP7nxodof3Xj9ghNsSTZp5wekCcV00PvCC4iKM"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>


        <PaymentForm />
            
        </Elements>
    )
}

export default StripeContainer
