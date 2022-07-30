import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth, useCart } from "../context";

export const useRazorpay = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { clearCart } = useCart();
  console.log(user);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  //Display razorpay
  const displayRazorPay = async ({ total }) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      //toast error here
      toast.error("Internet Connection Required");
      // console.log("Internet Connection Required");
      return;
    }
    console.log("user.user.firstName: ", user.user.firstName);
    console.log("user.user.email: ", user.user.email);
    const options = {
      key: "rzp_test_SjYVhvnj56VqGp",
      amount: total * 100,
      currency: "INR",
      name: "Hogwarts Supplies",
      description: "You are one step closer to get your products...",
      handler: async function (response) {
        clearCart();
        toast.success("Order Placed Successfully");
        navigate("/success");
      },
      prefill: {
        name: user.user.firstName,
        email: user.user.email,
      },
      theme: {
        color: "#ffad00",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return { displayRazorPay };
};
