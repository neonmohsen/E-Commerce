import StripeCheckout from 'react-stripe-checkout';

export default function CheckoutStripe({price}){
    const stipePrice = price * 100;
    const publishKey = 'pk_test_51KYUo2BJnQHH4xTVdES243Z06bmM2lhN8UmcB1WeI73VmPQVcVULpoQHLNtY6xiSBo3XvnzOp0lDywT3Bbqv5iz200VrZ7xQS7'

    const onToken = (token) => {
        console.log(token);
        alert('payment was successfull')
    }

    return(
        <StripeCheckout 
            label = 'Pay Now'
            name = 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image = 'https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount = {stipePrice}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishKey}
        />
    )
}