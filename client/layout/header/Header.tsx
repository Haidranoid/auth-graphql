import React, {FC} from "react";
import {useQuery} from "@apollo/client";
import {UserData, GET_USER} from "../../queries/users"

const Header: FC = ({children}) => {
    const {data, error, loading} = useQuery<UserData>(GET_USER);

    return <div>
        <h3>Header</h3>
        {children}
    </div>
}

export default Header;