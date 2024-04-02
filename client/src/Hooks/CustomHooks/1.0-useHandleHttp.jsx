import React from "react";

export const useHandleHttp = () => {

    const getHttpUsers = async () => {

        const getData = await fetch( `${URL}/users` )
    }


    return {

        getHttpUsers,

    }
}