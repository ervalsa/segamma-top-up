import React, { useEffect } from "react";
import AppLayout from "../../layouts/AppLayout.jsx";

export default function Promo() {

    useEffect(() => {
        document.title = "Segamma | Promo"
    }, []);

    return (
        <AppLayout>

        </AppLayout>
    )
}