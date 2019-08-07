import React from "react";

export default function SearchPage(props) {
    return (
        <div>
            <h2>Search Results {props.location.search}</h2>
        </div>
    );
}
