// ShoppingCart.js
import { useShoppingCart } from "use-shopping-cart";
import CartItem from "./CartItem";
import CheckoutButton from "./CheckoutButton";

export default function ShoppingCart() {
  const { shouldDisplayCart, cartCount, cartDetails } = useShoppingCart();

  const handleSubmit = async () => {
    // Create a POST request to your API handler with cartDetails
    const response = await fetch("/api/checkout_sessions", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartDetails }),
    });

    // Process the response or redirect the user to the Stripe payment page
  };

  return (
    <div>
      <div
        className={`bg-white flex flex-col absolute right-3 md:right-9 top-14 w-80 py-4 px-4 shadow-[0_5px_15px_0_rgba(0,0,0,.15)] rounded-md transition-opacity duration-500 ${
          shouldDisplayCart ? "opacity-100" : "opacity-0"
        }`}
      >
        {cartCount && cartCount > 0 ? (
          <>
            {Object.values(cartDetails ?? {}).map((entry) => (
              <CartItem key={entry.id} item={entry} />
            ))}
            {/* Pass cartDetails to CheckoutButton component */}
            <CheckoutButton cartDetails={cartDetails} />
          </>
        ) : (
          <div className="p-5">You have no items in your cart</div>
        )}
      </div>
    </div>
  );
}
