import { Layout } from "../../components/Layout/Layout";
import { Store } from "../../pages/Store/Store";
import { Cart } from "../../pages/Cart/Cart";
import { AboutUs } from "../../pages/AboutUs/AboutUs";
import { TermsOfUse } from "../../pages/TermsOfUse/TermsOfUse";

export const routes = [
    {
        element: <Layout />,
        path: "/",
        children:
            [
                {
                    element: <Store />,
                    path: "/"
                },
                {
                    element: <Cart />,
                    path: "/cart"
                },
                {
                    element: <AboutUs />,
                    path: "/about-us"
                },
                {
                    element: <TermsOfUse />,
                    path: "/terms-of-use"
                }
            ]
        }
    ]