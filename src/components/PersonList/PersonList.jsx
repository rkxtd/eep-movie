import React from "react";
import PersonCard from "../PersonCard/PersonCard";
import InfiniteScroll from 'react-infinite-scroller';

export default function PersonList({persons, loadMorePersons }) {
  const items = persons.map((person, index) => <PersonCard key={index} {...person} />);
  return (
    <React.Fragment>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMorePersons}
        hasMore={true}
        loader={<div className="loader" key={0}>Loading ...</div>}
        style={{display: 'flex', justifyContent: 'center', alignContent: 'stretch', flexWrap: 'wrap'}}
      >
        {items}
      </InfiniteScroll>
    </React.Fragment>
  );
}
